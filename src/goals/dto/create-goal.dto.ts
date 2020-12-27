import { IsNotEmpty } from 'class-validator';

export class CreateGoalDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  valueType: string;
}
