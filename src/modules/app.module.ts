import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TypeOrmConfigService} from "../database/ormconfig.service";
import {ConfigModule} from "./config/config.module";
import {ConfigService} from "./config/config.service";
import {BoardModule} from "./board/board.module";
// import { AppController } from '../app.controller';
// import { AppService } from '../app.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
      inject: [ConfigService],
    }),
    ConfigModule,
    BoardModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
