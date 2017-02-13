import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

//import { AppComponent } from './app/app.component';
import { OtherComponent } from './app/other/other.component';

import { SiteComponents } from './site/site.component';
import { SiteBodyComponent } from './site/site.body.component';

import { HomeMainComponent } from './app/home/home.main.component';
import { HomeContentComponent } from './app/home/home.content.component';

import { TemplateDrivenComponent } from './app/login/template-driven/template.driven.component';
import { DataDrivenComponent } from './app/login/data-driven/data.driven.component';

let options: any = {
  animate: 'flyRight',
  positionClass: 'toast-bottom-right',
};

@NgModule({
  declarations: [
    ...SiteComponents,
    HomeMainComponent,
    HomeContentComponent,
    TemplateDrivenComponent,
    DataDrivenComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    ToastModule.forRoot(options),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [SiteBodyComponent]
})
export class AppModule { }
