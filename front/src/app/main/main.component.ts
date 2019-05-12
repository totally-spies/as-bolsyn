import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {ISection, IRestaurant, IDish} from '../shared/models/models'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public cuisinelist: ISection[] = [];
  public restaurantlist: IRestaurant[]=[];
  public dishlist: IDish[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit() {
   //
  }
}

