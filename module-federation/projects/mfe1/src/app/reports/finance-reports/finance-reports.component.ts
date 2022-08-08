import { Component, OnInit } from '@angular/core';
import { FinancialReport } from 'projects/shared/src/lib/models/reports';
import { SharedService } from 'projects/shared/src/lib/shared.service';

@Component({
  selector: 'app-finance-reports',
  templateUrl: './finance-reports.component.html',
  styleUrls: ['./finance-reports.component.scss']
})
export class FinanceReportsComponent implements OnInit {
  public finaceReportData: FinancialReport;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.getFinancialReport();
  }

  private getFinancialReport() {
    this.sharedService.getFinancialReports()
      .subscribe(
        (res) => { this.finaceReportData = res; },
        (error) => { console.log('error getFinancialReport', error); }
      );
  }
}
