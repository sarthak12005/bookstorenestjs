import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(8)
    password:string;

    
}