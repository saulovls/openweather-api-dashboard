import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'jv-autofocus',
})
export class AutoFocusDirective implements AfterContentInit {
  @Input() public AutoFocus: boolean;

  public constructor(private el: ElementRef) {}

  public ngAfterContentInit(): void {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 500);
  }
}
