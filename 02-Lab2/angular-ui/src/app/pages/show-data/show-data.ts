import { AfterViewInit, Component, model } from '@angular/core';
import * as maplibregl from 'maplibre-gl';

@Component({
  selector: 'app-show-data',
  imports: [],
  template: `<div id="map"></div>`,
  styles: [`
    #map {
      width: 100%;
      height: 500px;
      background-color: #eee;
    }
  `]
})
export class ShowData implements AfterViewInit {

  textModelInShowData = model<string>('');

  ngAfterViewInit(): void {
    const map = new maplibregl.Map({
      container: 'map',

      style: {
        version: 8,

        sources: {
          osm: {
            type: 'raster',
            tiles: [
              'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            ],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors'
          }
        },

        layers: [
          {
            id: 'osm',
            type: 'raster',
            source: 'osm'
          }
        ]
      },

      center: [100.5, 13.75],
      zoom: 6
    });

    map.on('load', () => {
      console.log('MAP LOAD OK');
    });

    map.on('error', (e: any) => {
      console.error('MAP ERROR', e);
    });
  }
}