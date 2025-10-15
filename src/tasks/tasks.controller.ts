import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  // @UsePipes(new ValidationPipe()) // aktywuje walidację DTO - ustawiono globalnie w main
  createTask(@Body() createTaskDto: CreateTaskDto) {
    const { title, description } = createTaskDto;
    return this.tasksService.createTask(title, description);
  }
}
