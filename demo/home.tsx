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
        <h2>Leaflet Quick Start Guide</h2>
        <p>This step-by-step guide will quickly get you started on Leaflet 
          basics, including setting up a Leaflet map, 
          working with markers, polylines and popups, 
          and dealing with events.
        </p>
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

        <a href="#">See this example stand-alone</a>
        <h3>Preparing your page</h3>
        <p>Before writing any code for the map, you need to do the following preparation steps on your page:</p>
        <ul>
          <li>
            <p>Include Leaflet CSS file in the head section of your document:</p>
            <div></div>
          </li>
          <li>
            <p>Include Leaflet JavaScript file after Leaflet’s CSS:</p>
            <div></div>
          </li>
          <li>
            <p>Put a div element with a certain id where you want your map to be:</p>
            <div></div>
          </li>
          <li>
            <p>Make sure the map container has a defined height, for example by setting it in CSS:</p>
            <div></div>
          </li>
        </ul>
        <p>Now you’re ready to initialize the map and do some stuff with it.</p>
        <h3></h3>
        <Map center={mapPosition} zoom={13} scrollWheelZoom={false} className="map-cont" style={{ height:'400px' }} eventHandlers={{ click: (e) => {this.setState({position: e.latlng})}  }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
        <a href="#">See this example stand-alone</a>
        <p>Let’s create a map of the center of London with pretty OpenStreetMap tiles. From here on, we’ll be working in JS. First we’ll initialize the map and set its view to our chosen geographical coordinates and a zoom level:</p>
        <div>

        </div>
        <p>By default (as we didn’t pass any options when creating the map instance), all mouse and touch interactions on the map are enabled, and it has zoom and attribution controls.</p>
        <p>Note that the setView call also returns the map object — most Leaflet methods act like this when they don’t return an explicit value, which allows convenient jQuery-like method chaining.</p>
        <p>Next, we’ll add a tile layer to add to our map, in this case it’s a OpenStreetMap tile layer. Creating a tile layer usually involves setting the URL template for the tile images, the attribution text, and the maximum zoom level of the layer. OpenStreetMap tiles are fine for programming your Leaflet map, but read the Tile Usage Policy of OpenStreetMap if you’re going to use the tiles in production.</p>
        <div>

        </div>
        <p>Make sure all the code is called after the div and leaflet.js inclusion. That’s it! You have a working Leaflet map now.</p>
        <p>It’s worth noting that Leaflet is provider-agnostic, meaning that it doesn’t enforce a particular choice of providers for tiles. Also, Leaflet doesn’t even contain a single provider-specific line of code, so you’re free to use other providers if you need to.</p>
        <p>Whenever using anything based on OpenStreetMap, an attribution is obligatory as per the copyright notice. Most other tile providers (such as Mapbox, Stamen or Thunderforest) require an attribution as well. Make sure to give credit where credit is due.</p>
        <h3>Markers, circles, and polygons</h3>
        <Map center={mapPosition} zoom={13} scrollWheelZoom={false} className="map-cont" style={{ height:'400px' }} eventHandlers={{ click: (e) => {this.setState({position: e.latlng})}  }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polygon latlngs={ vertexPoligon } />
          <Circle position={circlePosition} color="red" fillColor="#f03" fillOpacity={0.5} radius={500} />
          <Marker position={mapPosition} />
        </Map>
        <a href="#">See this example stand-alone</a>
        <p>Besides tile layers, you can easily add other things to your map, including markers, polylines, polygons, circles, and popups. Let’s add a marker:</p>
        <pre>
          <code>

          </code>
        </pre>
        <p>Adding a circle is the same (except for specifying the radius in meters as a second argument), but lets you control how it looks by passing options as the last argument when creating the object:</p>
        <pre>
          <code>

          </code>
        </pre>
        <p>Adding a polygon is as easy:</p>
        <pre>
          <code>

          </code>
        </pre>
        <h3>Working with popups</h3>
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
        <a href="#">See this example stand-alone</a>
        <p>Popups are usually used when you want to attach some information to a particular object on a map. Leaflet has a very handy shortcut for this:</p>
        <pre>
          <code>

          </code>
        </pre>
        <p>Try clicking on our objects. The bindPopup method attaches a popup with the specified HTML content to your marker so the popup appears when you click on the object, and the openPopup method (for markers only) immediately opens the attached popup.
          <br/> You can also use popups as layers (when you need something more than attaching a popup to an object):
        </p>
        <pre>
          <code>

          </code>
        </pre>
        <p>Here we use openOn instead of addTo because it handles automatic closing of a previously opened popup when opening a new one which is good for usability.</p>
        <h3>Dealing with events</h3>
        <p>Every time something happens in Leaflet, e.g. user clicks on a marker or map zoom changes, the corresponding object sends an event which you can subscribe to with a function. It allows you to react to user interaction:</p>
        <pre>
          <code>

          </code>
        </pre>
        <p>Each object has its own set of events — see documentation for details. The first argument of the listener function is an event object — it contains useful information about the event that happened. For example, map click event object (e in the example above) has latlng property which is a location at which the click occurred.
          <br/>Let’s improve our example by using a popup instead of an alert:
        </p>
        <pre>
          <code>

          </code>
        </pre>
        <p>Try clicking on the map and you will see the coordinates in a popup. View the full example →</p>
      </div>
    );
  };
}


export default new Home().start('my-app');