"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Content_1 = require("../../components/Content");
const Map_1 = require("../../components/Map");
const appConfig_1 = require("../../models/appConfig");
const DatePickerPanel_1 = require("../../components/DatePickerPanel");
const STATIONS_URL = `${appConfig_1.ApiUrl.baseUrl}${appConfig_1.ApiUrl.stations}`;
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleStationClick = station => {
            this.setState({
                visible: true,
                activeStation: station,
            });
        };
        this.handleInfoWindowClose = () => {
            this.setState({
                visible: false,
                activeStation: null,
            });
        };
        this.handleRefreshClick = selectedDate => {
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
    render() {
        return (React.createElement(Content_1.default, null,
            React.createElement(Map_1.default, Object.assign({ onStationClick: this.handleStationClick, onSiteInfoWindowClose: this.handleInfoWindowClose }, this.state)),
            React.createElement(DatePickerPanel_1.DatePickerPanel, { onRefreshClick: this.handleRefreshClick })));
    }
}
exports.default = Home;
