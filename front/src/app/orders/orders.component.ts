import { Component, OnInit } from '@angular/core';
import { IOrder } from '../shared/models/models';
import { ProviderService } from '../shared/services/provider.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orders: IOrder[] = [];
  public empty = true;

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.provider.getOrders().then(res => {
      this.orders = res;
      if (res.length !== 0) {
        this.empty = false;
      } else {
        this.empty = true;
      }
    });
  }

  putOrder(order: IOrder) {
    this.provider.putOrder(order).then(res => {

    });
  }

  deleteOrder(order: IOrder) {
    this.provider.deleteOrder(order).then(res => {
      this.getOrders();
    });
  }

  deleteOrders() {
    this.provider.deleteOrders().then(res => {
      window.location.reload();
    });
  }

}
