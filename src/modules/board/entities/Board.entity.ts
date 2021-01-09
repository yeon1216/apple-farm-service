import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        unique: true,
    })
    uid: string;
    @Column({
        default: ''
    })
    title: string;
    @Column({
        default: ''
    })
    content: string;
    @Column({
        default: ''
    })


    public static of(params: Partial<Board>): Board {
        const board = new Board();

        Object.assign(board, params);

        return board;
    }
}
