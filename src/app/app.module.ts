import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { JuliaHomeComponent } from './julia-home/julia-home.component';
import { JuliaTasksComponent } from './julia-tasks/julia-tasks.component';
import { JuliaTasksService } from './julia-tasks.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: JuliaHomeComponent },
      { path: 'tasks', component: JuliaTasksComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    JuliaHomeComponent,
    JuliaTasksComponent,
  ],
  bootstrap: [AppComponent],
  providers: [JuliaTasksService],
})
export class AppModule {}
