import { Component, OnInit } from '@angular/core';
import { ISection, IRestaurant } from '../shared/models/models';
import { ProviderService } from '../shared/services/provider.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public sections: ISection[] = [];
  public restaurants: IRestaurant[] = [];
  public bars: IRestaurant[] = [];
  public cafes: IRestaurant[] = [];
  public coffees: IRestaurant[] = [];
  public karaokes: IRestaurant[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.getSections();
    this.get();
  }

  getSections() {
    this.provider.getSections().then(res => {
      this.sections = res;
    });
  }

  get() {
    this.provider.getRestaurants(1).then(res => {
      this.restaurants = res;
    });
    this.provider.getRestaurants(2).then(res => {
      this.bars = res;
    });
    this.provider.getRestaurants(3).then(res => {
      this.cafes = res;
    });
    this.provider.getRestaurants(4).then(res => {
      this.coffees = res;
    });
    this.provider.getRestaurants(5).then(res => {
      this.karaokes = res;
    });
  }

  sendRestaurantId(restaurant: IRestaurant) {
    localStorage.setItem('restaurantId', restaurant.id.toString());
  }
}
