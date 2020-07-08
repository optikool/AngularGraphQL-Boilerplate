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
    this.handleIsActive({state: 'active'});
  }

  @HostListener('mouseleave', ['$event']) public onMouseOut(event) {
    this.handleIsActive({state: 'inactive'});
  }

  @HostListener('click', ['$event.target']) public onClick(event) {
    console.log('FancycaptionEffectDirective mouseout inactive: ', event);
  }

  constructor() { }

  private handleIsActive(state: { state: string }): void {
    this.setIsActive.emit(state);
  }
}
