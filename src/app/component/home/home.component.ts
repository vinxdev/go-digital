import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userform: FormGroup;
  userdetails: any[] = [];
  editing_mode: boolean = false;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.userform = this.fb.group({
      accountDetailId: [''],
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getall();
  }

  onsubmit(): void {
    // if (this.userform.valid) {
    //   if (this.editing_mode) {
    //     this.updatepost();
    //   } else {
    //     this.create();
    //   }
    // }
  }

  create(): void {
    this.api.createpost(this.userform.value).subscribe(
      (res: any) => {
        this.userdetails.push(res);
        this.userform.reset();
        localStorage.setItem('userdetails', JSON.stringify(this.userdetails));
      },
      (err: any) => {
        console.error('Error creating user:', err);
      }
    );
  }

  getall(): void {
        const data = JSON.parse(localStorage.getItem('userdetails') || '[]');
        if (data.length) {
          this.userdetails = data;
        } else {
          this.api.getallpost().subscribe(
            (res: any) => {
              this.userdetails = res;
              localStorage.setItem('userdetails', JSON.stringify(this.userdetails));
            }
        );
  }
}

  edit(user: any): void {
    this.editing_mode = true;
    this.userform.patchValue(user);
  }

  // updatepost(): void {
  //   const id = this.userform.value.id;
  //   this.api.updatepost(id, this.userform.value).subscribe(
  //     (res: any) => {
  //       this.userdetails = this.userdetails.map((user) => 
  //         user.id === id ? res : user
  //       );
  //       localStorage.setItem('userdetails', JSON.stringify(this.userdetails));
  //       console.log(this.userdetails);
  //       this.editing_mode = false;
  //       this.resetForm();
  //     },
  //     (err: any) => {
  //       console.error('Error updating user:', err);
  //     }
  //   );
  // }

  delete(id: number): void {
    this.api.deletepost(id).subscribe(
      () => {
        this.userdetails = this.userdetails.filter((user) => user.id !== id);
        localStorage.setItem('userdetails', JSON.stringify(this.userdetails));
      },
      (err: any) => {
        console.error('Error deleting user:', err);
      }
    );
  }

  resetForm(): void {
    this.editing_mode = false;
    this.userform.reset();
  }
  
}