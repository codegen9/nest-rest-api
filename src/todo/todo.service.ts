import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { UserService } from '../user/user.service';
import { ITodo } from './interfaces/todo.interface';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
	constructor(
		@InjectRepository(Todo)
		private readonly todoRepository: Repository<Todo>,
		private readonly userService: UserService
	) {}

	async findOne(id: string): Promise<ITodo> {
		const todo = await this.todoRepository.findOne(id);
		console.log(todo.user);
		return todo;
	}

	async findAll(): Promise<ITodo[]> {
		return await this.todoRepository.find();
	}

	async create(userId: string, todo: ITodo): Promise<ITodo> {
		const user = await this.userService.findOne(userId);
		return await this.todoRepository.save(Object.assign(todo, {user: user}));
	}

	async update(id: string, todo: ITodo): Promise<UpdateResult> {
		return await this.todoRepository.update(id, todo);
	}

	async delete(id: string): Promise<DeleteResult> {
		return await this.todoRepository.delete(id);
	}
}