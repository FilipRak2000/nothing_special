import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateProductDto{

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

}