"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_google_charts_1 = require("react-google-charts");
const appConfig_1 = require("../../models/appConfig");
const react_dates_1 = require("react-dates");
const moment = require("moment");
const TRENDLINE_OPTIONS = {
    type: 'linear',
    color: '#000000',
    lineWidth: 3,
    opacity: 0.3,
    showR2: true,
    visibleInLegend: true,
};
const CHART_OPTIONS = {
    legend: {
        position: 'right',
        textStyle: {
            fontSize: 11,
        },
    },
    hAxis: { title: 'MODIS Aerosol Optical Depth at 550 nm' },
    vAxis: { title: `PM2.5 Mass Concentration \u03BC (gram) m\u207B\u00B3` },
    backgroundColor: '#d3d3d3',
    colors: ['#ff0000'],
    chartArea: {
        backgroundColor: '#ffffff',
        width: '50%',
    },
    trendlines: { 0: TRENDLINE_OPTIONS },
};
const DEFAULT_STATION_DAILY_DATA = [['TAU3 Mean', 'PM25 Mean']];
const INITIAL_STATE = { stationDailyData: DEFAULT_STATION_DAILY_DATA };
const TODAY = moment();
const MAX_DAY_RANGE = 60;
const STATION_DAILY_DATA_URI = `${appConfig_1.ApiUrl.baseUrl}${appConfig_1.ApiUrl.stationDailyData}`;
class SiteInfoWindow extends React.Component {
    constructor(props) {
        super(props);
        this.closeWindow = props => {
            this.setState(INITIAL_STATE);
            props.onClose();
        };
        this.openWindow = props => {
            this.setState(INITIAL_STATE);
            fetch(`${STATION_DAILY_DATA_URI}${props.station.ngelId}`)
                .then(res => {
                if (!res.ok) {
                    throw Error(`No daily data exists for given station: ${props.station.ngelId}`);
                }
                return res.json();
            })
                .then(data => {
                this.setStationDailyData(data);
            })
                .catch(error => console.log(error));
            this.setState({
                visible: props.visible,
                station: props.station,
            });
        };
        this.state = INITIAL_STATE;
    }
    componentDidUpdate(prevProps) {
        if (this.props.visible !== prevProps.visible || this.props.station !== prevProps.station) {
            this.props.visible ? this.openWindow(this.props) : this.closeWindow(this.props);
        }
    }
    setStationDailyData(data) {
        const stationDailyData = data.stationDailyData;
        const stationDailyDataArray = [DEFAULT_STATION_DAILY_DATA[0]];
        stationDailyData.forEach(sdd => {
            stationDailyDataArray.push([sdd.tau3Mean, sdd.pm25Mean]);
        });
        this.setState({ stationDailyData: stationDailyDataArray });
    }
    refreshScattergram() {
        const { startDate, endDate } = this.state;
        if (startDate && endDate) {
            const diff = endDate.diff(startDate, 'days');
            if (diff > MAX_DAY_RANGE) {
                this.setState({
                    exceedMsg: 'Date range exceeds permissible max range of 60 days.',
                });
            }
            else {
                this.setState({ exceedMsg: '' });
                fetch(`${STATION_DAILY_DATA_URI}${this.props.station
                    .ngelId}?startDate=${this.state.startDate.valueOf()}&endDate=${this.state.endDate.valueOf()}`)
                    .then(res => {
                    if (!res.ok) {
                        throw Error(`No daily data exists for given station: ${this.props.station.ngelId}`);
                    }
                    return res.json();
                })
                    .then(data => {
                    this.setStationDailyData(data);
                })
                    .catch(error => console.log(error));
            }
        }
    }
    render() {
        if (!this.props.visible) {
            return null;
        }
        const { ngelId, city, country, latitude, longitude } = this.props.station;
        let chart = React.createElement("span", null, "No Data Found");
        if (this.state.stationDailyData && this.state.stationDailyData.length > 1) {
            chart = (React.createElement(react_google_charts_1.Chart, { chartType: "ScatterChart", data: this.state.stationDailyData, options: CHART_OPTIONS, graph_id: "ScatterChart", width: "100%", height: "400px", legend_toggle: true }));
        }
        return (React.createElement("div", { className: "ngel-drawer ngel-drawer--open" },
            React.createElement("div", { className: "ngel-drawer__content ngel-drawer__content--open" },
                React.createElement("div", { className: "ngel-drawer__head" },
                    React.createElement("span", { className: "ngel-drawer__close ngel-icon ngel-icon--cancel ngel-icon--size-2x", onClick: this.props.onClose }),
                    React.createElement("h2", null, this.props.station.name)),
                React.createElement("div", { className: "ngel-drawer__body" },
                    React.createElement("label", { className: "ngel-label" },
                        "NgelId: ",
                        ngelId),
                    React.createElement("label", { className: "ngel-label" },
                        "City: ",
                        city),
                    React.createElement("label", { className: "ngel-label" },
                        "Country: ",
                        country),
                    React.createElement("label", { className: "ngel-label" },
                        "Latitude: ",
                        latitude),
                    React.createElement("label", { className: "ngel-label" },
                        "Longitude: ",
                        longitude),
                    React.createElement("form", { className: "ngel-form ngel-form--muted" },
                        React.createElement("fieldset", { className: "ngel-fieldset ngel-fieldset--hugged" },
                            React.createElement("legend", { className: "ngel-fieldset__legend" }, "Select Dates"),
                            React.createElement("div", { className: "ngel-grid ngel-grid--fluid" },
                                React.createElement("div", { className: "ngel-grid__row ngel-grid__row--padded" },
                                    React.createElement("div", { className: "ns-grid__col--lg-1" },
                                        React.createElement("label", { className: "ngel-label", htmlFor: "inline-start-date" }, "Select Date Range")),
                                    React.createElement("div", { className: "ngel-grid__col--lg-6" },
                                        React.createElement(react_dates_1.DateRangePicker, { startDate: this.state.startDate, endDate: this.state.endDate, 
                                            // tslint:disable-next-line jsx-no-lambda
                                            onDatesChange: ({ startDate, endDate }) => this.setState({ startDate, endDate }), focusedInput: this.state.focusedInput, 
                                            // tslint:disable-next-line jsx-no-lambda
                                            onFocusChange: focusedInput => this.setState({ focusedInput }), 
                                            // tslint:disable-next-line jsx-no-lambda
                                            isOutsideRange: day => react_dates_1.isInclusivelyAfterDay(day, TODAY) })),
                                    React.createElement("div", { className: "ngel-grid__col--lg-2 ngel-siteinfowindow__refresh" },
                                        React.createElement("button", { type: "button", className: "ngel-button", 
                                            // tslint:disable-next-line jsx-no-lambda
                                            onClick: () => this.refreshScattergram() }, "Refresh")),
                                    React.createElement("span", { className: "ngel-siteinfowindow__exceedMsg" }, this.state.exceedMsg))))),
                    React.createElement("div", { className: "ngel-siteinfowindow__chart" },
                        chart,
                        React.createElement("div", { className: "ngel-siteinfowindow__chart--overlay" },
                            "n = ",
                            this.state.stationDailyData.length - 1))))));
    }
}
SiteInfoWindow.defaultProps = {
    visible: false,
};
exports.SiteInfoWindow = SiteInfoWindow;
