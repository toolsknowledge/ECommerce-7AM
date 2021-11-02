import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { RatingComponent } from './components/rating.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    HttpClientModule,
    RouterModule.forRoot([{path:"",loadChildren:()=>import("./HomeModule/module/home.module").then(posRes=>posRes.HomeModule)}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
