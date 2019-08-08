import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
  	UserModule,
  	TodoModule,
  	TypeOrmModule.forRoot(),
  	AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
	constructor(private readonly connection: Connection) {}
}