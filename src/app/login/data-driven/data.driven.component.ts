import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'data-driven',
  templateUrl: 'templates/data.driven.html',
  styles: [`
    input.ng-invalid {
      border: 1px solid red;
    }
    `]
})

export class DataDrivenComponent {
  private myForm: FormGroup;

  constructor(public toastr: ToastsManager) {
    this.myForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      'password': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log('This is the',this.myForm);

    this.toastr.success('Form is submitted!', 'Success!');
  }
}
