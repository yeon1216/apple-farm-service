import {IsOptional, IsString} from "class-validator";
import {ApiPropertyOptional} from "@nestjs/swagger";

export class FindUserDto {
    @IsOptional()
    @IsString()
    @ApiPropertyOptional()
    uid: string;
    @IsOptional()
    @IsString()
    @ApiPropertyOptional()
    email: string;
    @IsOptional()
    @IsString()
    @ApiPropertyOptional()
    username: string;
    @IsOptional()
    @IsString()
    @ApiPropertyOptional()
    profileUrl: string;
}
