import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { IUser } from './interfaces/user.interface';
import { User } from './user.entity';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>
	) {}

	async findByUsername(username: string): Promise<IUser | undefined> {
		return await this.userRepository.findOne({ where: { username: username } });
	}

	async findOne(id: string): Promise<IUser> {
		const user = await this.userRepository.findOne(id);
		if(!user) {
			throw new HttpException("User not found", HttpStatus.NOT_FOUND);
		}
		return user;
	}

	async findAll(): Promise<IUser[]> {
		return await this.userRepository.find();
	}

	async create(user: IUser): Promise<IUser> {
		return await this.userRepository.save(user);
	}

	async update(id: string, data: IUser): Promise<UpdateResult> {
		const user = await this.userRepository.findOne(id);
		if(!user) {
			throw new HttpException("User not found", HttpStatus.NOT_FOUND);
		}
		return await this.userRepository.update(id, data);
	}

	async delete(id: string): Promise<DeleteResult> {
		const user = await this.userRepository.findOne(id);
		if(!user) {
			throw new HttpException("User not found", HttpStatus.NOT_FOUND);
		}
		return await this.userRepository.delete(id);
	}
}
