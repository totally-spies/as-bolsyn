import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.sass']
})
export class RestaurantsComponent implements OnInit {
  id:Number;
  name: String;
  section: String;
  isDropDown1:Boolean;
  isDropDown2:Boolean;
  isDropDown3:Boolean;
  constructor() {}

  ngOnInit() {
    this.name = "First Example";
    this.section = "First Section Example";
    this.id=1;
  }
  showInformation1(){
    this.isDropDown1=!this.isDropDown1;
    this.isDropDown2=false;
    this.isDropDown3 = false;
  }
  showInformation2(){
    this.isDropDown2=!this.isDropDown2;
    this.isDropDown1=false;
    this.isDropDown3 = false;
  }
  showInformation3(){
    this.isDropDown3=!this.isDropDown3;
    this.isDropDown2=false;
    this.isDropDown1 = false;
  }

  

}
