import { Controller, Get, Post, Put, Delete, Body, Request, Res, Param } from '@nestjs/common';

import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoInterface } from './interfaces/todo.interface';


@Controller('todos')
export class TodoController {
	constructor(
		private readonly todoService: TodoService,
	) {}

	@Get(':id')
	async findOne(@Param() params): Promise<TodoInterface> {
		return await this.todoService.findOne(params.id);
	}

	@Get()
	async findAll(): Promise<TodoInterface[]> {
		return await this.todoService.findAll();
	}

	@Post()
	async create(@Body() todo: CreateTodoDto): Promise<TodoInterface> {
		return await this.todoService.create(todo);
	}

	@Put(':id')
	async update(@Param('id') id: string, @Body() todo: CreateTodoDto): Promise<any> {
		return await this.todoService.update(id, todo);
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<any> {
		return await this.todoService.delete(id);
	}

}