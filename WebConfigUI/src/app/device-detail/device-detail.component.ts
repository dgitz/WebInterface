import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../classes/device';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  @Input() device: Device;
  path: string;
  constructor(public _DomSanitizationService: DomSanitizer) {
   
   }

  ngOnInit() {
    
  }
  ngOnChanges()
  {
    if(this.device != undefined)
    {
      this.path = "assets/devicelibrary/" + this.device.PartNumber + "/MEDIA/" + this.device.PartNumber + ".png";
      //this.path = this._DomSanitizationService.bypassSecurityTrustUrl("/home/robot/Dropbox/FASTRobotics/Library/" + this.device.PartNumber + "/MEDIA/" + this.device.PartNumber + ".jpg");
    }
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/