import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteService } from '../services/quote.service';
import { QuoteBoxComponent } from '../quote-box/quote-box.component';
import { LikeComponent } from './like/like.component';
import { DislikeComponent } from './dislike/dislike.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteBoxComponent,
    LikeComponent,
    DislikeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
