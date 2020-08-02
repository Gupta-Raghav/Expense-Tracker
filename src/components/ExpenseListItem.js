import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


const numberWithCommas = (x) => {
  return x.toString().split('.')[0].length > 3 ? x.toString().substring(0,x.toString().split('.')[0].length-3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + x.toString().substring(x.toString().split('.')[0].length-3): x.toString();
}
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </div>
<h3 className="list-item__data">{'₹'}{numberWithCommas(amount)}</h3>
    </Link>
);

export default ExpenseListItem;
