import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  Input,
} from "@angular/core";

@Component({
  selector: "app-angular-maps",
  templateUrl: "./angular-maps.component.html",
  styleUrls: ["./angular-maps.component.css"],
})
export class AngularMapsComponent implements OnInit, AfterViewInit {
  @Input() mapData: Array<Object>;

  map: google.maps.Map;
  lat = 20.5937;
  lng = 78.9629;
  title = "angular-gmap";
  markers;

  constructor() {}

  ngOnInit() {
    this.markers = this.mapData;

    this.markers.forEach((element) => {
      (element.position = new google.maps.LatLng(element.lat, element.long)),
        (element.map = this.map),
        (element.title = element.language);
    });
  }

  @ViewChild("mapContainer", { static: false }) gmap: ElementRef;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 5,
  };

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.loadAllMarkers();
  }

  loadAllMarkers(): void {
    this.markers.forEach((markerInfo) => {
      const marker = new google.maps.Marker({
        ...markerInfo,
      });
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle(),
      });
      marker.addListener("mouseover", () => {
        infoWindow.open(marker.getMap(), marker);
        this.getUserLocation();
      });
      marker.setMap(this.map);
      console.log(this.map);
    });
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
}
