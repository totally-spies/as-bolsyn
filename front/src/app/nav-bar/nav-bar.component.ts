import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public items: Item[] = [
    { title: 'Restaurant', link: '#' },
    { title: 'Bar', link: '/product' },
    { title: 'Coffee', link: '#' },
    { title: 'Cafe', link: '#' },
    { title: 'Karaoke', link: '#' },
]

  constructor() { }

  ngOnInit() {
  }

}
