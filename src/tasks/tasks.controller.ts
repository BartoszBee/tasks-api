import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks') // wszystkie ścieżki będą zaczynać się od /tasks
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // GET /tasks
  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  // POST /tasks
  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.tasksService.createTask(title, description);
  }
}
