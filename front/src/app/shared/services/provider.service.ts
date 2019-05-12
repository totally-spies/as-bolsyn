import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { IAuthResponse, ISection, IRestaurant, IDish, IOrder, IReview } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) {
    super(http);
  }

  // CUISINE
  getCuisines(): Promise<ISection[]> {
    return this.get('http://localhost:8000/api/cuisines/', {});
  }

  // RESTAURANT
  getRestaurants(section: ISection): Promise<IRestaurant[]> {
    return this.get(`http://localhost:8000/api/cuisines/${section.id}/restaurants/`, {});
  }

  // createRestaurant(name: any): Promise<IRestaurant> {
  //   return this.post('http://localhost:8000/api/cuisines/', {
  //     name: name
  //   });
  // }

  updateRestaurant(cuisine: ISection, restaurant: IRestaurant): Promise<IRestaurant> {
    return this.put(`http://localhost:8000/api/cuisines/${cuisine.id}/restaurant/${restaurant.id}/`, {
      name: restaurant.name,
      // cuisine:
    });
  }

  deleteRestaurant(cuisineId:number, restaurantId: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/cuisines/${cuisineId}/restaurant/${restaurantId}/`, {});
  }

  // DISH
  getDishes(cuisine: ISection, restaurant:IRestaurant): Promise<IDish[]> {
    return this.get(`http://localhost:8000/api/cuisines/${cuisine.id}/restaurants/${restaurant.id}/dishes/`, {});
  }

  // createDish(name: any): Promise<IRestaurant> {
  //   return this.post('http://localhost:8000/api/cuisines/', {
  //     name: name
  //   });
  // }

  updateDish(cuisine: ISection, restaurant: IRestaurant, dish:IDish): Promise<IDish> {
    return this.put(`http://localhost:8000/api/cuisines/${cuisine.id}/restaurants/${restaurant.id}/dish/${dish.id}`, {
      name: dish.name,
      // cuisine:
    });
  }

  deleteDish(cuisineId:number, restaurantId:number, dishId:number): Promise<any> {
    return this.delet(`http://localhost:8000/api/cuisines/${cuisineId}/restaurants/${restaurantId}/dish/${dishId}`, {});
  }

  // AUTH
  auth(login: string, password: string): Promise<IAuthResponse> {
    return this.post('http://localhost:8000/api/login/', {
      username: login,
      password: password
    });
  }

  logout(): Promise<any> {
    return this.post('http://localhost:8000/api/logout/', {});
  }
}
