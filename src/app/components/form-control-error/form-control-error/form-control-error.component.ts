import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control-error',
  templateUrl: './form-control-error.component.html',
  styleUrls: ['./form-control-error.component.scss']
})
export class FormControlErrorComponent implements OnInit {

  private _control : FormControl;
  get control() : FormControl { return this._control };

  @Input("control") set control (value : FormControl) {
    if (value && value instanceof FormControl) {
      this._control = value;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
