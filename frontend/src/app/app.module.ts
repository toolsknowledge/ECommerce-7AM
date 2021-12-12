import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BarRatingModule } from 'ngx-bar-rating';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    HttpClientModule,
    BarRatingModule,
    RouterModule.forRoot([{path:"",loadChildren:()=>import("./HomeModule/module/home.module").then(posRes=>posRes.HomeModule)},
    {path:"description/:_id",loadChildren:()=>import("./description-module/module/description.module").then(posRes=>posRes.DescriptionModule)},
    {path:"cart/:_id",loadChildren:()=>import("./cart-module/module/cart.module").then(m=>m.CartModule)}
 ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


