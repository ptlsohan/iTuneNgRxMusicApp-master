import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from './containers/auth/auth.component';
import {AuthFormComponent} from './components/auth-form/auth-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
    ],
  declarations: [
   AuthComponent,
    AuthFormComponent
  ],
  exports: [
    AuthComponent,
    AuthFormComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [AuthService]
})
export class AuthModule { }


