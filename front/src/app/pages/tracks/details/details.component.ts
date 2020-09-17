import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TracksService } from 'src/app/services/tracks.service';

declare const H: any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  platform: any;
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  public lat: any;
  public lng: any;

  public loading: boolean;
  public track_id: string;
  public currentTrack;
  public img;
  public trackWeather;
  public myMarker;


  constructor(private actRoute: ActivatedRoute, private service: TracksService) {
    this.track_id = this.actRoute.snapshot.params.id;
    this.currentTrack = {};
    this.myMarker = 'https://www.flaticon.com/svg/static/icons/svg/1894/1894428.svg'
    this.platform = new H.service.Platform({
      'apikey': 'xCSKCKWyH8uVFxd9gTHsIetlNSNrizwSKJVPeH4TO1c'
    })
  }

  ngOnInit() {
    // console.log('ngInit', this.currentTrack);
    this.getTrackObj(this.track_id)
  }

  getTrackObj(id) {
    this.service.getTrack(id).subscribe(
      data => {
        data.forEach(element => {
          if (element.id === id) {
            this.currentTrack = element;
            this.getBgImg(this.currentTrack.id);
          }
        })
      }
    )
  }

  getBgImg(id) {
    switch (id) {
      case "016c7f98-48b0-4b05-a31c-6896f7146eee":
        this.currentTrack.img = './assets/img/theme/nashville-super.jpg'
        this.currentTrack.svg = null
        this.currentTrack.lat = 36.04442
        this.currentTrack.lng = -86.41262
        break;

      case "016ff83e-85b5-412e-a89e-b0aff72fcd14":
        this.currentTrack.img = './assets/img/theme/lucas-oil-raceway.jpg'
        this.currentTrack.svg = null
        this.currentTrack.lat = 36.04442
        this.currentTrack.lng = -86.41262
        break;

      case "035b5781-de86-49e6-98fb-b466e288ae10":
        this.currentTrack.img = './assets/img/theme/charlotte-motor-speedway.jpg'
        this.currentTrack.svg = './assets/img/theme/charlotte-motor-speedway.png'
        this.currentTrack.svg = null
        break;

      case "0562038b-e8cc-4f69-b29a-59c46aae8f6d":
        this.currentTrack.img = './assets/img/theme/wwtr.jpg'
        this.currentTrack.svg = null
        break;

      case "0a1efa46-0a38-4c10-ad30-51a77699788a":
        this.currentTrack.img = './assets/img/theme/daytona-road-course.jpg'
        this.currentTrack.svg = null
        break;

      case "0e9dda94-eb5b-49e6-a09f-0869b82ce30b":
        this.currentTrack.img = '/assets/img/theme/chicagoland-speedway.jpg'
        this.currentTrack.svg = '/assets/img/theme/chicagoland-speedway.png'
        this.currentTrack.lat = 41.474833;
        this.currentTrack.lng = -88.057097;
        break;

      case "18fcc226-bc18-4b66-80fb-4867b654e588":
        this.currentTrack.img = '/assets/img/theme/bristol-motor-speedway.jpg'
        this.currentTrack.svg = '/assets/img/theme/bristol-motor-speedway.png'
        this.currentTrack.lat = 36.5156;
        this.currentTrack.lng = -82.2569;
        break;

      case "261a48a2-53b8-4d2a-a196-8293f222e962":
        this.currentTrack.img = '/assets/img/theme/mid-ohio-sports-course.jpg'
        this.currentTrack.svg = null
        break;

      case "325402f9-e7b5-4771-9f0f-51339cbf7e16":
        this.currentTrack.img = '/assets/img/theme/eldora-speedway.jpg'
        this.currentTrack.svg = null
        break;

      case "325402f9-e7b5-4771-9f0f-51339cbf7e16":
        this.currentTrack.img = '/assets/img/theme/mid-ohio-sports-course.jpg'
        this.currentTrack.svg = null
        break;

      case "409dd8fb-2ab9-4181-9f0f-99545083b689":
        this.currentTrack.img = '/assets/img/theme/martinsville-speedway.jpg'
        this.currentTrack.lat = 36.633889;
        this.currentTrack.lng = -79.851111;
        this.currentTrack.svg = '/assets/img/theme/martinsville-speedway.png'
        break;

      case "421c2846-3b70-4ed9-acdf-be3dbe4957b6":
        this.currentTrack.img = '/assets/img/theme/indianapolis-motor-speedway.jpg'
        this.currentTrack.svg = '/assets/img/theme/indianapolis-motor-speedway.png'
        this.currentTrack.lat = 39.798333;
        this.currentTrack.lng = -86.232778;
        break;

      case "42d3569d-cc77-4072-88d5-f63046eddf39":
        this.currentTrack.img = '/assets/img/theme/kansas-speedway.jpg'
        this.currentTrack.svg = '/assets/img/theme/kansas-speedway.png'
        this.currentTrack.lat = 39.115789;
        this.currentTrack.lng = -94.831061;
        break;

      case "496fc152-b10f-4941-8439-f933eaae2e13":
        this.currentTrack.img = '/assets/img/theme/sonoma-raceway.jpg'
        this.currentTrack.svg = '/assets/img/theme/sonoma-raceway.png'
        this.currentTrack.lat = 38.16006;
        this.currentTrack.lng = -122.4594;
        break;

      case "5bfc8315-75e7-4600-83f1-faab25358bfe":
        this.currentTrack.img = '/assets/img/theme/canadian-motorsports-park.jpg'
        this.currentTrack.svg = null
        break;

      case "5dc82850-ba60-4bd6-8ce3-4e07e8094a83":
        this.currentTrack.img = '/assets/img/theme/phoenix-raceway.jpg'
        this.currentTrack.svg = '/assets/img/theme/phoenix-international-raceway.png'
        this.currentTrack.lat = 33.37475;
        this.currentTrack.lng = -112.31115;
        break;

      case "6c2be094-7477-4d92-b7ff-10dfda27e315":
        this.currentTrack.img = '/assets/img/theme/texas-motor-speedway.jpg'
        this.currentTrack.svg = '/assets/img/theme/texas-motor-speedway.png'
        this.currentTrack.lat = 33.03689;
        this.currentTrack.lng = -97.28309;
        break;

      case "6c9c2390-93fc-47e7-a788-4bfbed7b3c3c":
        this.currentTrack.img = '/assets/img/theme/iowa-speedway.jpg'
        this.currentTrack.svg = null
        break;

      case "6ff97f68-2e9d-4fe6-8cd8-2969e1d3570b":
        this.currentTrack.img = '/assets/img/theme/daytona-international-speedway.jpg'
        this.currentTrack.svg = '/assets/img/theme/daytona-international-speedway.png'
        this.currentTrack.lat = 29.185556;
        this.currentTrack.lng = -81.069444;
        break;

      case "7267d5f0-463e-4a81-a7fe-23b71dd2182e":
        this.currentTrack.img = '/assets/img/theme/pocono-raceway.jpg'
        this.currentTrack.svg = '/assets/img/theme/pocono-raceway.png'
        this.currentTrack.lat = 41.05539;
        this.currentTrack.lng = -75.51152;
        break;

      case "734227a1-a32f-40bf-b174-0c0e7aa0d696":
        this.currentTrack.img = '/assets/img/theme/richmond-raceway.jpg'
        this.currentTrack.svg = '/assets/img/theme/richmond-international-raceway.png'
        this.currentTrack.lat = 37.59169;
        this.currentTrack.lng = -77.42091;
        break;

      case "75494065-bf21-4039-8d99-b8e438c8b4a4":
        this.currentTrack.img = '/assets/img/theme/atlanta-motor-speedway.jpeg'
        this.currentTrack.svg = '/assets/img/theme/atlanta-motor-speedway.png'
        this.currentTrack.lat = 42.066389;
        this.currentTrack.lng = -84.241389;
        break;

      case "83865dba-7a30-441a-95e0-51219f7e7c56":
        this.currentTrack.img = '/assets/img/theme/michigan-international-speedway.jpg'
        this.currentTrack.svg = '/assets/img/theme/michigan-international-speedway.png'
        this.currentTrack.lat = 42.066389;
        this.currentTrack.lng = -84.241389;
        break;

      case "83e96e25-19f7-4538-809c-24e888cc3e41":
        this.currentTrack.img = '/assets/img/theme/talladega-super-speedway.jpg'
        this.currentTrack.svg = '/assets/img/theme/michigan-international-speedway.png'
        this.currentTrack.lat = 33.566961;
        this.currentTrack.lng = -86.066069;
        break;

      case "89534a6a-0502-465c-a42b-207dd3984527":
        this.currentTrack.img = '/assets/img/theme/road-america.jpg'
        this.currentTrack.svg = null
        break;

      case "8bde2b6c-236e-44c7-98ac-2fbcfb6ae13b":
        this.currentTrack.img = '/assets/img/theme/kentucky-speedway.jpg'
        this.currentTrack.svg = '/assets/img/theme/kentucky-speedway.png'
        this.currentTrack.lat = 38.70964;
        this.currentTrack.lng = -84.91624;
        break;

      case "9580816f-e17c-4167-8402-ba16725bcb19":
        this.currentTrack.img = '/assets/img/theme/las-vegas-motor-speedway.jpg'
        this.currentTrack.lat = 36.27134
        this.currentTrack.lng = -115.01112
        this.currentTrack.svg = '/assets/img/theme/las-vegas-motor-speedway.png'
        break;

      case "999077d2-eea6-4912-8a05-50461643f7f9":
        this.currentTrack.img = '/assets/img/theme/rockingham-speedway.jpg'
        this.currentTrack.svg = null
        break;

      case "9e171ce2-7b98-4bed-b870-a01d7e393cda":
        this.currentTrack.img = '/assets/img/theme/homestead-miami-speedway.jpg'
        this.currentTrack.svg = '/assets/img/theme/homestead-miami-speedway.png'
        this.currentTrack.lat = 25.451944;
        this.currentTrack.lng = -80.408611;
        break;

      case "aab526c7-4279-4693-9cb1-90e3c7b974fc":
        this.currentTrack.img = '/assets/img/theme/darlington-raceway.jpg'
        this.currentTrack.svg = '/assets/img/theme/darlington-raceway.png'
        this.currentTrack.lat = 34.295278;
        this.currentTrack.lng = -79.905556;
        break;

      case "b2bd268a-6ee6-4c6b-a7c6-ac5b1b7b6b0e":
        this.currentTrack.img = '/assets/img/theme/auto-club-speedway.jpg'
        this.currentTrack.svg = '/assets/img/theme/auto-club-speedway.png'
        this.currentTrack.lat = 34.08858;
        this.currentTrack.lng = -117.5;
        break;

      case "b6971a30-705c-46eb-9c54-6201d5832ef7":
        this.currentTrack.img = '/assets/img/theme/north-wilkesboro-speed-sport.jpg'
        this.currentTrack.svg = null
        break;

      case "b6a68620-dc28-4ffe-bb89-07ef97b3c7cd":
        this.currentTrack.img = '/assets/img/theme/circuit-gilles-villeneuve.jpg'
        this.currentTrack.svg = null
        break;

      case "c0ae0e00-9899-4d01-869b-56a4763cc54d":
        this.currentTrack.img = '/assets/img/theme/charlotte-motor-speedway-2.jpg'
        this.currentTrack.svg = null
        break;

      case "cd705ff5-045b-4c96-a96e-74a98b5f95af":
        this.currentTrack.img = '/assets/img/theme/new-hampshire-motor-speedway.jpg'
        this.currentTrack.svg = '/assets/img/theme/new-hampshire-motor-speedway.png'
        this.currentTrack.lat = 43.36226;
        this.currentTrack.lng = -71.46125;
        break;

      case "d52314d0-06c3-4619-a8d0-1d97a21d8f22":
        this.currentTrack.img = '/assets/img/theme/watkins-glen-international.jpg'
        this.currentTrack.svg = '/assets/img/theme/watkins-glen-international.png'
        this.currentTrack.lat = 42.336944;
        this.currentTrack.lng = -76.927222;
        break;

      case "e757d061-86db-4b28-9b19-9a3536a6994e":
        this.currentTrack.paramName = this.currentTrack.city
        this.currentTrack.img = '/assets/img/theme/dover-international-speedway.jpg'
        this.currentTrack.svg = '/assets/img/theme/dover-international-speedway.png'
        this.currentTrack.lat = 39.1896;
        this.currentTrack.lng = -75.53031;
        this.getWeather(this.currentTrack.paramName);
        break;


      default:
        // console.log(this.currentTrack.data.id)
        break;
    }
  }

  getWeather(param) {
    this.service.getWeatherTrack(param).subscribe(
      wheater => {
        this.currentTrack.weather = wheater;
      })
  }

    addMarkersToMap(map) {
      var myMarker = new H.map.Icon("https://image.flaticon.com/icons/svg/252/252025.svg", {size: {w: 24, h: 24}});

      let marker = new H.map.Marker({
        lat: this.currentTrack.lat,
        lng: this.currentTrack.lng
      }, {
        icon: myMarker
      });
      map.addObject(marker);
    }

    initMap() {
      let defaultLayers = this.platform.createDefaultLayers();
      let map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.vector.normal.map, {
        zoom: 15,
        center: { lat: this.currentTrack.lat, lng: this.currentTrack.lng }
      }
      );

      let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      var ui = H.ui.UI.createDefault(map, defaultLayers);
      this.addMarkersToMap(map)
    }

    ngAfterViewInit() {
      setTimeout(() => {
        // this.initMap()
      }, 1500)
    }

  }
