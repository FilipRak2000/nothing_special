import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';




@Controller('auth')
export class AuthController{
constructor(private authService: AuthService ){}

    @Post('signup')
    signup(@Body() dto: AuthDto){
        console.log({dto})
    return this.authService.singup(dto);
    }

    @Post('signin')
    signin(@Body() dto:AuthDto){
        console.log("okay")
        return this.authService.signin(dto);
    }

}