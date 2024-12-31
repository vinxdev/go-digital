import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trainedin',
  standalone: false,

  templateUrl: './trainedin.component.html',
  styleUrl: './trainedin.component.css',
})
export class TrainedinComponent {
  userform: FormGroup;
  editing_mode: boolean = false;
  id:string | null = null;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router, private route: ActivatedRoute) {
    this.userform = this.fb.group({
      physician: ['', Validators.required], 
      treatment: ['', Validators.required], 
      certificationDate: ['', Validators.required],
      certificationExpires: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      if (params['id']) {
        this.id= params['id']
        this.editing_mode = true;
        this.api.getpost(this.id).subscribe(
          (response) => {
            this.userform.patchValue(response);
            },
            (error) => {
              console.error(error);
              }
        )
      }
    })
  }

  onsubmit(): void {
    if (this.userform.valid) {
      if (this.editing_mode) {
        this.update();
      } else {
        this.create();
      }
    }
  }

  create(): void {
    this.api.createpost(this.userform.value).subscribe(
      (res: any) => {
        alert(`Data added successfully`);
        this.router.navigate(['/trainedinview']);
      },
      (err: any) => {
        console.error('Error creating user:', err);
      }
    );
  }

update(){
  if(!this.id){
    alert('id is missing')
    return;
  }
  const data = {
    id : this.id, ...this.userform.value
  }
  this.api.updatepost(data).subscribe(
    (res: any) => {
      alert(`Data updated successfully`);
      this.router.navigate(['/trainedinview'])
    },
    (err: any) => {
      console.error('Error updating user:', err);
    }
  )
}

  resetForm(): void {
    this.editing_mode = false;
    this.userform.reset();
    this.id = null;
  }
}