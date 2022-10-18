import app, { Component, on } from 'apprun';
import { LatLngTuple } from 'leaflet';
import { Circle } from '../src/componets/Circle';
import { Map } from '../src/componets/Map';
import { Marker } from '../src/componets/Marker';
import { Markdown } from './components/Markdown';
import { Polygon } from '../src/componets/Polygon';
import { Popup } from '../src/componets/Popup';
import { TileLayer } from '../src/componets/TileLayer';

class Home extends Component {
  state:{position?:LatLngTuple}  = {};

  view = (state) => {
    const {position}:{position:LatLngTuple} = state;
    const mapPosition:LatLngTuple = [51.505, -0.09];
    const circlePosition:LatLngTuple = [51.508, -0.11];
    const vertexPoligon:LatLngTuple[] = [[51.509, -0.08], [51.503, -0.06], [51.51, -0.047]]
    const initial:LatLngTuple = [51.513, -0.09]

    return (
      <div className="wrapper">
        <Markdown>
          {`
            # AppRun Leaflet
          `}
          <p className="acknowledgment">
            Acknowledgment to: <a className="leaflet" href="https://leafletjs.com/examples/quick-start/">LeafLet</a>. This article is based on the same steps to adapted to AppRun-Leaflet
          </p>
          {`
            ## Quick Start Guide

            This step-by-step guide will quickly get you started on Apprun-leaflet 
            basics, including setting up a Apprun-Leaflet map, 
            working with markers, polylines and popups, 
            and dealing with events.
          `}
        </Markdown>
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

        <Markdown>
          {`
            [See this example stand-alone](#)

            ### Preparing your page

            Before writing any code for the map, you need to do the following preparation steps on your page:
            
            - install the package
              ~~~
                npm install --save apprun-leaflet
              ~~~
            
            - add Leaflet CSS file in the head section of your page:
              ~~~
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
                integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
                crossorigin=""/>
              ~~~

            - Put a Map component with a certain className where you want your map to be:
              ~~~
                <Map className="map" >

                </Map>
              ~~~

            - Make sure the map container has a defined height, for example by setting it in CSS:
              ~~~
                .map {
                  width: 50vw;
                  height: 30vh;
                }
              ~~~
            
            Now you’re ready to initialize the map and do some stuff with it.

            ### Setting up the map
          `}
          <Map center={mapPosition} zoom={13} scrollWheelZoom={false} className="map-cont" style={{ height:'400px' }} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </Map>
          {`
            [See this example stand-alone](#)

            Let’s create a map of the center of London with pretty OpenStreetMap tiles. From here on, we’ll be working in TSX. First we’ll initialize the map's state and set its view to our chosen geographical coordinates and a zoom level, also we goin to set the eventHandlers:

            By default (as we didn’t pass any options when creating the map instance), all mouse and touch interactions on the map are enabled, and it has zoom and attribution controls.
              ~~~
                state:{position?:LatLngTuple}  = {};

                view = (state) => {
                  const mapPosition:LatLngTuple = [51.505, -0.09];

                  <Map className="map" 
                    center={mapPosition}
                    zoom={13} >
                  </Map>
                }
              ~~~

            Next, we’ll add a tile layer to add to our map, in this case it’s a OpenStreetMap tile layer. Adding a TileLayer component usually involves setting the URL template for the tile images, the attribution text, and the maximum zoom level of the layer. OpenStreetMap tiles are fine for programming your AppRun-Leaflet map, but read the Tile Usage Policy of OpenStreetMap if you’re going to use the tiles in production.

              ~~~
                <Map className="map" 
                  center={mapPosition} 
                  zoom={13}>
                  <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </Map>
              ~~~

            That’s it! You have a working AppRun-Leaflet map now.

            It’s worth noting that AppRun-Leaflet is provider-agnostic, meaning that it doesn’t enforce a particular choice of providers for tiles. Also, AppRun-Leaflet doesn’t even contain a single provider-specific line of code, so you’re free to use other providers if you need to.
          `}

          <p>
            Whenever using anything based on OpenStreetMap, an attribution is obligatory as per the 
            <a className="anchor-p">copyright notice</a>. Most other tile providers (such as
            <a className="anchor-p">Mapbox</a>,
            <a className="anchor-p">Stamen</a> or
            <a className="anchor-p">Thunderforest</a>) require an attribution as well. Make sure to give credit where credit is due.
          </p>
          <h3>Markers, circles, and polygons</h3>

          <Map center={mapPosition} zoom={13} scrollWheelZoom={false} className="map-cont" style={{ height:'400px' }} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polygon latlngs={ vertexPoligon } />
            <Circle position={circlePosition} color="red" fillColor="#f03" fillOpacity={0.5} radius={500} />
            <Marker position={mapPosition} />
          </Map>
          {`
            [See this example stand-alone](#)

            Besides tile layers, you can easily add other things to your map, including markers, polylines, polygons, circles, and popups. Let’s add a marker:
              ~~~
                const mapPosition:LatLngTuple = [51.505, -0.09];

                <Map className="map" 
                  .
                  .
                  .
                  <Marker position={mapPosition} />
                </Map>
              ~~~

            Adding a circle is the same (except for specifying the radius in meters as a second argument), but lets you control how it looks by passing options as the last argument when creating the component:
              ~~~
                .
                .
                .
                const circlePosition:LatLngTuple = [51.508, -0.11];

                <Map className="map" 
                  .
                  .
                  .
                  <Circle position={circlePosition} color="red" fillColor="#f03" fillOpacity={0.5} radius={500} />
                </Map>
              ~~~

            Adding a polygon is as easy:
              ~~~
                .
                .
                .
                const vertexPoligon:LatLngTuple[] = [[51.509, -0.08], [51.503, -0.06], [51.51, -0.047]]

                <Map className="map" 
                  .
                  .
                  .
                  <Polygon latlngs={ vertexPoligon } />
                </Map>
              ~~~

            ### Working with popups
          `}
          <Map center={mapPosition} zoom={13} scrollWheelZoom={false} className="map-cont" style={{ height:'400px' }} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
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
          {`
            [See this example stand-alone](#)

            Popups are usually used when you want to attach some information to a particular component on a map. AppRun-Leaflet has a very handy shortcut for this:
              ~~~
                <Polygon latlngs={ vertexPoligon }>
                  <Popup>
                    <div>
                    I am a polygon.
                    </div>
                  </Popup>
                </Polygon>
              ~~~

            or

              ~~~
                <Marker position={ mapPosition }>
                  <Popup>
                    <b>Hello world!</b><br/>I am a popup.
                  </Popup>
                </Marker>
              ~~~

            Try clicking on our objects. The bindPopup method attaches a popup with the specified HTML content to your marker so the popup appears when you click on the object, and the openPopup method (for markers only) immediately opens the attached popup.

            You can also use popups as layers (when you need something more than attaching a popup to an object):

              ~~~
                <Marker position={ mapPosition }>
                  <Popup>
                    {mapPosition}
                    <br />
                    <b>Hello world!</b><br/>I am a popup.
                  </Popup>
                </Marker>
              ~~~

            Popups in the map component start open by default

            ### Dealing with events

            When you interact with AppRun-leaflet you'll need set the initial state for the map.
              ~~~
              state:{position?:LatLngTuple}  = {};                
              ~~~

            Every time something happens in AppRun-leaflet, e.g. user clicks on a marker or map zoom changes, the corresponding object sends an event which you can subscribe to with a function in the preperty evenHandlers. It allows you to react to user interaction:
              ~~~
                <Map
                  .
                  .
                  .
                  eventHandlers={{ click: (e) => {this.setState({position: e.latlng})}  }}
                </Map>
              ~~~
          `}
        </Markdown>

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
