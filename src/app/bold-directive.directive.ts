import { AfterViewInit, Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBoldDirective]'
})
export class BoldDirectiveDirective implements AfterViewInit{

  constructor(private el:ElementRef,
    private renderer:Renderer2) {this.setFontWeight('bold')}
  
  ngAfterViewInit(){
    
  }
  setFontWeight(color: string){
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', color)
  }
}
