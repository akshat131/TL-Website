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



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EventsComponent,
    InventoryComponent,
    ContactComponent,
    HomeComponent,
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
          

      ]),
      

      
      ///////////////////////////////////////////////////////
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
