import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  model: User = new User();
  retypePassword: string;
  userNameError = false;
  passwordError = false;
  passMatchError = false;
  emailError = false;


constructor(private data: DataService){}

  ngOnInit() {
  }

  userValueChanged(){
    if(this.model.userName.length > 3){
      this.userNameError = false;
    }
    else{
      this.userNameError = true;
    }
  }

  emailChanged(){
    //if the length of email is lower than 8 OR doesn't include the @, then error
    if(this.model.email.length < 8 || !this.model.email.includes('@') || !this.model.email.includes('.com') ){
      this.emailError = true;
    }
    else this.emailError = false;
  }

  passwordChanged(){
    this.passwordError = this.model.password.length < 6;
    this.passMatchError = this.model.password != this.retypePassword;
    //can also do the below code for line 35:
    // if(this.model.password == this.retypePassword){this.passMatchError = false;}else{this.passMatchError = true;}
  }


  registerUser(){
    console.log("The user wants to save another user");
    console.log( this.model);

    var isThereAnError = false;
    if(!this.model.userName){
      this.userNameError = true;
      isThereAnError = true;
    }

    if(!this.model.password){
      this.passwordError = true;
      return;
    }

    //save the user into the service
    this.data.saveUser(this.model);

    //create a new one
    //so user can register more users
    this.model = new User(); //this will also clear the form for new user
    this.retypePassword = "";
  }
}
