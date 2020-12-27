import { User } from 'src/users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { Goal } from './entities/goal.entity';
import { getConnection } from 'typeorm';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';

@Injectable()
export class GoalsService {
  create(createGoalDto: CreateGoalDto) {
    return getConnection().manager.save(Goal, createGoalDto);
  }

  findAll() {
    return getConnection().manager.find(Goal);
  }

  findOne(id: string) {
    return getConnection().manager.findOne(Goal, id);
  }

  async update(id: string, updateGoalDto: UpdateGoalDto) {
    await getConnection().manager.update(Goal, id, updateGoalDto);
    return getConnection().manager.findOne(User, id);
  }

  async remove(id: string) {
    const goal = await getConnection().manager.findOne(Goal, id);
    return getConnection().manager.softRemove(goal);
  }
}
