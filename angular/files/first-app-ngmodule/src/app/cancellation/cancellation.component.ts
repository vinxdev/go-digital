import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cancellation',
  standalone: false,
  templateUrl: './cancellation.component.html',
  styleUrl: './cancellation.component.css'
})
export class CancellationComponent implements OnDestroy {
  title = 'Rxjs';
  private abort$ = new Subject<void>();
  data: any;

  constructor(private http: HttpClient) {}

  getsomedata(): Observable<any> {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get<any>(apiUrl).pipe(
      takeUntil(this.abort$)
    );
  }

  raise() {
    this.getsomedata().subscribe({
      next: (data) => {
        this.data = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Request error', err);
      }
    });
  }

  abortReq() {
    this.abort$.next(); 
    this.abort$.complete(); 
    this.abort$ = new Subject<void>();
    
    console.log('Request aborted');
  }

  ngOnDestroy() {
    this.abort$.next();
    this.abort$.complete();
  }
}