import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Board} from "./entities/Board.entity";
import {BoardService} from "./board.service";
import {BoardController} from "./board.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Board])],
  providers: [BoardService],
  controllers: [BoardController],
})
export class BoardModule {}
