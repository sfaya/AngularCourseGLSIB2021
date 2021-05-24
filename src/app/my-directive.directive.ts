import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective implements OnInit {
  @Input() color = 'yellow';
  constructor(private _elementRef: ElementRef) {}

  ngOnInit() {}

  @HostListener('mouseenter') applyChange() {
    this.setColor(this.color);
  }

  @HostListener('mouseleave') removeChange() {
    this.setColor('null');
  }

  setColor(data: string) {
    this._elementRef.nativeElement.style.backgroundColor = data;
  }
}
