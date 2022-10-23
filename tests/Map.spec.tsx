import jsdom from 'jsdom-global';
import app from 'apprun';
import {Map} from '../src/componets/Map';

document = window.document;

const render = (vdom) => app.start(document.body, {}, () => vdom);

describe(Map, () => {
  it('renders', (done) => {
    render(<Map
      center={[51.505, -0.09]}
      zoom={13} scrollWheelZoom={false}
      className="map-cont"
      style={{ height:'400px', width:'400px' }}
    />);
    //const vdom = map['view'](state);
    setTimeout(() => {
      expect(document.body.innerHTML).toMatchSnapshot();
      done();
    }, 1000)
  })

  it('binds click events', (done) => {
    const handler = jest.fn(() => null)
    render(<Map
      style={{ height:'400px', width:'400px' }}
      eventHandlers={{ click: handler }}
    />);
    //const vdom = map['view'](state);
    setTimeout(() => {
      const tile:any = document.querySelector('.leaflet-tile');
      tile.fireEvent("onclick")
      tile.click();
      setTimeout(() => {
        expect(handler).toHaveBeenCalled();
        done();
      }, 1000)
    }, 1000)
  })
});