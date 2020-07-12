import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

numeral.register('locale','fr',{
  delimiters:{
    thousands: ' ',
    decimal:','
  },
  abbreviations:{
    thousand:'k',
    lakh: 'L',
    crore: 'Cr'
  },
  ordinal: function(number){
    return number === 1 ? 'er' : 'ème';
  },
  currency:{
    symbol:'₹'
  }

});

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
 <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p> 
      {numeral(amount).format('$0,00.00')}
      - 
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;
