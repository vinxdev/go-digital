import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meds',
  standalone: false,
  
  templateUrl: './meds.component.html',
  styleUrl: './meds.component.css'
})
export class MedsComponent {

   userform: FormGroup;
      userdetails: any[] = [];
      editing_mode: boolean = false;
      medsId: string | null = null;
      constructor(private fb: FormBuilder, private api: ApiService, private router: Router, private route: ActivatedRoute){
       this.userform = this.fb.group({
               name: ['', Validators.required],
               brand: ['', Validators.required],
               description: ['', Validators.required],
               createdDate: ['', Validators.required],
             });
      }
  
      ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      if(params['id']){
        this.medsId = params['id'];
        this.editing_mode = true;
        this.api.getmedspost(this.medsId).subscribe(
          (res:any)=>{
            this.userform.patchValue(res)
          },
          (error) => {
            console.error(error);
          })
      }
    })
  }
    
      onsubmit(): void {
        if (this.userform.valid) {
          if (this.editing_mode) {
            this.update();
          } else{
            this.create();
          }
        }
      }
    
      create(): void {
        console.log(this.userform.value); 
        this.api.createmedspost(this.userform.value).subscribe(
          (res: any) => {
            alert(`data added successfully`)
            this.router.navigate(['/medsview'])
          },
          (err: any) => {
            console.error('Error creating user:', err);
          }
        );
      }
    
    
      update(): void{
        const blockdata = {
          medicationId : this.medsId, ...this.userform.value
        }
        if(!this.medsId){
          alert('Block ID is missing for update');
          return;
        }
        this.api.updatemedspost(blockdata).subscribe(
        ()=>{
          alert('meds data updated successfully')
          this.router.navigate(['/medsview'])
        },
        (error) => {
          console.error(error);
          }
        )
      }
  
      resetForm(): void {
        this.editing_mode = false;
        this.userform.reset();
        this.medsId = null;
      }
  
  

}
