import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Ng-Zorro
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { BasicLayoutModule } from '../layouts/basic-layout/basic-layout.module';
import { TestComponent } from './test/test.component';
import { ManagementFeeComponent } from './management-fee/management-fee.component';
import { ListEventComponent } from './list-event/list-event.component';
import { EventCardComponent } from '../shared/components/event-card/event-card.component';
import { ConfirmFeeComponent } from './confirm-fee/confirm-fee.component';
import { EmailComponent } from './email/email.component';
import { NewEmailComponent } from './email/new-email/new-email.component';
import { ReadEmailComponent } from './email/read-email/read-email.component';
import { BoxEmailComponent } from './email/box-email/box-email.component';
import { QuillModule } from 'ngx-quill'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestVerifyFeeComponent } from './request-verify-fee/request-verify-fee.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ListStudentComponent } from './list-student/list-student.component';

import { ChatStudentsComponent } from './chat-students/chat-students.component';
import { ChatAdmissionsComponent } from './chat-admissions/chat-admissions.component';
@NgModule({
  declarations: [
    PagesComponent,
    TestComponent,
    ManagementFeeComponent,
    ConfirmFeeComponent,
    ListEventComponent,
    EventCardComponent,
    EmailComponent,
    NewEmailComponent,
    ReadEmailComponent,
    BoxEmailComponent,
    DashboardComponent,
    RequestVerifyFeeComponent,
    ListStudentComponent,
    ChatStudentsComponent,
    ChatAdmissionsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BasicLayoutModule,
    NzCardModule,
    NzDropDownModule,
    NzModalModule,
    NzDatePickerModule,
    NzPaginationModule,
    NzTableModule,
    NzInputModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NzRadioModule,
    NzTabsModule,
    NzPopoverModule,
    NzCheckboxModule
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
})
export class PagesModule {}
