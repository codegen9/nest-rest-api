import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserInterface } from './interfaces/user.interface';


@Controller('users')
export class UserController {
	constructor(
		private readonly userService: UserService
	) {}

	@Get()
	async findAll(): Promise<UserInterface[]> {
		return await this.userService.findAll();
	}

	@Get(':id')
	async findOne(@Param() params): Promise<UserInterface> {
		return await this.userService.findOne(params.id);
	}

	@Post()
	async create(@Body() user: CreateUserDto): Promise<UserInterface> {
		return await this.userService.create(user);
	}

	@Put(':id')
	async update(@Param() params, @Body() user: CreateUserDto): Promise<any> {
		return await this.userService.update(params.id, user);
	}

	@Delete(':id')
	async delete(@Param() params): Promise<any> {
		return await this.userService.delete(params.id);
	}
}
