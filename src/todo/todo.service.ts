import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { TodoInterface } from './interfaces/todo.interface';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
	constructor(
		@InjectRepository(Todo)
		private readonly todoRepository: Repository<Todo>
	) {}

	async findOne(id: string): Promise<TodoInterface> {
		return await this.todoRepository.findOne(id);
	}

	async findAll(): Promise<TodoInterface[]> {
		return await this.todoRepository.find();
	}

	async create(todo: TodoInterface): Promise<TodoInterface> {
		return await this.todoRepository.save(todo);
	}

	async update(id: string, todo: TodoInterface): Promise<UpdateResult> {
		return await this.todoRepository.update(id, todo);
	}

	async delete(id: string): Promise<DeleteResult> {
		return await this.todoRepository.delete(id);
	}
}