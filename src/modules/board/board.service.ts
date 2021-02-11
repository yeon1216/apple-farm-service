import { BadRequestException, Injectable } from '@nestjs/common';
import { Board } from './entities/Board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Message from './board.message';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  /**
   * 게시물를 생성
   *
   * @param {CreateBoardDto} createBoardDto
   * @returns {Promise<Board>}
   */
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const board = this.boardRepository.create();
    board.uid = createBoardDto.uid;
    board.title = createBoardDto.title;
    board.content = createBoardDto.content;

    return this.boardRepository.save(board);
  }

  /**
   * 모든 게시물 조회
   *
   * @returns {Promise<Board[]>}
   */
  async getBoard(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  /**
   * 게시물 Id에 해당하는 게시물 정보 조회
   *
   * @param {number} id - 게시물 Id
   * @returns {Promise<Board>}
   */
  async getBoardById(id: number): Promise<Board> {
    return this.boardRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  /**
   * 게시물 Id에 해당하는 게시물 정보 수정
   *
   * @param id
   * @param updateBoardDto
   */
  async updateBoard(
    id: number,
    updateBoardDto: UpdateBoardDto,
  ): Promise<Board> {
    const boardToUpdate = await this.boardRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!boardToUpdate) {
      throw new BadRequestException(Message.NOT_FOUND_BOARD_ITEM);
    }

    boardToUpdate.title = updateBoardDto.title;
    boardToUpdate.content = updateBoardDto.content;

    return this.boardRepository.save(boardToUpdate);
  }

  /**
   * 게시물 Id에 해당하는 게시물 삭제
   *
   * @param {number} id - 게시물 Id
   * @returns {Promise<void>}
   */
  async removeAdmin(id: number): Promise<void> {
    await this.boardRepository.delete(id);
  }

  // findOne(id: string): Promise<Board> {
  //     return this.boardRepository.findOne(id);
  // }

  // async remove(id: string): Promise<void> {
  //     await this.boardRepository.delete(id);
  // }
}
