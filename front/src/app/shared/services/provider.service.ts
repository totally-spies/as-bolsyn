import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { IAuthResponse, ICuisine, IRestaurant, IDish, IOrder, IReview } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) {
    super(http);
  }

  // CUISINE
  getCuisines(): Promise<ICuisine[]> {
    return this.get('http://localhost:8000/api/cuisines/', {});
  }

  // RESTAURANT
  getRestaurants(restaurant: IRestaurant): Promise<IRestaurant[]> {
    return this.get(`http://localhost:8000/api/cuisines/${restaurant.id}/restaurants/`, {});
  }

  // createRestaurant(name: any): Promise<IRestaurant> {
  //   return this.post('http://localhost:8000/api/cuisines/', {
  //     name: name
  //   });
  // }

  updateRestaurant(cuisine: ICuisine, restaurant: IRestaurant): Promise<IRestaurant> {
    return this.put(`http://localhost:8000/api/cuisines/${cuisine.id}/restaurants/${restaurant.id}/`, {
      name: restaurant.name,
      // cuisine:
    });
  }

  deleteRestaurant(cuisineId: number, restId: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/cuisines/${cuisineId}/restaurants/${restId}/`, {});
  }

  // DISH
  getDishes(cuisine: ICuisine, dish: IDish): Promise<IDish[]> {
    return this.get(`http://localhost:8000/api/cuisines/${cuisine.id}/restaurants/${dish.id}/`, {});
  }

  // createDish(name: any): Promise<IRestaurant> {
  //   return this.post('http://localhost:8000/api/cuisines/', {
  //     name: name
  //   });
  // }

  updateDish(cuisine: ICuisine, restaurant: IRestaurant): Promise<IRestaurant> {
    return this.put(`http://localhost:8000/api/cuisines/${cuisine.id}/restaurants/${restaurant.id}/`, {
      name: restaurant.name,
      // cuisine:
    });
  }

  deleteDish(cuisineId: number, restId: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/cuisines/${cuisineId}/restaurants/${restId}/`, {});
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
