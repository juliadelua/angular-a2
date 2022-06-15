import { Component, OnInit } from '@angular/core';
import { JuliaTasksService } from '../julia-tasks.service';

@Component({
  selector: 'app-julia-tasks',
  templateUrl: './julia-tasks.component.html',
  styleUrls: ['./julia-tasks.component.css'],
})
export class JuliaTasksComponent implements OnInit {
  task: string = '';
  listaTarefas = [];
  constructor(private serv: JuliaTasksService) {}

  ngOnInit() {}

  adicionarTarefa() {
    this.serv.setTasks(this.task);
    this.task = '';
    this.listaTarefas = this.serv.getTasks();
  }

  removerTarefa(index: number) {
    this.serv.removeTasks(index);
  }
}
