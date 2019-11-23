import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { DataService } from '../services/data.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent{

  userList: User[] = [];

  userName: string = '';
  password: string = '';

  userNameError = false;
  passwordError = false;
  loginFailed = false;

  userChanged(){
    if(this.userName) this.userNameError = false;
    else this.userNameError = true;
  }

  passwordChanged(){
    if (this.password) this.passwordError = false;
    else this.passwordError = true;
  }



  constructor(private data: DataService, private router: Router) {
    this.userList = data.getAllUsers();
   }

  login(){
    //validate for username and password not empty
    var missingInfo = false;
    if(!this.userName){
      missingInfo = true;
      this.userNameError = true;
    } //basically means if there's nothing in the field, it will show the error, otherwise, you're good to go.

    if(!this.password){
      missingInfo = true;
      this.passwordError = true;
    }

    //Compare username and password with the userList
    /**logic
     * travel the userList array
     * get each element from the array
     * compare the username and password with those of the element
     * if they match, send the user to register page, hide the login button
     * else, show login error
     */
    console.log("pass validations", this.userList);
     var credsCorrect = false;
     for(var i =0; i<this.userList.length; i++){
       console.log("item", this.userList, this.userName, this.password);
       var user = this.userList[i];

       if(user.userName == this.userName && user.password == this.password){
         console.log("logged in correctly");
         credsCorrect = true;
         this.loginFailed = false;

        //send the user to Converter, after successful login
        this.router.navigate(['converter']);
       }
     }

     if(!credsCorrect){
       console.log('Incorrect Data!');
       this.loginFailed = true;
     }
     
  }

}
