import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  isDisplayInfo = false;
  dataOptions = ["Online", "Direct", "Database", "Referal", "Internals", "Online Mass", "Cộng Hưởng", "Khác"];
  accountForm = this.fb.group({
    phoneNumber: '',
    name: '',
    dataOrigin: '',
    email: '',
    password: ''
  })
  constructor(private fb: FormBuilder) {}
}
