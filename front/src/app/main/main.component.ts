import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import{Order} from './models/models';
import { from } from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public logged = false;
  public access:Order[]=[];
  public login: any = '';
  public password: any = '';
  constructor(private provider: ProviderService) { }

  

  ngOnInit() {
    localStorage.clear();
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }

    if (this.logged) {
      this.provider.getOrders().then(res=>{
        this.access=res;
    });
  }
  }
  logIn() {
    if (this.login !== '' && this.password !== '') {
      this.provider.logIn(this.login, this.password).then(res => {
        localStorage.setItem('token', res.token);

        this.logged = true;

        this.provider.getOrders().then(r => {
          this.access = r;
        });

      });
    }
  }

  logout() {
    this.provider.logout().then(res => {
      localStorage.clear();
      this.logged = false;
    });
  }
}
