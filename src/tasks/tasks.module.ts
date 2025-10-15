import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController], // drzwi do naszego pokoju
  providers: [TasksService],      // serwis, czyli logika i dane
})
export class TasksModule {}
