import { 
  Directive,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appFancyCaptionEffect]'
})
export class FancycaptionEffectDirective {
  @Output() public setIsActive: EventEmitter<{state: string}> = new EventEmitter();

  @HostListener('mouseenter', ['$event']) public onMouseOver(event) {
    console.log('FancycaptionEffectDirective mouseover active: ', event);
    this.setIsActive.emit({state: 'active'});
  }

  @HostListener('mouseleave', ['$event']) public onMouseOut(event) {
    console.log('FancycaptionEffectDirective mouseout inactive: ', event);
    this.setIsActive.emit({state: 'inactive'});
  }

  @HostListener('click', ['$event.target']) public onClick(event) {
    console.log('FancycaptionEffectDirective mouseout inactive: ', event);
  }

  constructor() { }

}
