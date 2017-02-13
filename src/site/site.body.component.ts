'use strict';

import { Component, OnInit } from '@angular/core';
import { HomeMainComponent } from '../app/home/home.main.component';

@Component({
  selector: 'site-body',
  templateUrl: 'templates/site.body.html'
})

export class SiteBodyComponent implements OnInit {
  constructor() {}

  ngOnInit(){
    console.log('body is created => ');
  }
}
