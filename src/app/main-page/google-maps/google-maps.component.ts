import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit{

  constructor(private elementRef: ElementRef) {}

  mapCenter: google.maps.LatLngLiteral = {
    lat: 48.726255,
    lng: 21.255966
  };

  mapZoom = 16;

  mapHeight = 400;
  mapWidth = 400;


  markerPosition: google.maps.LatLngLiteral = {
    lat: 48.726187,
    lng: 21.254647
  };

  markerAddress = 'New York, NY';
  markerTitle = 'Môj marker';

  markerOptions: google.maps.MarkerOptions = {
    animation: google.maps.Animation.DROP,
  };

  mapOptions: google.maps.MapOptions = {
    // mapTypeId: 'terrain',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    draggable: true,
    // panControl: true,
    // streetViewControl: false,
    styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateMapDimensions();
  }

  ngOnInit() {
    this.updateMapDimensions();
  }

  updateMapDimensions() {
    // Calculate responsive dimensions based on window size
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // Adjust the dimensions based on your desired responsive behavior
    this.mapHeight = windowHeight * 0.7;
    this.mapWidth = windowWidth * 0.8;
  }

  openGoogleMaps() {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.markerAddress)}`;
    window.open(url, '_blank');
  }
}
