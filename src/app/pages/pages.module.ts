import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { BasicLayoutModule } from '../layouts/basic-layout/basic-layout.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    PagesComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BasicLayoutModule,
  ]
})
export class PagesModule { }
