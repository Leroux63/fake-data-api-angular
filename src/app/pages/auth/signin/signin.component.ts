import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

    errMsg?: string

    constructor(private authService: AuthService, private router: Router) {
    }

    onSubmitSignIn(form: NgForm){
      if(form.valid){
        console.log(form.value)
        const {username, password,keepConnection}=form.value
        this.authService
          .signIn(username,password,keepConnection)
          .then(()=>{
            this.router.navigateByUrl('/users')
          })
          .catch(()=>{
            this.errMsg = 'Les identifiants sont incorrects'
          })
      }
    }

}
