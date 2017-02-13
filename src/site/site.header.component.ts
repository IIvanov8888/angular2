import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-header',
  templateUrl: 'templates/site.header.html'
})

export class SiteHeaderComponent implements OnInit {
  constructor( ) { }

  ngOnInit() {
    console.log('header is created => ');
  }
}
