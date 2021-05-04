import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective implements OnInit{

  @Input() color='yellow';
  constructor( private _elementRef: ElementRef) { }


  ngOnInit(){
  this._elementRef.nativeElement.style.backgroundColor= this.color;
  }

}
