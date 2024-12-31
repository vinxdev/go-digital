import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blockview',
  standalone: false,
  
  templateUrl: './blockview.component.html',
  styleUrl: './blockview.component.css'
})
export class BlockviewComponent {
 userdetails: any[] = [];
  constructor(private api:ApiService ,private route: Router) {
   }

   ngOnInit(): void {
    this.getall()
   }

  getall(): void {
    this.api.getallblock().subscribe((data)=>{
      console.log(data);
      this.userdetails = data;
    },(error:any)=>{
      console.log(error);
    })
}

  edit(user:any){
    this.route.navigate([`/`],{queryParams:{id: user.blockId}})
    console.log(user);
  }

  delete(user:any){
    console.log('deleted',user);
    this.api.deleteblockpost(user).subscribe(()=>{
      alert(`${user} is deleted`)
       this.getall()
    })
  }


}
