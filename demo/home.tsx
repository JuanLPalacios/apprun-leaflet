import app, { Component, on } from 'apprun';
import { LatLngTuple } from 'leaflet';
import { Map } from '../src/componets/Map';
import { Marker } from '../src/componets/Marker';
import { TileLayer } from '../src/componets/TileLayer';

class Home extends Component {
  state = {};

  view = (state) => {
    const tag = state.type === 'tag' && state.tag ? `/${state.tag}` : '';
    const position:LatLngTuple = [51.505, -0.09];
    return (
      <div>
        <Map center={position} zoom={13} scrollWheelZoom={false} className="map-cont" style={{ height:'400px' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}/>
        </Map>
      </div>
    );
  };
}

console.log('hey');

export default new Home().start('my-app');