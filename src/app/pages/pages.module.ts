import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Ng-Zorro
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { BasicLayoutModule } from '../layouts/basic-layout/basic-layout.module';
import { TestComponent } from './test/test.component';
import { ManagementFeeComponent } from './management-fee/management-fee.component';
import { ListEventComponent } from './list-event/list-event.component';
import { EventCardComponent } from '../shared/components/event-card/event-card.component';
import { EmailComponent } from './email/email.component';
import { NewEmailComponent } from './email/new-email/new-email.component';
import { ReadEmailComponent } from './email/read-email/read-email.component';
import { BoxEmailComponent } from './email/box-email/box-email.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PagesComponent,
    TestComponent,
    ManagementFeeComponent,
    ListEventComponent,
    EventCardComponent,
    EmailComponent,
    NewEmailComponent,
    ReadEmailComponent,
    BoxEmailComponent,
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
    AngularEditorModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
