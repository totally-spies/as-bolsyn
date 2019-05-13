import { Component, OnInit } from '@angular/core';
import { IRestaurant, IReview } from '../shared/models/models';
import { ProviderService } from '../shared/services/provider.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  public restaurantId = '2';
  public restaurant: IRestaurant;

  public isLogged = false;
  public isAdmin = false;

  public reviews: IReview[] = [];
  public text = '';

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.restaurantId = localStorage.getItem('restaurantId');
    this.getRestaurant();

    this.getReviews();

    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;
      this.isAdmin = (localStorage.getItem('isAdmin') === 'True' ? true : false);
    }
  }

  getRestaurant() {
    this.provider.getRestaurant(this.restaurantId).then(res => {
      this.restaurant = res;
    });
  }

  getReviews() {
    this.provider.getReviews(this.restaurantId).then(res => {
      this.reviews = res;
    });
  }

  sendReview() {
    if (this.isLogged && this.text) {
      this.provider.postReview(this.restaurant, this.text).then(res => {
        this.text = '';
        this.reviews.push(res);
      });
    }
  }

}
