import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  user:any;
   dataSource = new BehaviorSubject<any>(this.user);
  data = this.dataSource.asObservable();

  constructor() { 
  
  }

  updatedLoginData(data){
    this.dataSource.next(data);
  }
}
