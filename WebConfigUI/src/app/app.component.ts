/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { WebsocketService } from '../services/websocket.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
  providers: [ WebsocketService,MessageService ]
})
export class AppComponent implements OnInit {
  
  constructor(public messageservice: MessageService,private analytics: AnalyticsService) {
    messageservice.messages.subscribe(msg=> {
    })

  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
