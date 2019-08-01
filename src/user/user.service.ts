import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { UserInterface } from './interfaces/user.interface';
import { User } from './user.entity';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>
	) {}

	async findOne(id: string): Promise<UserInterface> {
		return await this.userRepository.findOne(id);
	}

	async findAll(): Promise<UserInterface[]> {
		return await this.userRepository.find();
	}

	async create(user: UserInterface): Promise<UserInterface> {
		return await this.userRepository.save(user);
	}

	async update(id: string, user: UserInterface): Promise<UpdateResult> {
		return await this.userRepository.update(id, user);
	}

	async delete(id: string): Promise<DeleteResult> {
		return await this.userRepository.delete(id);
	}
}
