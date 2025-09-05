import { Component, ElementRef, EventEmitter, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlsComponent } from "../../../shared/controls/controls.component";
import { FormsModule } from '@angular/forms';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlsComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  @Output() add = new EventEmitter<Ticket>(); 
   ticket: Ticket = {
    id: Math.random()*100+'',
    title: "",
    request: '',
    status: 'open'
  }

  onSubmit(title: string, text: string ){
    this.ticket.title = title;
    this.ticket.request = text;
    this.add.emit(this.ticket);
    this.form().nativeElement.reset();
    
  }

}
