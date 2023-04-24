import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm-fee',
  templateUrl: './confirm-fee.component.html',
  styleUrls: ['./confirm-fee.component.css']
})
export class ConfirmFeeComponent {
  listOfData:Array<any> = [];
  deleteModal = false;
  editModal = false;
  radioValue = 1;
  ngFilterStatus = ["Tất cả", "Đã nộp đầy đủ phí ", "Thiếu phí giữ chỗ ", "Thiếu phí xét tuyển ", "Chưa nộp phí"];
  ngOnInit(): void {
    this.listOfData = new Array(100).fill(0).map((_, index) => (index));
  }

  handleCancelModalDelete() {
    this.deleteModal = false;
  }

  handleOkDeleteFee() {
    this.deleteModal = false;
  }

  
  handleCancelModalEdit() {
    this.editModal = false;
  }

  handleOkEditFee() {
    this.editModal = false;
  }

}
