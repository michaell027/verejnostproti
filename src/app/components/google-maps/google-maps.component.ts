import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Loader } from '@googlemaps/js-api-loader';
import * as process from 'process';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
})
export class GoogleMapsComponent implements OnInit {
  map?: google.maps.Map;
  marker?: google.maps.marker.AdvancedMarkerElement;

  mapHeight = 400;
  mapWidth = 400;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2,
  ) {}
  private loadScript(url: string) {
    return new Promise((resolve, reject) => {
      const script = this.renderer2.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.text = ``;
      script.async = true;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      this.renderer2.appendChild(this.document.body, script);
    });
  }
  ngOnInit() {
    if (!process.env['GOOGLE_MAPS_API_KEY']) {
      return;
    }

    const url = `https://maps.googleapis.com/maps/api/js?key=${process.env['GOOGLE_MAPS_API_KEY']}`;
    this.loadScript(url).then(() => this.initMap());

    this.updateMapDimensions();
    window.addEventListener('resize', this.updateMapDimensions.bind(this));
  }

  async initMap(): Promise<void> {
    const mapCenter: google.maps.LatLngLiteral = {
      lat: 48.726255,
      lng: 21.255966,
    };

    const markerPosition: google.maps.LatLngLiteral = {
      lat: 48.726187,
      lng: 21.254647,
    };
    // The map, centered at the specified location
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        mapId: process.env['GOOGLE_MAPS_MAP_ID'],
        center: mapCenter,
        zoom: 16,
        zoomControl: true,
        scrollwheel: true,
        disableDoubleClickZoom: true,
      },
    );

    await google.maps.importLibrary('marker').then(() => {
      this.marker = new google.maps.marker.AdvancedMarkerElement({
        map: this.map,
        position: markerPosition,
        title: 'Verejnosť proti',
      });

      this.marker!.addListener('click', () => {
        this.openGoogleMaps();
      });
    });
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
      const markerPosition = this.marker.position;
      if (markerPosition) {
        const url = `https://www.google.com/maps/search/?api=1&query=${markerPosition.lat},${markerPosition.lng}`;
        window.open(url, '_blank');
      }
    }
  }
}
