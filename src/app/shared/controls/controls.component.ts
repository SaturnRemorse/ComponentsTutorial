import { Component, HostBinding, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
    
})
export class ControlsComponent {

  // @HostBinding('class') className = 'control';

  @Input({required: true}) textLabel!: string;

  //@HostListener('click') 
  onClick(){
    console.log("clicked");
  }

}
