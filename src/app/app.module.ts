import { AuthGuard } from './services/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginComponent } from './components/login/login.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HighlightTextDirective,
    CustomDirective,
    InfinteScrollDirective,
    DiscountPipe,
    HeaderComponent,
    FeedComponent,
    LoginComponent,
    ShoppingCartComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
