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
    title: string;
    @IsOptional()
    @IsString()
    @ApiPropertyOptional()
    content: string;
}
