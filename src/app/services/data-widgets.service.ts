import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()

export class DataWidgetsService {

  url:string = './dataJson/';

  constructor(private dataPresiService:Http) {}

  getService(file):Observable<any>{
    let stringUrl = this.url + file + '?' + Math.random();
    return this.dataPresiService.get(stringUrl).map((res: any) => {
      return res.json();
    })

  }
  

}
