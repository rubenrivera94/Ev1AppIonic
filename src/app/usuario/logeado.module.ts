import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MenuPageModule } from '../menu/menu.module';

import { LogeadoPageRoutingModule } from './logeado-routing.module';

import { LogeadoPage } from './logeado.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LogeadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    LogeadoPageRoutingModule,
    MenuPageModule
  ],
  declarations: [LogeadoPage]
})
export class LogeadoPageModule {}
