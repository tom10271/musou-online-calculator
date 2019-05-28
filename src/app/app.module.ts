import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeaponComponent } from '../Weapon/weapon.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, WeaponComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
