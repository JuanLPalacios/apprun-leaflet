import app, { Component, on } from 'apprun';
import { LatLngTuple } from 'leaflet';
import { Circle } from '../src/componets/Circle';
import { Map } from '../src/componets/Map';
import { Marker } from '../src/componets/Marker';
import { Polygon } from '../src/componets/Polygon';
import { Popup } from '../src/componets/Popup';
import { TileLayer } from '../src/componets/TileLayer';
import { Tooltip } from '../src/componets/Tooltip';

class Home extends Component {
  state:{position?:LatLngTuple}  = {};

  view = (state) => {
    const {position}:{position:LatLngTuple} = state;
    const mapPosition:LatLngTuple = [51.505, -0.09];
    const circlePosition:LatLngTuple = [51.508, -0.11];
    const vertexPoligon:LatLngTuple[] = [[51.509, -0.08], [51.503, -0.06], [51.51, -0.047]]
    const initial:LatLngTuple = [51.513, -0.09]

    return (
      <div>
        <Map center={mapPosition} zoom={13} scrollWheelZoom={false} className="map-cont" style={{ height:'400px' }} eventHandlers={{ click: (e) => {this.setState({position: e.latlng})}  }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Popup position={position || initial}>
            {position ?
            <div>
              You clicked the map at {position.toString()}
            </div> 
            :<div>
              I am a standalone popup.
            </div>}
          </Popup>
          <Polygon latlngs={ vertexPoligon }>
            <Popup>
              <div>
              I am a polygon.
              </div>
            </Popup>
          </Polygon>
          <Circle position={circlePosition} color="red" fillColor="#f03" fillOpacity={0.5} radius={500}>
            <Popup>
              <div>
              I am a circle.
              </div>
            </Popup>
          </Circle>
          <Marker position={mapPosition}>
            <Popup>
              <b>Hello world!</b><br/>I am a popup.
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  };
}


export default new Home().start('my-app');