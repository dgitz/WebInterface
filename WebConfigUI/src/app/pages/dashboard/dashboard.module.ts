import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ArmStatusComponent } from '../../arm-status/arm-status.component';
import { DevicesComponent } from './../../devices/devices.component';
import { DeviceDetailComponent } from './../../device-detail/device-detail.component';



@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    
  ],
  declarations: [
    DashboardComponent,
    DevicesComponent,
    ArmStatusComponent,
    DeviceDetailComponent
  ],
})
export class DashboardModule { }
