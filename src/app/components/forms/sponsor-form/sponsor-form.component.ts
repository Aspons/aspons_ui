import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../../services/data/data.service';
import {Router} from '@angular/router';
import {AddressFormComponent} from '../address-form/address-form.component';

@Component({
  selector: 'app-sponsor-form',
  templateUrl: './sponsor-form.component.html',
  styleUrls: ['./sponsor-form.component.css']
})
export class SponsorFormComponent implements AfterViewInit{

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

  registerSponsor() {
    const val = this.form.value;
    if (val.name && val.addressNumber && val.addressStreet && val.addressPostcode && val.addressCity && val.addressCountry && val.phone) {
      this.dataService.postData('companies', {
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
        .subscribe(() => {
          this.router.navigateByUrl('/dashboard');
        });
    }
  }
}
