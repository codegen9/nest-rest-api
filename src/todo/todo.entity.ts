import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { User } from '../user/user.entity';

@Entity()
export class Todo {
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 25})
	title: string

	@Column({length: 140})
	body: string

	@Column()
	priority: number

	@ManyToOne(type => User, user => user.todos)
	user: User
}