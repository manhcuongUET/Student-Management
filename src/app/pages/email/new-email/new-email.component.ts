import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { GSafeData } from 'src/app/core/models/utils/safe-data.interface';
import { NotifyService } from 'src/app/core/services/utils/notify.service';

@Component({
  selector: 'app-new-email',
  templateUrl: './new-email.component.html',
  styleUrls: ['./new-email.component.css'],
})
export class NewEmailComponent implements OnInit, GSafeData {
  htmlContent = '';
  newEmailForm!: FormGroup;
  initValueForm: any;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '10rem',
    maxHeight: 'auto',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

  constructor(
    private router: Router,
    public ActivatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notifyService: NotifyService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.newEmailForm = this.fb.group({
      emailTo: ['', Validators.required],
      subjectEmail: ['', Validators.required],
      htmlContent: [''],
    });
    this.initValueForm = this.newEmailForm.value;
  }

  navigatorBack() {
    this.router.navigate(['/pages/email/box-email/inbox']);
  }

  closeNewEmail() {
    this.deleteNewEmail();
  }

  isDataSaved(): boolean {
    // return !this.newEmailForm.dirty;
    return true;
  }

  sendNewEmail() {
    console.log(this.newEmailForm.value);
  }
  deleteNewEmail() {
    if (!this.newEmailForm.dirty && this.newEmailForm.value.htmlContent.trim() === '') {
      this.navigatorBack();
    } else {
      this.notifyService
        .notifyConfirm({
          title: 'Are you sure?',
          text: 'Delete changes and exit',
          icon: 'info',
        })
        .then((confirm: any) => {
          console.log(confirm)
          if (confirm && confirm.value) {
            this.navigatorBack();
          }
        });
    }
  }
}
