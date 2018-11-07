import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { HighlightTextDirective } from './directives/highlight-text.directive';
import { CustomDirective } from './directives/custom.directive';
import { ShoppingCartService } from './services/shopping-cart.service';
import { HttpClientModule } from '@angular/common/http';
import { InfinteScrollDirective } from './directives/infinte-scroll.directive';
import { DiscountPipe } from './discount.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { FeedComponent } from './components/feed/feed.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HighlightTextDirective,
    CustomDirective,
    InfinteScrollDirective,
    DiscountPipe,
    HeaderComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
