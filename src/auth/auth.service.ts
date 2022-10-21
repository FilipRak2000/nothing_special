import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { find } from 'rxjs';
@Injectable({})
export class AuthService{
    constructor(private prisma: PrismaService){}

   async singup(dto: AuthDto){

        const hash = await argon.hash(dto.password);
    try{

        const user = await this.prisma.user.create({
            data:{
                email: dto.email,
                nickname: dto.nickname,
                hash
                
            },
        });

        return user;
    }
    catch(error){
        if(error instanceof PrismaClientKnownRequestError){
            if(error.code ==='P2002'){
                throw new ForbiddenException('error') 
            }
        }
    }
    }

    async signin(dto: AuthDto){
        const user = await this.prisma.user.findUnique({
            where:{
                email: dto.email,
            },
        });
        if(!user){
            throw new ForbiddenException(
                "user doesn't exist",
            );
        };

        const matches = await argon.verify(
            user.hash,
            dto.password
        );
        if(!matches){
            throw new ForbiddenException(
                "wrong password",
            );
        }
        return user;
    }
}