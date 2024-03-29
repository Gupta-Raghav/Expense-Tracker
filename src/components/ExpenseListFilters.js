import React from 'react';
import { connect } from 'react-redux';
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-dates';
import { BsArrowRight } from "react-icons/bs";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, setViewListView,setViewAnalytics } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  render() {
    return (
      <div>
        <div className="input-group">
          <div className="input-group__Search">
          <label>Search-By-Text</label>
          <input
          type="text"
          className="text-input"
          placeholder="Search expenses"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
          </div>
          <div className="input-group__item">
          <label>Sort-By</label>
           <select
           className = "select"
           placeholder='Sort-By'
           value={this.props.filters.sortBy}
           onChange={(e) => {
             if (e.target.value === 'date') {
                this.props.dispatch(sortByDate());
              } else if (e.target.value === 'amount') {
               this.props.dispatch(sortByAmount());
             }
           }}
         >
          <option value="date">Date(Latest-First)</option>
          <option value="amount">Amount(Descending)</option>
        </select>
          </div>
          <div className="input-group__item">
          <label>View-By</label>
           <select
           className = "select"
           value={this.props.filters.viewBy}
           onChange={(e) => {
            if (e.target.value === 'list-view') {
              this.props.dispatch(setViewListView());
            } else if (e.target.value === 'analytics') {
             this.props.dispatch(setViewAnalytics());
           }
           }}
         >
          <option value="list-view">list-view</option>
          <option value="analytics">Analytics</option>
        </select>
          </div>
          <div className="input-group__Calendar">
          <label>Start-Data <BsArrowRight/> End-Date</label>
         <DateRangePicker style ={{width:'100%'}}
          startDatePlaceholder = "DD/MM/YYYY"
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          endDatePlaceholder = "DD/MM/YYYY"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
          </div>
         
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
