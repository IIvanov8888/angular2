import { Component, Inject, Input } from '@angular/core';
import { TemplateDrivenComponent } from '../login/template-driven/template.driven.component';
@Component({
  selector: '[homeContent]',
  templateUrl: 'templates/home.content.html'
})

export class HomeContentComponent {

  private active: boolean = false;
  private activeTemp: boolean = false;
  private activeData: boolean = false;

  constructor( ) { }

  stickyAction() {
    if(this.active === true) {
       this.active = false;
    } else {
      this.active = true;
    }
  }
  templateAction() {
    if(this.activeTemp === true) {
       this.activeTemp = false;
    } else {
      this.activeTemp = true;
    }
  }
  dataAction() {
    if(this.activeData === true) {
       this.activeData = false;
    } else {
      this.activeData = true;
    }
  }
}
