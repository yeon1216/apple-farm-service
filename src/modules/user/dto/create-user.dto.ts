import {IsNotEmpty, IsOptional, IsString} from "class-validator";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: '시용자 firebase uid'})
    uid: string;

    @IsOptional()
    @IsString()
    @ApiPropertyOptional()
    email: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    username: string;

    @IsOptional()
    @IsString()
    @ApiPropertyOptional()
    profileUrl: string;
}
