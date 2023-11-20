import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
private initilaColor:string = '#f5f5f5';
private defaultColor:string = '#009688';
private defaultHeight:number = 180;

  constructor(private el:ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initilaColor);
  }
@Input('pkmnBorderCard') borderColor:string;

@HostListener('mouseenter') onMouseEnter()
{
  this.setBorder(this.borderColor || this.defaultColor)
}

@HostListener('mouseleave') onMouseLeave()
{
  this.setBorder(this.initilaColor)
}
  setHeight(height:number){
    this.el.nativeElement.style.height = `${height}px`;
  }
  setBorder(color:string) {
this.el.nativeElement.style.border= `solid 4px ${color}`
  }
}
