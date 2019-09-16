import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  user:any;
  dataSource : any;
  data : any;

  constructor() { 
    // this.user = JSON.parse( localStorage.getItem('users'));
    // console.log(this.user);
    this.getLoginData();
  }

  getLoginData(){
    this.user = localStorage.getItem('users');
    this.dataSource = new BehaviorSubject<any>(this.user);
    this.data = this.dataSource.asObservable();
    return this.data;
  }

  updatedLoginData(data){
    this.dataSource.next(data);
  }
}