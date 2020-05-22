import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './api.service';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ApprovedComponent } from './approved/approved.component';
import { IssuedComponent } from './issued/issued.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EventsComponent,
    InventoryComponent,
    ContactComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    ApprovedComponent,
    IssuedComponent,
  ],
  imports: [
      FormsModule,
      BrowserModule,
      RouterModule,
      HttpClientModule,
      ReactiveFormsModule,
      
      BrowserAnimationsModule,
      

      ///////////////////////////////////////////////////////
      RouterModule.forRoot([

          {path:'home',component:HomeComponent},
          
          {path:'about',component:AboutComponent},
          {path:'events',component:EventsComponent},
          {path:'inventory',component:InventoryComponent},
          {path:'contact',component:ContactComponent},
          {path:'cart',component:CartComponent},
          {path:'checkout',component:CheckoutComponent},
          

      ], {scrollPositionRestoration: 'enabled'}),
      

      
      ///////////////////////////////////////////////////////
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
