import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import LoginPage from './login'

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary/>
    <ExpenseListFilters />
    <ExpenseList />
    <LoginPage />
  </div>
);

export default ExpenseDashboardPage;
