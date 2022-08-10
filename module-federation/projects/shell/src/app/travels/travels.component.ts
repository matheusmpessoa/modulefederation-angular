import { Component, OnInit } from '@angular/core';
import { Travels } from 'projects/shared/src/lib/models/travels';
import { SharedService } from 'projects/shared/src/lib/shared.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
  public panelOpenState = false;
  public travelsData: Travels;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.getTravels();
  }

  private getTravels() {
    this.sharedService.getTravels()
      .subscribe(
        (res) => { this.travelsData = res; },
        (error) => { console.log('error getTravels', error); }
      );
  }

}
