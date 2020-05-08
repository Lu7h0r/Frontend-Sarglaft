import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// este modulo es temporal
import { FormsModule } from '@angular/forms';
// Rutas
import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTES } from './app.routes';
// Modulos
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  // APP_ROUTES: se trae mis rutas moduladas para que no se sobrecarguen acá
  imports: [
    APP_ROUTES,
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, // este import es temporal
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
