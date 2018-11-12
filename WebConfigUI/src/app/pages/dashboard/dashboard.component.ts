import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;
import { Subscription } from 'rxjs';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnDestroy {
  private alive = true;
  private registerGetData: Subscription;
  tempdata: any;
  devices: any;
  private load_task: any = undefined;
  private last_diagnostic_rx: number = 0;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
    });
    
  }
  ngOnInit()
  {
  }
  ngOnDestroy() {
    this.alive = false;
  }
}
