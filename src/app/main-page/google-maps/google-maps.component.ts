import { Component } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent {
  mapCenter: google.maps.LatLngLiteral = {
    lat: 48.726255,
    lng: 21.255966
  };

  mapZoom = 16;

  // Súradnice pre marker
  markerPosition: google.maps.LatLngLiteral = {
    lat: 48.726187,
    lng: 21.254647
  };

  markerAddress = 'New York, NY';
  markerTitle = 'Môj marker';

  markerOptions: google.maps.MarkerOptions = {
    animation: google.maps.Animation.DROP,
    // icon: 'path_k_obrazku_ikonky.png'
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

  openGoogleMaps() {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.markerAddress)}`;
    window.open(url, '_blank');
  }
}
