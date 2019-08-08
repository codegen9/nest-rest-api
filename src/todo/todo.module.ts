import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoService } from './todo.service';
import { UserModule } from '../user/user.module';
import { TodoController } from './todo.controller';
import { Todo } from './todo.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([Todo]),
		UserModule
	],
	controllers: [TodoController],
	providers: [TodoService],
})
export class TodoModule {}