import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login = '';
  public password = '';

  constructor(private provider: ProviderService) { }

  ngOnInit() {
  }

  auth() {
    if (this.login !== '' && this.password !== '') {
      this.provider.auth(this.login, this.password).then(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('name', res.name);
        if (res.isAdmin) {
          localStorage.setItem('isAdmin', 'True');
        } else {
          localStorage.setItem('isAdmin', 'False');
        }
      });
    }
  }

}
