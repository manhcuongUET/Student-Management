import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-management-fee',
  templateUrl: './management-fee.component.html',
  styleUrls: ['./management-fee.component.css']
})
export class ManagementFeeComponent {
  titleFee = "Học phí";
  amount = '9.500.000';
  time = '22/04/2023';
  data = [1, 2, 3, 4, 5, 6, 7];
  isVisible = false;
  deleteModal = false;
  editModal = false;
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.editModal = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.editModal = false;
  }

  handleCancelModalDelete() {
    this.deleteModal = false;
  }

  handleOkDeleteFee() {
    this.deleteModal = false;
    this.isVisible  = false; 
  }

  showEditFee() {
    this.isVisible = false;
    this.editModal = true;
  }
}
