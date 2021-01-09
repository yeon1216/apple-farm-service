import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '../modules/config/config.service';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        const config: {[k: string]: any} = {
            type: this.configService.get('DB_TYPE'),
            host: this.configService.get('DB_HOST'),
            port: this.configService.get('DB_PORT'),
            username: this.configService.get('DB_USERNAME'),
            password: this.configService.get('DB_PASSWORD'),
            database: this.configService.get('DB_NAME'),
            socketPath: this.configService.get('DB_SOCKET_PATH'),
            entities: ['dist/**/*.entity.js'],
            synchronize: true,
            // synchronize: false,
        };
        // if(this.configService.isEnv('production')){
        //     config.extra = {
        //         socketPath: this.configService.get('DB_SOCKET_PATH')
        //     }
        // }else if(this.configService.isEnv('development')){
        //     config.port = parseInt(this.configService.get('DB_PORT')) || 3306
        // }
        return config
    }
}
