export interface ISection {
  id: number;
  name: string;
}

export interface IRestaurant {
  id: number;
  name: string;
  section: string;
}

export interface IDish {
  id: number;
  name: string;
  restaurant: string;
}

export interface IOrder {
  id: number;
  dishName: string;
  count: number;
  user: string;
}

export interface IReview {
  id: number;
  text: string;
  user: string;
  restaurant: string;
}

export interface IAuthResponse {
  token: string;
}
