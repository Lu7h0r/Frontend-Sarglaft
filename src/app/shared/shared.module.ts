import { NgModule } from '@angular/core';
// Modulo para iterar sobre html
import { PipesModule } from '../pipes/pipes.module';
import { CommonModule } from '@angular/common';
// Activamos rotuterModule para poderlo usar en el sidebar
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [RouterModule, CommonModule, PipesModule],
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
