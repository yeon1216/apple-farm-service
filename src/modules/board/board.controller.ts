import {
    Controller,
    Get,
    Post,
    HttpCode,
    Param,
    Body,
    Delete,
    Put,
    ParseIntPipe,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import {Board} from "./entities/Board.entity";

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService) {
    }

    /**
     * create board
     * @param createBoardDto 
     */
    @Post()
    create(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
        return this.boardService.createBoard(createBoardDto);
    }

    /**
     * find all board
     */
    @Get()
    findAll(): Promise<Board[]> {
        return this.boardService.getBoard();
    }

    /**
     * find a board by id
     */
    @Get(':id')
    findOne(@Param('id', new ParseIntPipe()) id: number): Promise<Board> {
        return this.boardService.getBoardById(id);
    }

    /**
     * update a board by id
     */
    @Put(':id')
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() updateBoardDto: UpdateBoardDto,
    ): Promise<Board> {
        return this.boardService.updateBoard(id, updateBoardDto);
    }

    /**
     * delete a board by id
     */
    @Delete(':id')
    remove(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
        return this.boardService.removeAdmin(id);
    }

}
