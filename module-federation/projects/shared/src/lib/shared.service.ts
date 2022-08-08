import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environmentSharedLib } from './environment';
import { Observable } from 'rxjs';
import { Travels } from './models/travels';
import { FinancialReport } from './models/reports';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private http: HttpClient
  ) { }

  public getTravels(): Observable<any> {
    const TRAVELS_URL = `${environmentSharedLib.baseUrl}/travels`;
    return this.http.get<Travels>(TRAVELS_URL);
  }

  public getFinancialReports(): Observable<any> {
    const FINANCIAL_URL = `${environmentSharedLib.baseUrl}/financial-report`;
    return this.http.get<FinancialReport>(FINANCIAL_URL);
  }
}
