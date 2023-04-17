import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CardsComponent } from './pattern/cards/cards.component';
import { HeaderBarComponent } from './pattern/header-bar/header-bar.component';
import { BigCardsComponent } from './pattern/big-cards/big-cards.component';
import { MytestDirective } from './directives/mytest.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderBarComponent,
    BigCardsComponent,
    MytestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
