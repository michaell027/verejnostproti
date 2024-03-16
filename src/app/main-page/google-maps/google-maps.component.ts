import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from '../../../environments/environment';
import * as process from 'process';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
})
export class GoogleMapsComponent implements OnInit {
  map?: google.maps.Map;
  marker?: google.maps.Marker;

  mapHeight = 400;
  mapWidth = 400;

  constructor() {}

  ngOnInit() {
    if (!process.env['GOOGLE_MAPS_API_KEY']) {
      console.error('GOOGLE_MAPS_API_KEY is not set');
      return;
    }
    const loader = new Loader({
      apiKey: process.env['GOOGLE_MAPS_API_KEY'],
      version: 'weekly',
    });

    loader.load().then(() => {
      const mapCenter: google.maps.LatLngLiteral = {
        lat: 48.726255,
        lng: 21.255966,
      };

      const markerPosition: google.maps.LatLngLiteral = {
        lat: 48.726187,
        lng: 21.254647,
      };

      const markerOptions: google.maps.MarkerOptions = {
        animation: google.maps.Animation.DROP,
      };

      const mapOptions: google.maps.MapOptions = {
        zoomControl: true,
        scrollwheel: true,
        disableDoubleClickZoom: true,
        draggable: true,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }],
          },
        ],
      };

      this.map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          ...mapOptions,
          center: mapCenter,
          zoom: 16,
        },
      );

      this.marker = new google.maps.Marker({
        position: markerPosition,
        map: this.map,
        title: 'Verejnosť proti',
        // Spread options directly
        animation: google.maps.Animation.DROP,
      });

      this.marker.addListener('click', () => {
        this.openGoogleMaps();
      });
    });

    this.updateMapDimensions();
    window.addEventListener('resize', this.updateMapDimensions.bind(this));
  }

  updateMapDimensions() {
    const parentDiv = document.getElementById('map-holder-parent');
    if (parentDiv) {
      const parentWidth = parentDiv.getBoundingClientRect().width;
      this.mapWidth = parentWidth * 0.9;
      this.mapHeight = parentWidth * 0.85;
    } else {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      this.mapHeight = windowHeight * 0.7;
      this.mapWidth = windowWidth * 0.8;
    }
  }

  openGoogleMaps() {
    if (this.marker) {
      const markerPosition = this.marker.getPosition();
      if (markerPosition) {
        const url = `https://www.google.com/maps/search/?api=1&query=${markerPosition.lat()},${markerPosition.lng()}`;
        window.open(url, '_blank');
      }
    }
  }
}
