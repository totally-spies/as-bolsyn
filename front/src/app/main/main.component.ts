import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private provider: ProviderService) { }

  ngOnInit() {}
}
