import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      addressNumber: ['', Validators.required],
      addressStreet: ['', Validators.required],
      addressPostcode: ['', Validators.required],
      addressCity: ['', Validators.required],
      addressCountry: ['', Validators.required]
    });
  }
}
