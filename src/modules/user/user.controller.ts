import {
    Controller,
    Get,
    Post,
    Param,
    Body,
    Delete,
    Put,
    Query
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User} from "./entities/User.entity";
import {
    ApiBadRequestResponse,
    ApiConflictResponse,
    ApiHeader,
    ApiOkResponse,
    ApiOperation, ApiParam,
    ApiTags
} from "@nestjs/swagger";
import {FindUserDto} from "./dto/find-user.dto";
// import {isEmptyObject} from "../../utils/object";
import {FirebaseProvider} from "../firebase/firebase.provider";

@Controller('users')
@ApiTags('사용자 api(users)')
export class UserController {

    constructor(private userService: UserService, private firebaseProvider: FirebaseProvider) {
    }

    @Get()
    @ApiOperation({ description: '모든 User 조회' })
    @ApiHeader({
        name: '인증 헤더',
        description: '"Admin 권한을 가진 사람만 접근 가능, Bearer token" 형식으로 전송, 그렇지 않으면 서버 쪽에서 authorization header에 접근 불가',
    })
    @ApiOkResponse({type: ()=>User, isArray: true, description: '사용자 리스트'})
    async findAll(@Query() query: FindUserDto): Promise<User[]> {
        return this.userService.getUsers(query);
    }

    @Post()
    @ApiOperation({ description: '새 사용자 생성' })
    @ApiConflictResponse({description: '중복된 사용자 uid를 가지고 요청했을경우 user/already-exists 응답'})
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto);
    }

    @Get(':uid')
    @ApiOperation({ description: '특정 사용자 검색' })
    @ApiParam({name: 'uid', type: String, description: '사용자의 uid'})
    @ApiBadRequestResponse({description: '존재하지 않는 사용자 uid를 요청했을경우 user/not-found 메세지 응답'})
    findOne(@Param('uid') uid: string): Promise<User> {
        return this.userService.getUserByUid(uid);
    }

    @Put(':uid')
    @ApiOperation({ description: '사용자 업데이트' })
    @ApiParam({name: 'uid', type: String, description: '사용자의 uid'})
    @ApiBadRequestResponse({description: '존재하지 않는 사용자 uid를 요청했을경우 user/not-found 메세지 응답'})
    @ApiConflictResponse({description: '중복된 call id를 가지고 요청했을경우 user/duplicate-callId 메세지 응답'})
    update(
        @Param('uid') uid: string,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<User> {
        return this.userService.updateUser(uid, updateUserDto);
    }
    
    @ApiOperation({ description: '사용자 삭제' })
    @ApiBadRequestResponse({description: '존재하지 않는 사용자 uid를 요청했을경우 user/not-found 메세지 응답'})
    @Delete(':uid')
    remove(@Param('uid') uid: string): Promise<void> {
        return this.userService.removeUser(uid);
    }

}
