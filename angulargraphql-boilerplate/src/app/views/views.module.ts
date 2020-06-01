import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterBarComponent } from './shared/footer-bar/footer-bar.component';
import { HeaderBarComponent } from './shared/header-bar/header-bar.component';
import { SubfooterBarComponent } from './shared/subfooter-bar/subfooter-bar.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MaterialsModule } from '../helpers/materials/materials.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    FooterBarComponent,
    HeaderBarComponent,
    SubfooterBarComponent,
    TopBarComponent
  ],
  exports: [
    HomeComponent,
    PageNotFoundComponent,
    FooterBarComponent,
    HeaderBarComponent,
    SubfooterBarComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ViewsRoutingModule,
    MaterialsModule
  ]
})
export class ViewsModule { }
