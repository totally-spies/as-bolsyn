import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {ISection, IRestaurant, IDish} from '../shared/models/models'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public cuisinelist: ISection[] = [];
  public restaurantlist: IRestaurant[]=[];
  public dishlist: IDish[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.provider.getCuisines().then(res => {
      console.log(res);
      this.cuisinelist = res;
    })
  }
  getRestaurants(cuisinelist: ISection){
    this.provider.getRestaurants(cuisinelist).then(res=>{
      console.log(res);
      this.restaurantlist = res;
    })
  }
  updateRestaurants(cuisine: ISection, restaurant: IRestaurant){
    this.provider.updateRestaurant(cuisine, restaurant).then(res=>{
      console.log(restaurant.name)
    })
  }

  deleteRestaurants(cuisineId: number, restaurantId: number, cuisine: ISection){
    this.provider.deleteRestaurant(cuisineId, restaurantId).then(res => {
      console.log(restaurantId + 'deleted');
        this.provider.getRestaurants(cuisine).then(r => {
          this.restaurantlist = r;
        });
    });

  }

  getDishes(cuisine: ISection, restaurant: IRestaurant){
    this.provider.getDishes(cuisine, restaurant).then(res=>{
      console.log(res);
      this.dishlist = res;
    })
  }

  updateDishes(cuisine: ISection, restaurant: IRestaurant, dish: IDish){
    this.provider.updateDish(cuisine, restaurant, dish).then(res=>{
      console.log(dish.name)
    })
  }

  deleteDishes(cuisineId: number, restaurantId: number, dishId: number, cuisine: ISection, restaurant: IRestaurant){
    this.provider.deleteDish(cuisineId, restaurantId, dishId).then(res=>{
      console.log(dishId + 'deleted');
        this.provider.getDishes(cuisine, restaurant).then(r => {
          this.dishlist = r;
        });
    });
  }
}
