import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[shMytest]'
})
export class MytestDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    if (this.elRef.nativeElement.textContent === 'micro') {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    }
  }

}
