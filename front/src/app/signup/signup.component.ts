import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public login = '';
  public password = '';
  public email = '';
  public name = '';

  constructor(private provider: ProviderService, private router: Router) { }

  ngOnInit() {
  }

  signUp() {
    if (this.login && this.password) {
      this.provider.register(this.login, this.password, this.name, this.email).then(res => {
        this.login = '';
        this.password = '';
        this.email = '';
        this.name = '';
        this.router.navigate(['/login']);
      });
    }
  }

}
