import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from './shared.module';
import { HomeComponent } from './home/home.component';
import { ProductViewShowComponent } from './product-view-show/product-view-show.component';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductShowComponent,
    ProductCreateComponent,
    HomeComponent,
    ProductViewShowComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    SharedModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
