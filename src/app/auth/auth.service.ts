import { Injectable } from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseAuthState  } from 'angularfire2';


import { authConfig } from "../config";


@Injectable()
export class AuthService {

  loggedIn: boolean = false;
  userName: string = "UNKNOWN";
  
  constructor(public af: AngularFire) {


    this.af.auth.subscribe((user: FirebaseAuthState) => {
      if (user) {
        //console.log("user=", user);

         console.log("displayname=", user.auth.displayName);
         this.loggedIn = true;
         this.userName = user.auth.displayName;

      } else {
        this.loggedIn = false;
      }
    });

  
  }


 login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }


  logout() {
     this.af.auth.logout();
  }



  public getUserName() {
    console.log("getUserName=" + this.userName);
    return this.userName;
  } 


  public authenticated() {
    return this.loggedIn;
  } 


}
