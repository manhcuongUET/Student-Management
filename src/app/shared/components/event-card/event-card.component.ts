import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  @Input() eventData!: {
    date: string,
    time: string,
    title: string,
    description: string,
    isJoin: boolean,
  };
}
