import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appSelectedCharacter]',
  standalone: false
})
export class SelectedCharacterDirective implements OnInit, OnChanges {
  @Input() color: string = 'black';
  @Input() selected: boolean = false;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    this.select();
  }

  ngOnInit() {
    this.select();
  }

  select() {
    if (this.selected) {
      this.el.nativeElement.style.border = `3px solid ${this.color}`;
    } else {
      this.el.nativeElement.style.border = 'unset';
    }
  }

}
