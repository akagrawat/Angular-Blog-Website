import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators,FormGroup, FormBuilder, Form } from '@angular/forms'
import { UsersService } from '../../../services/users.service';  


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
updateForm: FormGroup;
users: any;
 validationMsg = [
   {
     'firstname':[
     {type: 'required', message: 'Firstname is required'},
     {type: 'maxlength', message: 'Enter less than 25 characters'},
     {type: 'minlength', message: 'Enter minimum 5 characters'},]
   },
   {
    'lastname':[
    {type: 'required', message: 'Lastname is required'},
    {type: 'maxlength', message: 'Enter less than 25 characters'},
    {type: 'minlength', message: 'Enter minimum 5 characters'},]
  },

   
   {'address': [
    {type: 'required', message: 'Address is required'},
    {type: 'maxlength', message: 'Enter less than 25 characters'},
    {type: 'minlength', message: 'Enter minimum 5 characters'},],
   },
   {'email': [ 
    {type: 'required', message: 'Email is required'},
    {type: 'pattern', message: 'Enter a valid Email'},
  ],
   },
   {'password': [
    {type: 'required', message: 'Password is required'},
    {type: 'maxlength', message: 'Enter less than 15 characters'},
    {type: 'minlength', message: 'Enter minimum 5 characters'},],
   },
  ]

  constructor(private fb: FormBuilder, private usersService: UsersService) {}

  ngOnInit() {
    this.createUpdateForm();
    this.getUsers();
}

getUsers(){
  this.usersService.getUsers().subscribe((data) => this.users = data);
}

createUpdateForm(){
  this.updateForm = this.fb.group({
    firstname: ['', Validators.compose([
      Validators.maxLength(25),
      Validators.minLength(5),
      Validators.required
    ])],
    lastname: ['', Validators.compose([
      Validators.maxLength(25),
      Validators.minLength(5),
      Validators.required
    ])],
    address: ['', Validators.compose([
      Validators.maxLength(100),
      Validators.minLength(5),
      Validators.required
    ])],
    email: ['', Validators.compose([
      Validators.required, 
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])],
    password: ['', Validators.compose([
      Validators.maxLength(15),
      Validators.minLength(5),
      Validators.required
    ])],
  })
}

showData(data){
  this.updateForm.patchValue(data);


}
onSubmit(){
  console.log(this.updateForm.value);
  this.usersService.createUser(this.updateForm.value).subscribe((data) =>{
    console.log(data);
  })
  
}
resetForm(){
  this.updateForm.reset();
}

}
