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

  // Section
  getSections(): Promise<ISection[]> {
    return this.get('http://localhost:8000/api/sections/', {});
  }

  // Restaurant
  getRestaurants(sectionId: number): Promise<IRestaurant[]> {
    return this.get(`http://localhost:8000/api/sections/${sectionId}/restaurants/`, {});
  }

  postRestaurant(sectionId: number, nName: any, nImageUrl: any, nAddress: any, nContact: any, nAvgCost: number): Promise<IRestaurant> {
     return this.post(`http://localhost:8000/api/sections/${sectionId}/restaurants/`, {
       name: nName,
       imageUrl: nImageUrl,
       address: nAddress,
       contact: nContact,
       avgCost: nAvgCost
     });
   }

  getRestaurant(restaurant: IRestaurant): Promise<IRestaurant> {
   return this.get(`http://localhost:8000/api/restaurants/${restaurant.id}/`, {});
  }

  putRestaurant(restaurant: IRestaurant): Promise<IRestaurant> {
    return this.put(`http://localhost:8000/api/restaurants/${restaurant.id}/`, {
      name: restaurant.name,
      imageUrl: restaurant.image_url,
      address: restaurant.address,
      contact: restaurant.contact,
      avgCost: restaurant.avg_cost
    });
  }

  deleteRestaurant(restaurant: IRestaurant): Promise<any> {
    return this.delet(`http://localhost:8000/api/restaurants/${restaurant.id}/`, {});
  }

  // Dish
  getDishes(restaurant: IRestaurant): Promise<IDish[]> {
    return this.get(`http://localhost:8000/api/restaurants/${restaurant.id}/dishes/`, {});
  }

  postDish(restaurant: IRestaurant, nName: any, nPrice: number): Promise<IDish> {
    return this.post(`http://localhost:8000/api/restaurants/${restaurant.id}/dishes/`, {
      name: nName,
      price: nPrice
    });
  }

  putDish(dish: IDish): Promise<IDish> {
    return this.put(`http://localhost:8000/api//dishes/${dish.id}/`, {
      name: dish.name,
      price: dish.price
    });
  }

  deleteDish(dish: IDish): Promise<any> {
    return this.delet(`http://localhost:8000/api/dishes/${dish.id}/`, {});
  }

  // Review
  getReviews(restaurant: IRestaurant): Promise<IReview[]> {
    return this.get(`http://localhost:8000/api/restaurants/${restaurant.id}/reviews/`, {});
  }

  postReview(restaurant: IRestaurant, nText: any): Promise<IReview> {
    return this.post(`http://localhost:8000/api/restaurants/${restaurant.id}/reviews/`,{
      text: nText
    });
  }

  // Order
  getOrders(): Promise<IOrder[]> {
    return this.get('http://localhost:8000/api/orders/',{});
  }

  postOrder(nDishname: any, nCount: number): Promise<IOrder> {
    return this.post('http://localhost:8000/api/orders/', {
      dishName: nDishname,
      count: nCount
    });
  }

  putOrder(order: IOrder): Promise<IOrder> {
    return this.put(`http://localhost:8000/api/orders/${order.id}/`,{
      name: order.dish_name,
      count: order.count
    });
  }

  deleteOrder(order: IOrder): Promise<any> {
    return this.post(`http://localhost:8000/api/orders/${order.id}/`,{});
  }

  deleteOrders(): Promise<any>{
    return this.delet('http://localhost:8000/api/clear/', {});
  }

  // Auth
  auth(login: any, pass: any): Promise<IAuthResponse> {
    return this.post('http://localhost:8000/api/login/', {
      username: login,
      password: pass
    });
  }

  logout(): Promise<any> {
    return this.post('http://localhost:8000/api/logout/', {});
  }
}
