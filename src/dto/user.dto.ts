import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, isEmail } from 'class-validator';

export class UserDTO {
    @ApiProperty({
        type: String,
        description: 'user name'
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: String,
        description: 'user email'
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;
}