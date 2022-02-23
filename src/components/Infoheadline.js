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

export const Infoheadline =()=> {
    return(
        <div className="info-header ">
            <div className="content-container">
    <h3 className="info-header__title">Currently you are seeing the expenses for <b>Feburary</b></h3>
             </div>
        </div>
    );
}


export default (Infoheadline);