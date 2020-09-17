import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const H: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  platform: any;

  @ViewChild('map', { static: true })
  mapElement: ElementRef;

  constructor() {
    this.platform = new H.service.Platform({
      'apikey': 'xCSKCKWyH8uVFxd9gTHsIetlNSNrizwSKJVPeH4TO1c'
    })
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    let map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: 37.7397, lng: -121.4252 }
      }
    );
  }

}
