import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  @Input({required: true}) data!: Ticket;
  @Output() closeId = new EventEmitter();

  detailsVisible = signal(false);

  onToggleDetails(){
    this.detailsVisible.update((wasVisible)=>!wasVisible);
  }

  onComplete(){
    this.closeId.emit();

  }
  

 
 
}
