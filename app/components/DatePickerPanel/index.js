"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dates_1 = require("react-dates");
const moment = require("moment");
const TODAY = moment();
class DatePickerPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null,
        };
    }
    render() {
        return (React.createElement("div", { className: "ngel-datepickerpanel" },
            React.createElement(react_dates_1.SingleDatePicker, { date: this.state.selectedDate, 
                // tslint:disable-next-line jsx-no-lambda
                onDateChange: selectedDate => this.setState({ selectedDate }), focused: this.state.focused, 
                // tslint:disable-next-line jsx-no-lambda
                onFocusChange: ({ focused }) => this.setState({ focused }), placeholder: "Specify Date...", 
                // tslint:disable-next-line jsx-no-lambda
                isOutsideRange: day => react_dates_1.isInclusivelyAfterDay(day, TODAY) }),
            React.createElement("button", { type: "button", className: "ngel-button", 
                // tslint:disable-next-line jsx-no-lambda
                onClick: () => this.props.onRefreshClick(this.state.selectedDate) }, "Refresh")));
    }
}
exports.DatePickerPanel = DatePickerPanel;
