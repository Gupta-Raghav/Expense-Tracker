import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import { Infoheadline } from './Infoheadline';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <Infoheadline/>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
