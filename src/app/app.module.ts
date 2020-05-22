import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// este modulo es temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Rutas
// import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTES } from './app.routes';
// Modulos
import { PagesModule } from './pages/pages.module';
import { ServiceModule } from './services/service.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  // APP_ROUTES: se trae mis rutas moduladas para que no se sobrecarguen acá
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule, // este import es temporal
    ReactiveFormsModule, // este import es temporal
    // AppRoutingModule,
    ServiceModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
