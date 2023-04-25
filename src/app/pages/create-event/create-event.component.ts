import { Component } from '@angular/core';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  listOfData: Array<any> = [];
  ngOnInit(): void {
    this.listOfData = new Array(100).fill(0).map((_, index) => index);
  }
  date = new Date(2012, 11, 21);
  mode: NzCalendarMode = 'month';
  time: Date | null = null;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);
}
