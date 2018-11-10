import { Component, OnInit } from '@angular/core';

import { Device,DeviceTree } from '../../classes/device';
import { DeviceService } from '../../services/device.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  private registerGetData: Subscription;
  selectedDevice: Device;
  tempdata: any;
  devices: any;
  

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.getDevices();
  }

  onSelect(device: Device): void {
    this.selectedDevice = device;
  }
  getDevices(): void {
    this.registerGetData = this.deviceService.getDevices().subscribe((data: any) =>
    {
      this.devices = data.data.devicelist;
      //console.log(data.data.devicelist);
    });
  }
  /*
  getDeviceTrees(): void {
    this.deviceService.getDeviceTrees()
        .subscribe(deviceTrees => this.deviceTrees = deviceTrees);
  }
  */
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/