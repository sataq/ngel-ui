/* global google */
import * as React from 'react';
import { compose, withProps, withHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { ApiUrl } from '../../models/appConfig';
import { SiteInfoWindow } from '../SiteInfoWindow';

const DEFAULT_COLOR_BLACK = 'hsl(0, 0%, 0%)';
const DEFAULT_COLOR_WHITE = 'hsl(0, 0%, 100%)';
const DEFAULT_SCALE = 5;
const DEFAULT_FILL_OPACITY = 0;
const DEFAULT_STROKE_WEIGHT = 0.5;

export default compose(
  withProps({
    googleMapURL: ApiUrl.googleMapUrl,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    getScale: () => station => {
      if (station.latestPM25Mean === -1.0) {
        return DEFAULT_SCALE;
      }
      return station.latestPM25Mean / 5;
    },
    getFillOpacity: () => station => {
      if (station.latestPM25Mean === -1.0) {
        return DEFAULT_FILL_OPACITY;
      }
      if (station.latestPM25Mean >= 100) {
        return 1;
      }
      return station.latestPM25Mean / 100;
    },
    getColor: () => station => {
      if (station.latestPM25Mean !== -1) {
        const pm25Mean = station.latestPM25Mean;
        if (pm25Mean >= 0 && pm25Mean <= 12) {
          return 'rgb(99, 230, 17)';
        }
        if (pm25Mean >= 12.1 && pm25Mean <= 35.4) {
          return 'rgb(254, 250, 41)';
        }
        if (pm25Mean >= 35.5 && pm25Mean <= 55.4) {
          return 'rgb(236, 111, 37)';
        }
        if (pm25Mean >= 55.5 && pm25Mean <= 150.4) {
          return 'rgb(230, 46, 37)';
        }
        if (pm25Mean >= 150.5 && pm25Mean <= 250.4) {
          return 'rgb(130, 28, 61)';
        }
        if (pm25Mean >= 250.5) {
          return 'rgb(103, 21, 27)';
        }
      }
      return DEFAULT_COLOR_BLACK;
    },
    getStrokeColor: () => station => {
      if (station.latestPM25Mean === -1.0) {
        return DEFAULT_COLOR_BLACK;
      }
      return DEFAULT_COLOR_WHITE;
    },
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const markers = props.stations.map(station => (
    <Marker
      // tslint:disable-next-line jsx-no-lambda
      onClick={() => props.onStationClick(station)}
      key={station.ngelId}
      position={{ lat: station.latitude, lng: station.longitude }}
      icon={{
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: props.getColor(station),
        fillOpacity: props.getFillOpacity(station),
        scale: props.getScale(station),
        strokeColor: props.getStrokeColor(station),
        strokeWeight: DEFAULT_STROKE_WEIGHT,
      }}
    />
  ));

  return (
    <GoogleMap defaultZoom={4} defaultCenter={{ lat: 18.41923, lng: -66.15042 }}>
      {markers}
      <SiteInfoWindow visible={props.visible} station={props.activeStation} onClose={props.onSiteInfoWindowClose} />
    </GoogleMap>
  );
});
