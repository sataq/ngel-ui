import * as React from 'react';

const markers = [
  {
    id: 1,
    name: 'SOMA',
    position: { lat: 37.778519, lng: -122.40564 },
  },
  {
    id: 2,
    name: 'Dolores Park',
    position: { lat: 37.759703, lng: -122.428093 },
  },
];

// const markerItems = markers.map(marker => <Marker key={marker.id} name={marker.name} position={marker.position} />);

export class Markers extends React.Component {
  render() {
    // return <div>{markerItems}</div>;
    return null;
  }
}
