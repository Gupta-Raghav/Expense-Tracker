import React from 'react'
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import {Link} from 'react-router-dom';
import inrformat from 'inrformat'

const numberWithCommas = (x) => {
    return x.toString().split('.')[0].length > 3 ? x.toString().substring(0,x.toString().split('.')[0].length-3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + x.toString().substring(x.toString().split('.')[0].length-3): x.toString();
  }

export const ExpensesSummary =({expenseCount,expensesTotal})=> {
    const expenseword = expenseCount === 1? 'expense': 'expenses';
    const formattedExpensesTotal = numberWithCommas(expensesTotal)
    return(
        <div className="page-header">
            <div className="content-container">
    <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseword} totalling <span>{"₹"}{formattedExpensesTotal}</span> </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
             </div>
        </div>
    );
}

const mapStateToProps =(state)=> {
    const visibleExpenses = selectExpenses(state.expenses , state.filters);
    return{
        expenseCount : visibleExpenses.length,
        expensesTotal : selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);