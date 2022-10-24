import { Get, Controller, UseGuards} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { User } from "@prisma/client";
import { Request } from "express";
import { GetUser } from "src/auth/decorators";
import { JwtGuard } from "src/auth/guard";


@Controller('users')
export class UserController{
    @UseGuards(JwtGuard)
    @Get('me')
    getMe(@GetUser() user: User){
        return user;
    }
}

