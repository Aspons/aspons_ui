import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../../services/data/data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AddressFormComponent} from '../address-form/address-form.component';

@Component({
  selector: 'app-association-form',
  templateUrl: './association-form.component.html',
  styleUrls: ['./association-form.component.css']
})
export class AssociationFormComponent implements AfterViewInit {

  public form: FormGroup;
  @ViewChild(AddressFormComponent) addressFormComponent: AddressFormComponent;

  constructor(private fb: FormBuilder,
              private dataService: DataService,
              private router: Router) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.form.addControl('addressForm', this.addressFormComponent.form);
    this.addressFormComponent.form.setParent(this.form);
  }

  registerAssociation() {
    const val = this.form.value;
    console.log(val);
    if (val.name && val.addressForm.addressNumber && val.addressForm.addressStreet && val.addressForm.addressPostcode
      && val.addressForm.addressCity && val.addressForm.addressCountry && val.phone) {
      this.dataService.postData('association', {
        name: val.name
        , phone: val.phone
        , address: {
          number: val.addressForm.addressNumber
          , street: val.addressForm.addressStreet
          , postcode: val.addressForm.addressPostcode
          , city: val.addressForm.addressCity
          , country: val.addressForm.addressCountry
        }
      })
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
