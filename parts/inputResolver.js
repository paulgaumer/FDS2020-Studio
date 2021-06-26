import MapboxInputAddress from '../plugins/mapbox-input-address/src/GeopointInput';

export default function resolveInput(type) {
  const { name } = type;

  if (name === 'addressGps') {
    return MapboxInputAddress;
  }
}
