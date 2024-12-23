import { CanActivateFn } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
    const isLoggedIn = localStorage.getItem('isloggedin');
    if (isLoggedIn == 'true') {
      return true; 
    } else {
      alert('You need to log in to access this page!');
      window.location.href = '/login';
      return false; 
    }
    
  };
