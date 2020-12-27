import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';
import { getConnection } from 'typeorm';

@Injectable()
export class ActivitiesService {
  create(createActivityDto: CreateActivityDto) {
    return getConnection().manager.save(Activity, createActivityDto);
  }

  findAll() {
    return getConnection().manager.find(Activity);
  }

  findOne(id: string) {
    return getConnection().manager.findOne(Activity, id);
  }

  async update(id: string, updateActivityDto: UpdateActivityDto) {
    await getConnection().manager.update(Activity, id, updateActivityDto);
    return getConnection().manager.findOne(Activity, id);
  }

  async remove(id: string) {
    const goal = await getConnection().manager.findOne(Activity, id);
    return getConnection().manager.softRemove(goal);
  }
}
