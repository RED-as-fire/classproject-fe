import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbActionsModule, NbCardModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarLinkComponent } from './components/navbar-link/navbar-link.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLinkComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
