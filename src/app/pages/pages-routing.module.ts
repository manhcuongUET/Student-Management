import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { PagesComponent } from './pages.component';
import { ManagementFeeComponent } from './management-fee/management-fee.component';
import { ListEventComponent } from './list-event/list-event.component';
import { ConfirmFeeComponent } from './confirm-fee/confirm-fee.component';

import { EmailComponent } from './email/email.component';
import { NewEmailComponent } from './email/new-email/new-email.component';
import { BoxEmailComponent } from './email/box-email/box-email.component';
import { ReadEmailComponent } from './email/read-email/read-email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestVerifyFeeComponent } from './request-verify-fee/request-verify-fee.component';
import { ListStudentComponent } from './list-student/list-student.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: TestComponent,
      },

      //Implement component other

      {
        path: 'managementFee',
        component: ManagementFeeComponent,
      },
      {
        path: 'listEvent',
        component: ListEventComponent,
      },
      {
        path: 'email',
        component: EmailComponent,
        children: [
          {
            path: 'new-email',
            component: NewEmailComponent,
          },
          {
            path: 'box-email/:slug',
            component: BoxEmailComponent,
          },
          {
            path: 'read-email/:id',
            component: ReadEmailComponent,
          },
        ],
      },
      {
        path:'feeVerification',
        component: ConfirmFeeComponent
      },
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'requestFeeVerify',
        component: RequestVerifyFeeComponent
      },
      {
        path: 'listStudent',
        component: ListStudentComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
