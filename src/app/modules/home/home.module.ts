import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {PeopleTableComponent} from '../../components'
import {HomeRoutingModule} from './home-routing.module'



@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        PeopleTableComponent,
      HomeRoutingModule
    ]
})
export class HomeModule { }
