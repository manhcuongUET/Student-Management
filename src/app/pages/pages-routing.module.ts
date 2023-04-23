import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { PagesComponent } from './pages.component';
import { ManagementFeeComponent } from './management-fee/management-fee.component';
import { ListEventComponent } from './list-event/list-event.component';
import { ConfirmFeeComponent } from './confirm-fee/confirm-fee.component';


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
        path:'managementFee',
        component: ManagementFeeComponent
      },
      {
        path: 'listEvent',
        component: ListEventComponent
      },
      {
        path: 'confirmFee',
        component: ConfirmFeeComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
