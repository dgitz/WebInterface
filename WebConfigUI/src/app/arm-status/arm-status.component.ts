import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { MessageService } from '../../services/message.service';
import { DiagnosticService,Diagnostic } from '../../classes/auto_generated/jsonclass';

@Component({
  selector: 'app-arm-status',
  templateUrl: './arm-status.component.html',
  styleUrls: ['./arm-status.component.css'],
  providers: [ MessageService ]
})
export class ArmStatusComponent implements OnInit {
  tempdata: any;
  devices: any;
  private load_task: any = undefined;
  private diagnostic: Diagnostic = undefined;
  private last_diagnostic_rx: number = 0;
  constructor(public messageservice: MessageService,
    public diagnosticservice: DiagnosticService
    )
   {
     messageservice.messages.subscribe(msg=> {
       console.log("vx");
      this.diagnostic = this.diagnosticservice;
     });
    }

  ngOnInit() {
    console.log("loading2");
    this.load_task = setInterval((function () {
      this.updateView();
    }).bind(this), 1000.0 / 20.0);
    
  }
  ngOnDestroy() {
    clearInterval(this.load_task);
  }
  updateView(): void {
    if(this.diagnostic != undefined)
    {
      if(this.last_diagnostic_rx != this.diagnostic.rx_count)
      {
        console.log("diag2: " + this.diagnostic.DeviceName + " " + this.diagnostic.Level);
      }
      this.last_diagnostic_rx = this.diagnostic.rx_count;
    }

    
  }
}