import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancycaptionEffectDirective } from './fancycaption-effect.directive';



@NgModule({
  declarations: [
    FancycaptionEffectDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FancycaptionEffectDirective
  ]
})
export class DirectivesModule { }
