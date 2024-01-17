import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddThingComponent } from './components/add-thing/add-thing.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddThingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class ThingsModule { }
