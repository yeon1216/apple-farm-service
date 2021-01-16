// import { CameraFiInfo } from "./CameraFiInfo.entity";
// import { ScoredaInfo } from "./ScoredaInfo.entity";
import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn,
    CreateDateColumn, UpdateDateColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    @ApiProperty({
        type:Number,
        description: 'PK',
    })
    id: number;

    @Column({
        unique: true,
    })
    @ApiProperty({
        type:String,
        description: 'Firebase uid',
    })
    uid: string;

    @Column({
        default: ''
    })
    @ApiProperty({
        type:String,
        description: 'User email',
    })
    email: string;

    @Column({
        default: ''
    })
    @ApiProperty({
        type:String,
        description: 'User name',
    })
    name: string;
    
    @Column({
        unique: true,
        default: ''
    })
    @ApiProperty({
        type:String,
        description: 'User profile url',
    })
    profileUrl: string;

    @CreateDateColumn()
    @ApiProperty()
    createdAt: Date;

    @UpdateDateColumn()
    @ApiProperty()
    updatedAt: Date;

}
