import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  [x: string]: any;

  constructor() { }

  private tasks: Array<Task> = [];

  getTasks(): Array<Task> {

    this.tasks = this.getFormLocalStorage();

    return this.tasks;
  }

  getById(id: number): Task | undefined {

    const task = this.tasks.find(c => c.id === id);

    return task;
  }

  addTask(task: Task): void {

    task.id = this.tasks.length + 1;
    
    this.tasks.push(task);

    this.saveToLocalStorage();
  }

  updateTask() {
    this.saveToLocalStorage();
  }

  removeTask(task: Task) {
    const index = this.tasks.indexOf(task);

    if (index !== -1) {
      //achou
      this.tasks.splice(index, 1);
    }
  }

  private saveToLocalStorage() {

    const tasksJSON = JSON.stringify(this.tasks);

    localStorage.setItem('tasks', tasksJSON);
  }

  private getFormLocalStorage(): Array<Task> {

    const tasksJSON = localStorage.getItem('tasks');

    if(!tasksJSON) {
      //não achou
      return new Array<Task>();
    }

    return JSON.parse(tasksJSON);
  }
}
