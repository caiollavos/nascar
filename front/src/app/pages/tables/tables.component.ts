import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  drivers: any = [];
  private searchTerms = new Subject<string>();
  loading: boolean = false;

  constructor(private service: DriversService) { }

  ngOnInit(): void {
    this.service.getDrivers().subscribe(
      drivers => {
          this.drivers = drivers;
      },
    );
  }

  

}
