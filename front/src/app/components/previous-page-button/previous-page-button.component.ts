import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'previous-page-button',
  templateUrl: './previous-page-button.component.html',
  styleUrls: ['./previous-page-button.component.scss']
})
export class PreviousPageButtonComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  back() {
    this.location.back();
  }
}
