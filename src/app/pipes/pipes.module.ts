import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CapitalizePipe} from './capitalize/capitalize.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
      CapitalizePipe
    ],
  exports: [
      CapitalizePipe
    ]
})
export class AppPipesModule { }