import { Component, OnInit } from '@angular/core';
import { basket } from '../../utils/routing';

@Component({
  selector: 'top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  routes = {
    basket
  };

  constructor() {}

  ngOnInit() {}
}
