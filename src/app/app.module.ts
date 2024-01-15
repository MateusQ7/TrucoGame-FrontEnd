import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterBarComponent } from './shared/footer-bar/footer-bar.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { NavBarModule } from './shared/nav-bar/nav-bar.module';
import { FooterBarModule } from './shared/footer-bar/footer-bar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';
import { HttpClient, HttpClientModule, HttpHandler, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    NavBarModule,
    FooterBarModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
