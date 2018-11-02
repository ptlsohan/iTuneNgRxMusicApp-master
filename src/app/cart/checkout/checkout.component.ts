import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as fromRoot from '../../store/reducer/index';
import {Store} from '@ngrx/store';
import * as CartActions from '../store/cart.actions';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  customerForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<fromRoot.State>, private router: Router) { }


  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [ Validators.required, Validators.minLength(3)]],
      lastName: ['', [ Validators.required, Validators.minLength(3)]],
      creditCardNo: ['', [Validators.required, Validators.min(100000000000), Validators.max(999999999999)]],
      street: ['', [Validators.required]]
    });
  }
  makePayment(){
    this.store.dispatch(new CartActions.ClearCart());
    alert('Payment successful');
  }

}
