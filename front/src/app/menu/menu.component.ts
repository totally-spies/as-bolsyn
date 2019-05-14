import { Component, OnInit } from '@angular/core';
import { IDish } from '../shared/models/models';
import { ProviderService } from '../shared/services/provider.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public restaurantId = '2';

  public isLogged = false;
  public isAdmin = false;

  public dishes: IDish[] = [];

  public count = 1;

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.restaurantId = localStorage.getItem('restaurantId');
    this.getDishes();

    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;
      this.isAdmin = (localStorage.getItem('isAdmin') === 'True' ? true : false);
    }
  }

  getDishes() {
    this.provider.getDishes(this.restaurantId).then(res => {
      this.dishes = res;
    });
  }

  postOrder(dish: IDish) {
    if (this.count) {
      this.provider.postOrder(dish.name, this.count).then(res => {
        this.count = 1;
      });
    }
  }

  putDish(dish: IDish) {
    this.provider.putDish(dish).then(res => {

    });
  }

  deleteDish(dish: IDish) {
    this.provider.deleteDish(dish).then(res => {
      this.getDishes();
    });
  }

}
