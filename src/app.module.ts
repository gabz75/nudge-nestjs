import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GoalsModule } from './goals/goals.module';
import { ActivitiesModule } from './activities/activities.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(), GoalsModule, ActivitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
