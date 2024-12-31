import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medsview',
  standalone: false,
  
  templateUrl: './medsview.component.html',
  styleUrl: './medsview.component.css'
})
export class MedsviewComponent {
  userdetails: any[] = [];
   constructor(private api:ApiService ,private route: Router) {
    }
 
    ngOnInit(): void {
     this.getall()
    }
 
   getall(): void {
     this.api.getallmeds().subscribe((data)=>{
       console.log(data);
       this.userdetails = data;
     },(error:any)=>{
       console.log(error);
     })
 }
 
   edit(user:any){
     this.route.navigate(['/meds'],{queryParams:{id: user}})
     console.log(user);
   }
 
   delete(id:any){
     console.log('deleted',id);
     this.api.deletemedspost(id).subscribe(()=>{
       alert(`${id} is deleted`)
       this.getall()
     })
   }
 
  
}
