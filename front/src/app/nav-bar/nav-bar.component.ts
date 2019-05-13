import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/models/models';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isEdit:boolean;
  public items: Item[] = [
    { title: 'Restaurant', link: '#' },
    { title: 'Bar', link: '#' },
    { title: 'Coffee', link: '#' },
    { title: 'Cafe', link: '#' },
    { title: 'Karaoke', link: '#' },
]
  


  constructor() { }

  ngOnInit() {
  }
  showEdit(){
    this.isEdit = !this.isEdit;
  }
   myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}
