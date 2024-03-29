# apprun-leaflet

![screenshot](./screenshot.png)

> simple Apprun JSX Wraper for leaflet



## Getting started

 - install the package
   ```
   npm install --save apprun-leaflet
   ```
 - add Leaflet CSS file in the head section of your page:
   ```
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
   integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
   crossorigin=""/>
   ```
 - add a map component to your jsx:
   ```
    <Map center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="map-cont" style={{ height:'400px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}/>
    </Map>
   ```

## Built With

- TypeScript
- Apprun
- Leaflet


## Author

👤 **Juan Luis Palacios**

- GitHub: [@JuanLPalacios](https://github.com/JuanLPalacios)
- Twitter: [@JuanLuisPalac20](https://twitter.com/JuanLuisPalac20)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/juan-luis-palacios-p%C3%A9rez-95b39a228/)

👤 **Dangelo Arrivillaga**

- GitHub: [@Dangelo-JAN](https://github.com/Dangelo-JAN)
- LinkedIn: [Soluciones Empresriales Dangelo Arrivillaga](https://www.linkedin.com/in/soluciones-empresariales-dangelo-arrivillaga-2a144718a/)

## License

This project is [MIT](./LICENSE) licensed.


