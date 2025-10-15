import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuid } from 'uuid'; // generator unikalnych ID

@Injectable() // pozwala na wstrzykiwanie tej klasy do innych
export class TasksService {
  private tasks: Task[] = []; // prywatna tablica trzymająca nasze zadania

  // Zwraca wszystkie zadania
  getAllTasks(): Task[] {
    return this.tasks;
  }

  // Dodaje nowe zadanie
  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: 'OPEN',
    };

    this.tasks.push(task);
    return task;
  }
}
