export interface Item {
  title: string;
  link: string;
}

export interface IUser {
  id: number;
  username: string;
  password: string;
  firstName: string;
  email: string;
  isAdmin: boolean;
}

export interface ISection {
  id: number;
  name: string;
}

export interface IRestaurant {
  id: number;
  name: string;
  imageUrl: string;
  address: string;
  contact: string;
  avgCost: number;
  section: ISection;
}

export interface IDish {
  id: number;
  name: string;
  price: number;
  restaurant: IRestaurant;
}

export interface IReview {
  id: number;
  text: string;
  user: IUser;
  restaurant: IRestaurant;
}

export interface IOrder {
  id: number;
  dishName: string;
  count: number;
  user: IUser;
}

export interface IAuthResponse {
  token: string;
  isAdmin: boolean;
  name: string;
}
