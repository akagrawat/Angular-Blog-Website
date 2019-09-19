import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, Validators,FormGroup, FormBuilder, Form } from '@angular/forms'
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user:any;
  userId:any;
userDetails: any;
updateForm: FormGroup;
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
  constructor(private authService: AuthService, private fb: FormBuilder, private usersService: UsersService ) { }

  ngOnInit() {
    this.createUpdateForm();

   this.userDetails = JSON.parse(localStorage.getItem('users'));
   if(this.userDetails.success)
   {
     this.userDetails = {
       firstname: this.userDetails.success.role,
       lastname: '',
       email: this.userDetails.success.username,
       address: 'India',
       password: this.userDetails.success.password,
        }
    } 
     else{
       for(let user of this.userDetails ){
         this.userDetails = user;
       }
     }

     this.updateForm.patchValue(this.userDetails);
   }

  logout(){
    this.authService.logout();
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

  // updateUser(data){
  //   console.log(data);
  //   // set id at first position in object
  //   let userData = {'id': this.userDetails., ...data};
  //   this.usersService.updateUser(userData).subscribe(
  //     (data)=> {
  //       this.userUpdateStatus = true;
  //       setTimeout(()=> this.userUpdateStatus = false, 1000);
  //       console.log(data); 
  //       this.getUsers();
  //     }
  //   )
  

}
