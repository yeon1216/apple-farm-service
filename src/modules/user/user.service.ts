import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { User } from './entities/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Not, Repository } from 'typeorm';
import Message from './user.message';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FirebaseProvider } from '../firebase/firebase.provider';
import { FindUserDto } from './dto/find-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private firebaseProvider: FirebaseProvider,
  ) {}

  /**
   * 유저를 생성한다.
   *
   * @param {CreateUserDto} createUserDto - 유저 생성 Dto
   * @returns {Promise<User>}
   */
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const userToCreate = await this.userRepository.findOne({
      where: {
        uid: createUserDto.uid,
      },
    });

    if (userToCreate) {
      throw new ConflictException(Message.USER_ALREADY_EXISTS);
    }

    const user = this.userRepository.create();
    user.uid = createUserDto.uid;
    user.email = createUserDto.email;
    user.name = createUserDto.name;
    user.profileUrl = createUserDto.profileUrl;
    return this.userRepository.save(user);
  }

  /**
   * 모든 유저 정보를 조회한다.
   *
   * @returns {Promise<User[]>}
   */
  async getUsers(findUserDto: FindUserDto): Promise<User[]> {
    let query = {};
    query = Object.assign({}, findUserDto);
    if (findUserDto?.username) {
      query = Object.assign(query, {
        username: Like(`%${findUserDto.username}%`),
      });
    }

    return this.userRepository.find(query);
  }

  /**
   * 유저 uid에 해당하는 유저 정보를 조회한다.
   *
   * @param {string} uid - 유저 uid
   * @returns {Promise<User>}
   */
  async getUserByUid(uid: string): Promise<User> {
    const data = await this.userRepository.findOne({
      where: {
        uid,
      },
    });
    if (!data) {
      throw new BadRequestException(Message.NOT_FOUND_USER_ITEM);
    }
    return data;
  }

  /**
   * 유저 Id에 해당하는 유저 정보를 삭제한다.
   *
   * @param {number} id - 유저 Id
   * @returns {Promise<void>}
   */
  async removeUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  /**
   * uid로 user 삭제
   */
  async removeUserByUid(uid: string): Promise<void> {
    await this.userRepository.delete({ uid });
  }

  /**
   * user 삭제
   */
  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  /**
   * user 수정
   */
  async updateUser(uid: string, updateUserDto: UpdateUserDto): Promise<User> {
    const userToUpdate = await this.userRepository.findOne({
      where: {
        uid,
      },
    });

    if (!userToUpdate) {
      throw new BadRequestException(Message.NOT_FOUND_USER_ITEM);
    }

    userToUpdate.name = updateUserDto.name;
    userToUpdate.profileUrl = updateUserDto.profileUrl;

    return this.userRepository.save(userToUpdate);
  }
}
