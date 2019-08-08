import { Controller, Get, Post, Put, Delete, Body, Request, Res, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { ITodo } from './interfaces/todo.interface';


@UseGuards(AuthGuard('jwt'))
@Controller('todos')
export class TodoController {
	constructor(
		private readonly todoService: TodoService,
	) {}

	@Get(':id')
	async findOne(@Param() params): Promise<ITodo> {
		return await this.todoService.findOne(params.id);
	}

	@Get()
	async findAll(): Promise<ITodo[]> {
		return await this.todoService.findAll();
	}

	@Post()
	async create(@Request() req, @Body() todo: CreateTodoDto): Promise<ITodo> {
		return await this.todoService.create(req.userId, todo);
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