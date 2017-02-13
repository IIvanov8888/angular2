import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html'
})

export class OtherComponent implements OnInit {

  progress: string = 'title';

  constructor(public toastr: ToastsManager) {

  }

  ngOnInit(){
  }

  showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
  }
}
