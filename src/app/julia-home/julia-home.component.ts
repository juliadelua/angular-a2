import { Component, OnInit } from '@angular/core';
import { JuliaTasksService } from '../julia-tasks.service';

@Component({
  selector: 'app-julia-home',
  templateUrl: './julia-home.component.html',
  styleUrls: ['./julia-home.component.css'],
})
export class JuliaHomeComponent {
  constructor(private serv: JuliaTasksService) {}

  getTotal() {
    return this.serv.getTasksTotal();
  }
}
