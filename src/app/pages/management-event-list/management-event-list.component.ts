import { Component } from '@angular/core';

@Component({
  selector: 'app-management-event-list',
  templateUrl: './management-event-list.component.html',
  styleUrls: ['./management-event-list.component.css'],
})
export class ManagementEventListComponent {
  listDataMap = {
    eight: [{ type: 'warning', content: 'Sự kiên chào sinh viên' }],
    ten: [{ type: 'warning', content: 'Ngày hôi việc làm' }],
    eleven: [{ type: 'success', content: 'This is very long usual event........' }],
  };

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }

  visible: boolean = false;
  deleteModal = false;
  clickMe(): void {
    this.visible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }

  pressDel() {
    this.visible = false;
    this.deleteModal = true;
  }

  handleCancelModalDelete() {
    this.deleteModal = false;
  }
  handleOkDeleteFee() {
    this.deleteModal = false;
  }

  detailEvent = false;

  listOfData: Array<any> = [];
  ngOnInit(): void {
    this.listOfData = new Array(100).fill(0).map((_, index) => index);
  }

  handleCancelVeiwDetail() {
    this.detailEvent = false;
  }
  handleOkViewDetail() {
    this.detailEvent = false;
  }

  deleteStudentModal = false;
  handleCancelStudentDelete() {
    this.deleteStudentModal = false;
  }
  handleOkStudentModal() {
    this.deleteStudentModal = false;
  }

}
