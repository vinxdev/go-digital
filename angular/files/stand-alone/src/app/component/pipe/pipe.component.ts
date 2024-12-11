import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { CustomPipe } from './custom.pipe';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,CurrencyPipe,PercentPipe,DecimalPipe,SlicePipe,JsonPipe,AsyncPipe,CustomPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstname:string = " this is angulaR";
  currentdate: Date = new Date();
  currency:number = 2000;
  percent:number = 0.782;
  decimal:number = 9877.222;
  slices:string = "Hello human";
  std: any = {
    name:"vineet",
    city:"mumbai",
    empid:21,
    state: '',
  }

  asynctime: Observable<Date> = new Observable;

  constructor(){
    this.asynctime = interval(1000).pipe(map(() => new Date()))
  }
}

