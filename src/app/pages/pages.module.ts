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

@NgModule({
  declarations: [
    PagesComponent,
    TestComponent,
    ManagementFeeComponent,
    ListEventComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BasicLayoutModule,
    NzCardModule,
    NzDropDownModule,
    NzModalModule,
    NzDatePickerModule,
    NzPaginationModule
  ]
})
export class PagesModule { }
