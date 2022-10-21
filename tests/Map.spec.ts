import {Map} from '../src/componets/Map';

describe(Map, () => {
  let map = new Map();
  it('renders', () => {
    const state = {
    }
    const vdom = map['view'](state);
    expect(JSON.stringify(vdom, undefined, 2)).toMatchSnapshot();
  })
});