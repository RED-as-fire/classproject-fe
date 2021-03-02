import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarLinkComponent } from './components/navbar-link/navbar-link.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreModule } from './core/core.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLinkComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
