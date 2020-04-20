import { Directive ,ElementRef,Renderer2} from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]'
})
export class AttributeDirectiveDirective {

  constructor(private el:ElementRef, private renderer : Renderer2) { 
    this.renderer.setAttribute(this.el.nativeElement, 'style', 'margin-top: 30px; border: solid 2px red');


  }

}
