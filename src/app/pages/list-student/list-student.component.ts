import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
  listOfData:Array<any> = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listOfData = new Array(100).fill(0).map((_, index) => (index));
  }

  showProfile() {
    this.router.navigate(['/pages/profileStudent']);
  }
}
