import { IsNotEmpty } from 'class-validator';

export class CreateActivityDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  goalId: string;

  @IsNotEmpty()
  value: string;

  @IsNotEmpty()
  date: Date;
}
