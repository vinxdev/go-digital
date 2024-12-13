import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication-guard',
  standalone: false,
  
  templateUrl: './authentication-guard.component.html',
  styleUrl: './authentication-guard.component.css'
})
export class AuthenticationGuardComponent {
  user={
    name:'vineet',
    age:22,
  }
store(){
  localStorage.setItem("loginuser",JSON.stringify(this.user))
  alert("data saved")
}
}
