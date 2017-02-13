import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

export interface User {
  email: any;
  password: any;
}

@Component({
  selector: 'template-driven',
  templateUrl: 'templates/template.driven.html',
  styles: [`
    input.ng-invalid {
      border: 1px solid red;
    }
    `]
})

export class TemplateDrivenComponent {

  private user: User = {
    email: '',
    password: ''
  };

  constructor(public toastr: ToastsManager) {}

  onSubmit(form: NgForm){
    console.log('=>', form.value);

    this.toastr.success('Form is submitted!', 'Success!');
  }
}
