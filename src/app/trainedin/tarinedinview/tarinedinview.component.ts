import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarinedinview',
  standalone: false,
  
  templateUrl: './tarinedinview.component.html',
  styleUrl: './tarinedinview.component.css'
})
export class TarinedinviewComponent {
  userdetails: any[] = [];

  constructor(private api:ApiService,private route: Router) {
   }

   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getall()
   }

  getall(): void 
  {
    this.api.getallpost().subscribe((response:any) => {
      this.userdetails = response;
      console.log(response);
      })
      
  //{
  //   this.api.getallpost().subscribe((data)=>{
  //     console.log(data);
  //     this.userdetails = data;
  //   },(error:any)=>{
  //     console.log(error);
  //   })
}

  edit(user:any){
    this.route.navigate(['/tarinedview'],{queryParams:{id: user.trainedInId}})
    console.log(user.trainedInId);
  }
  
  delete(user: any) {
    // Prepare the payload with the necessary fields
    const payload = {
      id: user.trainedInId, 
      physician: user.physicianId, 
      treatment: user.treatment.procedureId,  // Only send procedureId from treatment
      certificationDate: user.certificationDate,
      certificationExpires: user.certificationExpires,
    };
    console.log('Payload for deletion:', payload);
    this.api.deletepost(payload).subscribe(
      (response: any) => {
        console.log('Response after deletion:', response);
      }
    );
  }
}
