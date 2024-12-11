import { CommonModule, NgIf } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { TaskService } from '../services/task.service';
import { HttpClient } from '@angular/common/http';
import { GlobalerrorhandlerService } from './globalerrorhandler.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'], 
})
export class ErrorComponent {
  title: string = 'Let\'s check errors';
  users: any[] = [];
  selectedUser: any = null;
  erro: boolean = false;

  constructor(
    private userService: TaskService,
    private http: HttpClient,
    private globalErrorHandler: GlobalerrorhandlerService
  ) {}

  ngOnInit() {
    this.viewUser();
    this.globalErrorHandler.errors$.subscribe((errorStatus) => {
      this.erro = errorStatus;
      console.log('Error status updated:', this.erro);
    });
  }

  viewUser() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        this.title = `Error: API not working - ${err.message}`;
        this.globalErrorHandler.handleError(err); 
      },
    });
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.selectedUser = user;
      },
      error: (err) => {
        this.globalErrorHandler.handleError(err);
      },
    });
  }

  //https://jsonplaceholder.typicode.com/users
  
  sort(): void {
    console.log('Initial error status:', this.erro);
    this.http.get('invalid-app-url').subscribe({
      next: (data) => {
        console.log(data);
        console.log('Error status during request:', this.erro);
      },
      error: (err) => {
        this.globalErrorHandler.handleError(err); 
      },
    });
  }
}