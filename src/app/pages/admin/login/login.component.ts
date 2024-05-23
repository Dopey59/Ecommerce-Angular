import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sty-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj: any = {
    userName: '',
    password: ''
  };

  constructor(private router: Router){}

  onLogin(){
    if(this.loginObj.userName == "admin" && this.loginObj.password == "1"){
      this.router.navigateByUrl('/products')

    } else {
      alert('Erreur')
    }
  }
}
