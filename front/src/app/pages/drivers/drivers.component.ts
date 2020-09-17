import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  img_placeholder = './assets/img/theme/img_placeholder.png'
  drivers: any = [];

  constructor(private service: DriversService) { }

  ngOnInit(): void {
    this.service.getDrivers().subscribe(
      drivers => {
        this.drivers = drivers;
      }
    );
  }
}
