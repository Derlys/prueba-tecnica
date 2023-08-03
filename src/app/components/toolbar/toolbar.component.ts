import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {CommonModule} from '@angular/common'

@Component({
  standalone: true,
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ],
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

}
