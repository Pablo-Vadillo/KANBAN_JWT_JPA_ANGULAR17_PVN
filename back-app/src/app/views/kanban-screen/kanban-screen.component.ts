import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router }from '@angular/router';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-kanban-screen',
  standalone:true,
  imports: [CommonModule,FormsModule,HttpClientModule,ReactiveFormsModule,DragDropModule],
  templateUrl: './kanban-screen.component.html',
  styleUrls: ['./kanban-screen.component.css']
})
export class KanbanScreenComponent {

drop($event: CdkDragDrop<any,any,any>) {

throw new Error('Method not implemented.');
}
  
  lists: any[] = [
    { name: 'To Do', items: [] },
    { name: 'In Progress', items: [] },
    { name: 'Done', items: [] }
  ];

  selectedTask: any = null;

  constructor(private router: Router) { }

  logout() {
    this.router.navigate(['/login']);
  }

  moveToUserInfo() {
    this.router.navigate(['/userInfo']);
  }

  moveKanbanScreen() {
    this.router.navigate(['/kanbanScreen']);
  }

  addTask(list: any) {
    if (list && list.items && this.selectedTask && this.selectedTask.name && this.selectedTask.description) {
      list.items.push({ title: this.selectedTask.name, description: this.selectedTask.description });
      this.selectedTask.name = '';
      this.selectedTask.description = '';
    } else {
      alert('Por favor ingresa el nombre y la descripción de la tarea.');
    }
  }

  selectTask(task: any) {
    this.selectedTask = task;
  }
  
}
