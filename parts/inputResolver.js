import LimitedArray from '../components/LimitedArray';
import MapboxInputAddress from '../plugins/mapbox-input-address/src/GeopointInput';

export default function resolveInput(type) {
  const { name, options } = type;

  if (
    name === 'array' &&
    options &&
    (options.hasOwnProperty('limit') || options.hasOwnProperty('typeLimits'))
  ) {
    return LimitedArray;
  } else if (name === 'addressGps') {
    return MapboxInputAddress;
  }
}
