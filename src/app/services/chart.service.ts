import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { data } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ChartService{ 
  // Listen every changeable of chartData 
  private activeDatasSubject: BehaviorSubject<object | undefined> = new BehaviorSubject<object | undefined>(undefined);
  activeDatas$ = this.activeDatasSubject.asObservable()
  chartDatas: Array<any> = data

  constructor() {}
  
  setPage(num: number){
    const selectedData = this.chartDatas.find(data => data.id == num)
    if(selectedData){
      this.activeDatasSubject.next(selectedData.data)
    }
  }
}
