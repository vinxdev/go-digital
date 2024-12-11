import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TaskService} from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, HttpClientModule,FormsModule], // Include HttpClientModule
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [TaskService], // Provide the service locally
})

export class ServicesComponent {
  users: any[] = [];
  selectedUser: any = null;

  constructor(private userService: TaskService) {}

  ngOnInit() {
    this.viewUser();
  }

  viewUser() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe((user) => {
      this.selectedUser = user;
    });
  }

  // createUser(user: any) {
  //   this.userService.createUser(user).subscribe(() => {
  //     this.viewUser();
  //   });
  // }

  // updateUser(id: number, user: any) {
  //   this.userService.updateUser(id, user).subscribe(() => {
  //     this.viewUser();
  //   });
  // }

  // deleteUser(id: number) {
  //   this.userService.deleteUser(id).subscribe(() => {
  //     this.viewUser();
  //   });
  // }
}