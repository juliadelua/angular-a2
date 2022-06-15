import { Injectable } from '@angular/core';

@Injectable()
export class JuliaTasksService {
  list = [];
  constructor() {}

  getTasks() {
    return this.list;
  }

  getTasksTotal() {
    return this.list.length;
  }

  setTasks(item: string) {
    this.list.push(item);
  }

  removeTasks(index: number) {
    this.list.splice(index, 1);
  }
}
