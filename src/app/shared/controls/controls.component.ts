import { Component, contentChild, ContentChild, ElementRef, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'control',
    '(click)': 'onClick()'
  }
})
export class ControlsComponent {
  @Input({required: true}) controlTitle!: string;
  private el = inject(ElementRef);
  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  private control = contentChild<ElementRef<HTMLTextAreaElement | HTMLInputElement>>('input');

  onClick(){
    console.log("clicked");
    console.log(this.el);
    console.log(this.control());
  }

}


