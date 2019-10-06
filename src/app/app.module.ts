import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthInterceptor} from './interceptors/auth-interceptor';
import { RegisterComponent } from './components/register/register.component';
import { AssociationComponent } from './components/association/association.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { AssociationFormComponent } from './components/forms/association-form/association-form.component';
import { SponsorFormComponent } from './components/forms/sponsor-form/sponsor-form.component';
import { AddressFormComponent } from './components/forms/address-form/address-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    RegisterComponent,
    AssociationComponent,
    SponsorComponent,
    EquipmentComponent,
    AssociationFormComponent,
    SponsorFormComponent,
    AddressFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AuthenticationComponent }
      , { path: 'dashboard', component: DashboardComponent }
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
