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
  validUser: any;
  userList:any;
  
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

  {'password': [
   {type: 'required', message: 'Password is required'},
   {type: 'maxlength', message: 'Enter less than 15 characters'},
   {type: 'minlength', message: 'Enter minimum 5 characters'},],
  },
 ]
  constructor(private authService: AuthService, private fb: FormBuilder, private usersService: UsersService ) { }

  ngOnInit() {
    this.createUpdateForm();
   

   this.validUser = JSON.parse(localStorage.getItem('users'));

   console.log(this.validUser);
   if(this.validUser.success)
   { // data get from auth api so convert it in required format

     this.userDetails = {
       firstname: this.validUser.success.role,
       lastname: '',
       email: this.validUser.success.username,
       address: 'India',
       password: this.validUser.success.password,
        }
        this.updateForm.patchValue(this.userDetails);
    } 

     else{
       // data coming from userList api
       this.getUserInfo();  
     }

     
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
    email:[{value:'' , disabled:true}],
      password: ['', Validators.compose([
        Validators.maxLength(15),
        Validators.minLength(5),
        Validators.required
      ])],
    })
  }

  getUserInfo(){

    this.validUser = JSON.parse(localStorage.getItem('users'));
    // get data from localstorage array
    for(let user of this.validUser ){
      this.userDetails = user;
    }

    // match api & localstorage data to get login user data from api
    this.usersService.getUsers().subscribe((data) => {this.userList = data;
      
      this.userDetails = this.userList.filter((data)=> (  
        this.userDetails.firstname == data.firstname ));
       
        // get data from userDetails array
        for(let user of this.userDetails ){
          this.userDetails = user;
          
        }
        this.updateForm.patchValue(this.userDetails);
           
    });

  }

  updateUser(data){
    console.log(this.userDetails);
    if(this.validUser.success){
    alert('You are not authorised to update data'); 
    
    }
    else{
    this.usersService.updateUser(this.userDetails._id,data).subscribe(
      (data)=> {
       // update localstorage data with new data
        let userData = {'_id': this.userDetails._id, ...this.updateForm.value};
        let localData  = [];
        localData.push(userData);
        localStorage.setItem('users', '');
        localStorage.setItem('users',JSON.stringify( localData));
        this.getUserInfo();
        
      });
    }
  

}

}
