import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators,FormGroup } from '@angular/forms'  


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  updateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
users: any = [
  {id: '1', name: 'Ashish1', address:'India', email:'demo@gmail.com', password: '123456'},
  {id: '2', name: 'Ashish2', address:'India', email:'demo@gmail.com', password: '123456'},
  {id: '3', name: 'Ashish3', address:'India', email:'demo@gmail.com', password: '123456'},
  {id: '4', name: 'Ashish4', address:'India', email:'demo@gmail.com', password: '123456'},
  {id: '5', name: 'Ashish5', address:'India', email:'demo@gmail.com', password: '123456'},
  {id: '6', name: 'Ashish6', address:'India', email:'demo@gmail.com', password: '123456'}
]

  constructor() {}

  ngOnInit() {
}

showData(data){
  this.updateForm.patchValue(data);

}
onSubmit(){
  console.log(this.updateForm.value);
}
}
