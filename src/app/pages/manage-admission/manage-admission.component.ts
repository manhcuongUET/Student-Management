import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-admission',
  templateUrl: './manage-admission.component.html',
  styleUrls: ['./manage-admission.component.css']
})
export class ManageAdmissionComponent {
  listOfData:Array<any> = [];
  deleteModal = false;
  editModal = false;
  addModal = false;
  radioValue = 1;
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

  handleCancelAddAdmission() {
    this.addModal = false;
  }

  handleOkAddAdmission() {
    this.addModal = false;
  }
}
