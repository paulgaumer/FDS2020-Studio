import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticMap, Marker } from 'react-map-gl';
import client from 'part:@sanity/base/client';
import config from 'config:mapbox-input';
import { withDocument } from 'part:@sanity/form-builder';
import Button from 'part:@sanity/components/buttons/default';
import Dialog from 'part:@sanity/components/dialogs/default';
import Fieldset from 'part:@sanity/components/fieldsets/default';
import {
  PatchEvent,
  set,
  setIfMissing,
  unset,
} from 'part:@sanity/form-builder/patch-event';
import styles from '../styles/GeopointInput.css';
import GeopointSelect from './GeopointSelect';
import Pin from './Pin';

// const getLocale = (context) => {
//   const intl = context.intl || {};
//   return (
//     intl.locale ||
//     (typeof window !== 'undefined' && window.navigator.language) ||
//     'fr'
//   );
// };

const GeopointInput = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVillage, setCurrentVillage] = useState(null);
  const query = "*[_type == 'village' && _id == $id]";

  useEffect(() => {
    console.log(props.document);
    if (!props.document.map && props.document.village) {
      const village = props.document.village;
      // Fetch initial value
      client
        .fetch(query, {
          id: village._ref,
        })
        .then((result) => {
          console.log(result);
          setCurrentVillage(result);
        });
    }
  }, [currentVillage]);

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleChange = (lngLat, address) => {
    console.log(address);
    const { type, onChange } = props;
    onChange(
      PatchEvent.from([
        setIfMissing({
          _type: type.name,
        }),
        set(lngLat[1], ['lat']),
        set(lngLat[0], ['lng']),
        set(address, ['address']),
      ])
    );
  };

  const handleClear = () => {
    const { onChange } = props;
    onChange(PatchEvent.from(unset()));
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const { value, type, markers } = props;

  if (!config || !config.apiKey) {
    return (
      <div>
        <p>
          The{' '}
          <a href="https://sanity.io/docs/schema-types/geopoint-type">
            Geopoint type
          </a>{' '}
          needs a Mapbox API token.
        </p>
        <p>
          Please enter the API token with access to these services in
          <code style={{ whitespace: 'nowrap' }}>
            `&lt;project-root&gt;/config/mapbox-input.json`
          </code>
        </p>
      </div>
    );
  }

  return (
    <Fieldset
      legend={type.title}
      description={type.description}
      className={styles.root}
      markers={markers}
    >
      {value && (
        <div>
          <div className={styles.addressDisplay}>
            <p>ADRESSE</p>
            <input
              id="myAddress"
              value={value.address}
              style={{ width: '100%', marginTop: '.5em' }}
              onChange={(e) => {
                const { type, onChange } = props;
                onChange(
                  PatchEvent.from([
                    setIfMissing({
                      _type: type.name,
                    }),
                    set(e.currentTarget.value, ['address']),
                  ])
                );
              }}
            />
          </div>
          <StaticMap
            width="100%"
            height={300}
            latitude={value.lat}
            longitude={value.lng}
            zoom={13}
            mapboxApiAccessToken={config.apiKey}
          >
            <Marker latitude={value.lat} longitude={value.lng}>
              <Pin />
            </Marker>
          </StaticMap>
        </div>
      )}

      <div className={styles.functions}>
        <Button onClick={handleToggleModal}>
          {value ? 'Modifier' : 'Rentrer une adresse'}
        </Button>

        {value && (
          <Button type="button" onClick={handleClear}>
            Supprimer
          </Button>
        )}
      </div>

      {modalOpen && (
        <Dialog
          title="Place on map"
          onClose={handleCloseModal}
          onCloseClick={handleCloseModal}
          onOpen={handleOpenModal}
          message="Select location by dragging the marker or search for a place"
          isOpen={modalOpen}
        >
          <div className={styles.dialogInner}>
            <GeopointSelect
              value={value}
              apiKey={config.apiKey}
              onChange={handleChange}
              defaultLocation={config.defaultLocation}
              defaultZoom={config.defaultZoom}
              locale="fr"
              // locale={getLocale(this.context)}
            />
          </div>
        </Dialog>
      )}
    </Fieldset>
  );
};

export default withDocument(GeopointInput);

GeopointInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
    })
  ),
  value: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
    address: PropTypes.string,
  }),
  type: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};

GeopointInput.defaultProps = {
  markers: [],
};

GeopointInput.contextTypes = {
  intl: PropTypes.shape({
    locale: PropTypes.string,
  }),
};
