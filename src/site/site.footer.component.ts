'use strict';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-footer',
  templateUrl: 'templates/site.footer.html'
})

export class SiteFooterComponent implements OnInit {
  constructor( ) { }

  ngOnInit() {
    console.log('footer is created => ');
  }
}
