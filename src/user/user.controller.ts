import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UserController {
	constructor(
		private readonly userService: UserService
	) {}

	@Get()
	async findAll(): Promise<IUser[]> {
		return await this.userService.findAll();
	}

	@Get(':id')
	async findOne(@Param() params): Promise<IUser> {
		return await this.userService.findOne(params.id);
	}

	@Post()
	async create(@Body() user: CreateUserDto): Promise<IUser> {
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
