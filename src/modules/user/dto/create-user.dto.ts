import {IsNotEmpty, IsOptional, IsString} from "class-validator";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: '시용자 firebase uid'})
    uid: string;

    
    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    email: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    name: string;

    @IsOptional()
    @IsString()
    @ApiPropertyOptional()
    profileUrl: string;
}
