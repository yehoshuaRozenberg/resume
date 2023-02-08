import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


const modules = [MatIconModule,MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
     exports: [...modules]

})
export class MaterialModule { }
