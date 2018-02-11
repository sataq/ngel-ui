import * as React from 'react';
import Content from '../../components/Content';
import Map from '../../components/Map';
import { ApiUrl } from '../../models/appConfig';
import { DatePickerPanel } from '../../components/DatePickerPanel';

interface HomeProps {
  visible: boolean;
  activeStation: any;
  stations: any;
}

const STATIONS_URL = `${ApiUrl.baseUrl}${ApiUrl.stations}`;

export default class Home extends React.PureComponent<HomeProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      activeStation: null,
      stations: [],
    };
  }

  componentDidMount() {
    fetch(STATIONS_URL)
      .then(res => {
        if (!res.ok) {
          throw Error('Unable to find any stations.');
        }
        return res.json();
      })
      .then(data => this.setState({ stations: data.stations }))
      .catch(error => console.log(error));
  }

  handleStationClick = station => {
    this.setState({
      visible: true,
      activeStation: station,
    });
  };

  handleInfoWindowClose = () => {
    this.setState({
      visible: false,
      activeStation: null,
    });
  };

  handleRefreshClick = selectedDate => {
    if (selectedDate) {
      fetch(`${STATIONS_URL}?occurred=${selectedDate.valueOf()}`)
        .then(res => {
          if (!res.ok) {
            throw Error('No data exists for any stations.');
          }
          return res.json();
        })
        .then(data => this.setState({ stations: data.stations }))
        .catch(error => console.log(error));
    }
  };

  render() {
    return (
      <Content>
        <Map onStationClick={this.handleStationClick} onSiteInfoWindowClose={this.handleInfoWindowClose} {...this.state} />
        <DatePickerPanel onRefreshClick={this.handleRefreshClick} />
      </Content>
    );
  }
}
