import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export class UpdateBoardDto {
    @IsString()
    @IsNotEmpty()
    uid: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}
