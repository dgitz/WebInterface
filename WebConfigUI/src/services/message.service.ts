import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import { DiagnosticService,JSON_Diagnostic_ID } from '../classes/auto_generated/jsonclass'
import { Arm_StatusService,JSON_Arm_Status_ID } from '../classes/auto_generated/jsonclass'
@Injectable()

export class MessageService {
    private conn_string = `ws://127.0.0.1:`.concat("8080");
    public messages: Subject<any>;
    constructor(private wsService: WebsocketService,
        private diagnosticservice: DiagnosticService,
        private armedstatusservice: Arm_StatusService
        ) {
            this.diagnosticservice.rx_count=0;
            this.armedstatusservice.rx_count=0;
        this.messages = <Subject<any>>wsService
            .connect(this.conn_string)
            .map((response: any): any => {
                let obj = JSON.parse(response.data);
                if(obj.ID == JSON_Diagnostic_ID) //Diagnostic
                {
                    this.diagnosticservice.rx_count++;
                    this.diagnosticservice.DeviceName = obj.data.diagnostic.DeviceName;
                    this.diagnosticservice.Component = obj.data.diagnostic.Component;
                    this.diagnosticservice.Description = obj.data.diagnostic.Description;
                    this.diagnosticservice.Diagnostic_Message = obj.data.diagnostic.Diagnostic_Message;
                    this.diagnosticservice.Diagnostic_Type = obj.data.diagnostic.Diagnostic_Type;
                    this.diagnosticservice.Level = obj.data.diagnostic.Level;
                    this.diagnosticservice.Node_Name = obj.data.diagnostic.Node_Name;
                    this.diagnosticservice.SubSystem = obj.data.diagnostic.SubSystem;
                    this.diagnosticservice.System = obj.data.diagnostic.System;
                }
                else if(obj.ID == JSON_Arm_Status_ID) //Arm Status
                {
                    this.armedstatusservice.rx_count++;
                    this.armedstatusservice.armed_status = obj.data.armed_status;
                    console.log("v0 " + this.armedstatusservice + " " + this.armedstatusservice.armed_status);
                }
                return response.data;
            });
    }


}