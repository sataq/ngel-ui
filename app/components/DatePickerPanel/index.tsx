import * as React from 'react';
import { SingleDatePicker, isInclusivelyAfterDay } from 'react-dates';
import moment = require('moment');

const TODAY = moment();

interface DatePickerProps {
  onRefreshClick: any;
}

export class DatePickerPanel extends React.Component<DatePickerProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
    };
  }

  render() {
    return (
      <div className="ngel-datepickerpanel">
        <SingleDatePicker
          date={this.state.selectedDate}
          // tslint:disable-next-line jsx-no-lambda
          onDateChange={selectedDate => this.setState({ selectedDate })}
          focused={this.state.focused}
          // tslint:disable-next-line jsx-no-lambda
          onFocusChange={({ focused }) => this.setState({ focused })}
          placeholder="Specify Date..."
          // tslint:disable-next-line jsx-no-lambda
          isOutsideRange={day => isInclusivelyAfterDay(day, TODAY)}
        />
        <button
          type="button"
          className="ngel-button"
          // tslint:disable-next-line jsx-no-lambda
          onClick={() => this.props.onRefreshClick(this.state.selectedDate)}
        >
          Refresh
        </button>
      </div>
    );
  }
}
