import {BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent } from './app.component';
import {environment } from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {MusicService} from './music/services/music.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MusicModule} from './music/music.module';
import {CartComponent } from './cart/cart/cart.component';
import {CartModule} from './cart/cart.module';
import {CheckoutComponent } from './cart/checkout/checkout.component';
import {AuthModule} from './auth/auth.module';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule } from '@ngrx/store-devtools';
import {StoreRouterConnectingModule , RouterStateSerializer} from '@ngrx/router-store';
import {metaReducers, reducers, CustomSerializer} from './store/reducer';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
     ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MusicModule,
    CartModule,
    AuthModule,
    CoreModule,
    SharedModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([])
  ],
   providers: [MusicService, Location , {provide: RouterStateSerializer , useClass: CustomSerializer}],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
