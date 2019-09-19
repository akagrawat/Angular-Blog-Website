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
userList: any;
userId:any;
validUser:any = [''];
userDetail: any;
userDeleteStatus: Boolean = false;
userUpdateStatus: Boolean = false;
createUserStatus: Boolean = false;
 validationMsg = [
   {
     'firstname':[
     {type: 'required', message: 'Firstname is required'},
     {type: 'maxlength', message: 'Enter less than 25 characters'},
     {type: 'minlength', message: 'Enter minimum 3 characters'},]
   },
   {
    'lastname':[
    {type: 'required', message: 'Lastname is required'},
    {type: 'maxlength', message: 'Enter less than 25 characters'},
    {type: 'minlength', message: 'Enter minimum 2 characters'},]
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
  this.usersService.getUsers().subscribe((data) => this.userList = data);
}

deleteUser(userId){
this.usersService.deleteUser(userId).subscribe((data) => {
  console.log(data);
  this.getUsers();
  this.userDeleteStatus = true;
  setTimeout(()=> this.userDeleteStatus = false, 1000);
})
}

updateUser(data){
  console.log(data);
  // set id at first position in object
  let userData = {'id': this.userId, ...data};
  this.usersService.updateUser(userData).subscribe(
    (data)=> {
      this.userUpdateStatus = true;
      setTimeout(()=> this.userUpdateStatus = false, 1000);
      console.log(data); 
      this.getUsers();
    }
  )
  
  this.resetForm();  
}

createUpdateForm(){
  this.updateForm = this.fb.group({
    firstname: ['', Validators.compose([
      Validators.maxLength(25),
      Validators.minLength(3),
      Validators.required
    ])],
    lastname: ['', Validators.compose([
      Validators.maxLength(25),
      Validators.minLength(2),
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
  // userDetail used for show and hide to email and button fields(save & update) 
  this.userDetail  = data;
  
}

setData(data){
  this.userId = data;

}
onSubmit(){
  console.log(this.updateForm.value);
  // check user already exist or not
  this.validUser = this.userList.filter((data) => this.updateForm.value.email == data.email);

  if(this.validUser.length == 0)
  {
  this.usersService.createUser(this.updateForm.value).subscribe((data) =>{
    console.log(data);
    this.getUsers();
    this.createUserStatus = true;
    setTimeout(()=> this.createUserStatus = false, 1500)
  });
}
else{

setTimeout(()=> this.validUser = '', 1500)

}
  this.resetForm();
  
}
resetForm(){
  this.updateForm.reset();

  this.userDetail  = '';
}

onOpen(event: any) {
  console.log(event);
}

}
