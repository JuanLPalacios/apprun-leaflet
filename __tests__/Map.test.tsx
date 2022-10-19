import app, { Component, on } from 'apprun';
import { Map } from '../src/componets/Map';
import { TileLayer } from '../src/componets/TileLayer'
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

test('loads and displays greeting', async () => {
  const mapPosition:LatLngTuple = [51.505, -0.09];
  // ARRANGE
  render(<Map center={mapPosition} zoom={13} scrollWheelZoom={false} className="map-cont" style={{ height:'400px' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>)

  // ACT  
})