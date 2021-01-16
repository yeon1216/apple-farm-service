import {IsNotEmpty, IsOptional, IsString} from "class-validator";
import {ApiPropertyOptional} from "@nestjs/swagger";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @ApiPropertyOptional()
    name: string;
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @ApiPropertyOptional()
    profileUrl: string;
}
