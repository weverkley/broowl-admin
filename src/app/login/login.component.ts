import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { routerTransition } from '../router.animations';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  onLoggedin() {
    if (this.form.valid) {
      const data = this.form.value;
      if (data.email == 'admin@admin.com' && data.password == 'teste') {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigateByUrl('/')
      }
      // this.authService.signin(data).then(resul => {
      //   if (!resul.error) {
      //     localStorage.setItem('isLoggedin', 'true');
      //     localStorage.setItem('user', JSON.stringify(resul.data));
      //   }
      // }).catch(err => {
      //   console.error(err);
      // });
    }
  }
}
