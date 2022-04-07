import React from 'react';
import { connect, useSelector } from 'react-redux';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import { Infoheadline } from './Infoheadline';
import Piec from './Piec';

export class ExpenseDashboardPage extends React.Component{
  render(){
  return(
  <div>
    <ExpensesSummary />
    <Infoheadline/>
    <ExpenseListFilters />
    {this.props.filters.viewBy !=='list-view'? <ExpenseList /> :<Piec/> }
  </div>
  )}
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect  (mapStateToProps)(ExpenseDashboardPage);
