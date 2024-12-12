import { Component } from '@angular/core';
import { TaskService } from './task.services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-intercepter',
  standalone: false,
  templateUrl: './intercepter.component.html',
  styleUrl: './intercepter.component.css'
})
export class IntercepterComponent {
  title: string = 'Let\'s check errors';
  users: any[] = [];
  selectedUser: any = null;
  erro: boolean = false;

  constructor(
    private userTask: TaskService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.viewUser();
  }

  viewUser() {
    this.userTask.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        this.title = `Error: API not working - ${err.message}`; 
      },
    });
  }

  getUserById(id: number) {
    this.userTask.getUserById(id).subscribe({
      next: (user) => {
        this.selectedUser = user;
      },
      error: (err) => {
        this.title = `Error: API not working - ${err.message}`; 
      },
    });
  }

  //https://jsonplaceholder.typicode.com/users
  
  
}
