import { Component } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
  listOfData:Array<any> = [];
  ngOnInit(): void {
    this.listOfData = new Array(100).fill(0).map((_, index) => (index));
  }
}
