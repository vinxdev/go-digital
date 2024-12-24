import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  loggedinuser:any

  constructor(private router: Router) { }
  
  isrouteractive(route:string){
   return this.router.url === route
  }

  logout(){
    const confirmDelete = confirm("Are you sure you want to logout?");
    if (confirmDelete == true) {
      localStorage.setItem('isloggedin','false');
      this.router.navigate(['/login']);
      localStorage.setItem('loggedInUser','')
      return true
    }
    else{
      return false
    }
  }
  
  ngOnInit(): void {
     const loguser = localStorage.getItem('loggedInUser')
     if(loguser != null){
     const user = JSON.parse(loguser)
     this.loggedinuser = user.name
     console.log(this.loggedinuser);
     }
  }
}
