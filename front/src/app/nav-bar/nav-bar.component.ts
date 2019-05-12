import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public items: Item[] = [
    { title: 'Home', link: '#' },
    { title: 'Orders', link: '/product' },
    { title: 'Profile', link: '#' },
]

  constructor() { }

  ngOnInit() {
  }

}
