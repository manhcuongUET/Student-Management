import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  resetPwForm!: FormGroup;
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.resetPwForm = this.fb.group({
      newPassword: ['', Validators.required],
      reNewPassword: ['', Validators.required],
    });
  }
  onSubmitChangePassword() {}
}
