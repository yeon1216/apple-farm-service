import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export class CreateBoardDto {
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
