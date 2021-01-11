// import { CameraFiInfo } from "./CameraFiInfo.entity";
// import { ScoredaInfo } from "./ScoredaInfo.entity";
import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;
    @Column({
        unique: true,
    })
    @ApiProperty()
    uid: string;
    @Column({
        default: ''
    })
    @ApiProperty()
    username: string;
    @Column({
        default: ''
    })
    @ApiProperty()
    email: string;
    @Column({
        unique: true,
    })
    @ApiProperty()
    profileUrl: string;
    @Column({
        default: ''
    })

    public static of(params: Partial<User>): User {
        const user = new User();

        Object.assign(user, params);

        return user;
    }
}
