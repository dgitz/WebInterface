import { Component, OnInit } from '@angular/core';

import { Device } from '../../classes/auto_generated/jsonclass';
import { DeviceService } from '../../services/device.service';
import { Subscription } from 'rxjs';
import { MessageService } from '../../services/message.service';
import { DiagnosticService,Diagnostic } from '../../classes/auto_generated/jsonclass';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
  providers: [ MessageService ]
})
export class DevicesComponent implements OnInit {
  
  private registerGetData: Subscription;
  selectedDevice: Device;
  tempdata: any;
  devices: any;
  private load_task: any = undefined;
  private diagnostic: Diagnostic = undefined;
  private last_diagnostic_rx: number = 0;
  constructor(private deviceService: DeviceService,
    public messageservice: MessageService,
    public diagnosticservice: DiagnosticService
    )
   {
     messageservice.messages.subscribe(msg=> {
       console.log("vy");
      this.diagnostic = this.diagnosticservice;
     });
    }

  ngOnInit() {
    console.log("loading");
    this.getDevices();
    this.load_task = setInterval((function () {
      this.updateView();
    }).bind(this), 1000.0 / 20.0);
    
  }
  ngOnDestroy() {
    clearInterval(this.load_task);
  }

  onSelect(device: Device): void {
    this.selectedDevice = device;
  }
  getDevices(): void {
    this.registerGetData = this.deviceService.getDevices().subscribe((data: any) =>
    {
      this.devices = data.data.devicelist;
    });
    
  }
  updateView(): void {
    if(this.diagnostic != undefined)
    {
      if(this.last_diagnostic_rx != this.diagnostic.rx_count)
      {
        console.log("diag: " + this.diagnostic.DeviceName + " " + this.diagnostic.Level);
      }
      this.last_diagnostic_rx = this.diagnostic.rx_count;
    }

    
  }
}