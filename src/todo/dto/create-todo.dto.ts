import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTodoDto {
	@ApiModelProperty()
	readonly title: string;

	@ApiModelProperty()
	readonly body: string;

	@ApiModelProperty()
	readonly priority?: number;
}