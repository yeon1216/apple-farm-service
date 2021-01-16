import {Column, Entity, OneToOne, PrimaryGeneratedColumn,
        CreateDateColumn, UpdateDateColumn} from "typeorm";
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

    @CreateDateColumn()
    @ApiProperty()
    createdAt: Date;

    @UpdateDateColumn()
    @ApiProperty()
    updatedAt: Date;
}
