import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { DevicesComponent } from './../../devices/devices.component';
import { DeviceDetailComponent } from './../../device-detail/device-detail.component';
import { MessagesComponent } from './../../messages/messages.component';



@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    
  ],
  declarations: [
    DashboardComponent,
    DevicesComponent,
    DeviceDetailComponent,
    MessagesComponent
  ],
})
export class DashboardModule { }
