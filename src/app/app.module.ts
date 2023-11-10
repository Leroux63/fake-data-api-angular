import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from './pages/users/list/list.component';
import { DetailsComponent } from './pages/users/details/details.component';
import { ListProductComponent } from './pages/products/list/listproduct.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { ErrorComponent } from './pages/error/error.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DetailsProductComponent} from "./pages/products/details/detailsproduct.component";
import {NgOptimizedImage} from "@angular/common";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    SigninComponent,
    ErrorComponent,
    ListProductComponent,
    DetailsProductComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
