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
  
  //GET POST
  // Get SECTIONS
  getSections(): Promise<ISection[]> {
    return this.get('http://localhost:8000/api/sections/', {});
  }
  
  //Post SECTIONS
  createSections(name:any):Promise<ISection>{
    return this.post('http://localhost:8000/api/sections/', {
      name:name
    });
  }

  //GET PUT DELETE
  //Get SECTION
  getSection(section:ISection):Promise<ISection>{
    return this.get(`http://localhost:8000/api/sections/${section.id}/`, {});
  }

  //Put SECTION
  updateSection(section:ISection):Promise<ISection>{
    return this.get(`http://localhost:8000/api/sections/${section.id}/`,{
      name:section.name
    });
  }
  deleteSection(sectionId):Promise<any>{
    return this.delet(`http://localhost:8000/api/sections/${sectionId}/`,{});
  }

  // RESTAURANTS Get Post
  //Get RESTAURANTS
  getRestaurants(section: ISection): Promise<IRestaurant[]> {
    return this.get(`http://localhost:8000/api/section/${section.id}/restaurants/`, {});
  }

  //POST RESTAURANTS
  createRestaurant(name: any, section:ISection): Promise<IRestaurant> {
     return this.post(`http://localhost:8000/api/sections/${section.id}/restaurants/`, {
       name: name
     });
   }

   // GET PUT DELETE RESTAURANT
   //GET RESTAURANT
   getRestaurant(restaurant:IRestaurant):Promise<IRestaurant>{
     return this.get(`http://localhost:8000/api/restaurants/${restaurant.id}/`,{});
   }
   //PUT RESTAURANT
  updateRestaurant(restaurant: IRestaurant): Promise<IRestaurant> {
    return this.put(`http://localhost:8000/api/restaurants/${restaurant.id}/`, {
      name: restaurant.name,
      // cuisine:
    });
  }
  //DELETE RESTAURANT
  deleteRestaurant(restaurantId: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/restaurants/${restaurantId}/`, {});
  }

  // DISH GET POST
  getDishes(restaurant:IRestaurant): Promise<IDish[]> {
    return this.get(`http://localhost:8000/api/restaurants/${restaurant.id}/dishes/`, {});
  }
  //POST DISH
  createDish(name: any, restaurant:IRestaurant): Promise<IDish> {
    return this.post(`http://localhost:8000/api/restaurants/${restaurant.id}/dishes/`, {
      name: name
    });
  }

  //GET PUT DELETE DISH
  //GET DISH
  getDish(dish:IDish):Promise<IDish>{
    return this.get(`http://localhost:8000/api/dishes/${dish.id}/`,{});
  }
  //PUT DISH
  updateDish(dish: IDish): Promise<IDish> {
    return this.put(`http://localhost:8000/api//dishes/${dish.id}/`, {
      name: dish.name
    });
  }
  //DELETE DISH
  deleteDish(dishId: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/dishes/${dishId}/`, {});
  }

  //GET POST Reviews
  getReviews(restaurant:IRestaurant):Promise<IReview[]>{
    return this.get(`http://localhost:8000/api/restaurants/${restaurant.id}/reviews/`,{});
  }
  //POST
  createReview(name:any, restaurant:IRestaurant):Promise<IReview>{
    return this.post(`http://localhost:8000/api/restaurants/${restaurant.id}/reviews/`,{
      name:name
    });
  }
  //GET POST Orders
  getOrders():Promise<IOrder[]>{
    return this.get('http://localhost:8000/api/orders/',{});
  }
  //Post Order
  createOrder(dishname:any):Promise<IOrder>{
    return this.post('http://localhost:8000/api/orders/',{
      dishName:dishname
    });
  }

  //GET PUT DELETE ORDER
  getOrder(order:IOrder):Promise<IOrder>{
    return this.get(`http://localhost:8000/api/orders/${order.id}/`,{});
  }
  //PUT ORDER
  updateOrder(dishname:any, order:IOrder):Promise<IOrder>{
    return this.put(`http://localhost:8000/api/orders/${order.id}/`,{
      name: order.dishName
    });
  }
  
  deleteOrder(orderId:IOrder):Promise<any>{
    return this.post(`http://localhost:8000/api/orders/${orderId}/`,{});
  }
   //POST CLEARER
   deleteOrders(order: IOrder[]):Promise<any>{
    return this.post('http://localhost:8000/api/clear/',{});
  }
  // POST LOGIN
  auth(login: any, password: any): Promise<IAuthResponse> {
    return this.post('http://localhost:8000/api/login/', {
      username: login,
      password: password
    });
  }

  //POST LOGOUT
  logout(): Promise<any> {
    return this.post('http://localhost:8000/api/logout/', {});
  }
}
