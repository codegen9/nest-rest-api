import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

// import { Todo } from '../todo/todo.entity';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 25})
	firstName: string;

	@Column({length: 25, nullable: true})
	middleName: string;

	@Column({length: 25})
	lastName: string;

	@Column()
	email: string;

	@Column()
	password: string;

	// @OneToMany(type => Todo, todo => todo.user)
	// todos: Todo[]
}