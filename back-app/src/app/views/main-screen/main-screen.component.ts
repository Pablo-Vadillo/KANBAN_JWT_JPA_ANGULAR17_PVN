import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css'
})
export class MainScreenComponent {
  
  kanbanItems: any[] = [
    { title: 'Tarea 1', description: 'Descripción de la tarea 1' },
    { title: 'Tarea 2', description: 'Descripción de la tarea 2' },
    { title: 'Tarea 3', description: 'Descripción de la tarea 3' },
    { title: 'Tarea 4', description: 'Descripción de la tarea 4' },
    { title: 'Tarea 5', description: 'Descripción de la tarea 5' },
    { title: 'Tarea 6', description: 'Descripción de la tarea 6' },
    { title: 'Tarea 7', description: 'Descripción de la tarea 7' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['/login']);
  }

  moveToUserInfo(){
    this.router.navigate(['/userInfo']);
  }

  moveKanbanScreen(){
    this.router.navigate(['/kanbanScreen']);
  }



}
