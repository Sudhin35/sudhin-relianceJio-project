import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  Input,
  HostBinding,
} from "@angular/core";

@Directive({
  selector: "[appButtonColor]",
})
export class ButtonColorDirective {
  @Input() primary : boolean
  defaultPrimaryBackgroundColor: string = "rgb(10, 53, 107)";
  hoverPrimaryHighlightColor: string = "rgb(10, 53, 107)";
  defaultSecondaryBackgroundColor: string = "rgb(247, 148, 33)";
  hoverSecondaryHighlightColor: string = "rgb(247, 148, 33)";
  buttonFontColor: string = "white";
  @HostBinding("style.backgroundColor") backgroundColor: string;
  @HostBinding("style.color") color: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultPrimaryBackgroundColor;
    this.color = this.buttonFontColor;
  }


  @HostListener("mouseenter") mouseover(eventData: Event) {
    if (this.primary) {
      this.backgroundColor = this.hoverPrimaryHighlightColor;
      this.color = this.buttonFontColor; 
    } else {
      this.backgroundColor = this.hoverSecondaryHighlightColor;
      this.color = this.buttonFontColor; 
    }
    
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    if (this.primary) {
      this.backgroundColor = this.defaultPrimaryBackgroundColor;
      this.color = this.buttonFontColor; 
    } else {
      this.backgroundColor = this.defaultSecondaryBackgroundColor;
      this.color = this.buttonFontColor; 
    }
  }
}
