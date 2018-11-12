import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Device } from './../classes/auto_generated/jsonclass';
import { MOCKDATA_DEVICES } from './../mockdata/mock-devices';
import { catchError, map, tap,retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { USE_MOCK_DATA } from '../app/constants'

@Injectable({
  providedIn: 'root',
})

export class DeviceService {

  devices: Device[];
  constructor( private http: HttpClient) { }
  getDevices() {
    if(USE_MOCK_DATA == true)
    {
      return of(MOCKDATA_DEVICES);
    }
    else
    {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      }
      return this.http.post<any>("/request/",'{}',httpOptions)
        .pipe(retry(0)
        );
    }
  }
}