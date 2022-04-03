import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { useHistory } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
const numberWithCommas = (x) => {
  return x.toString().split('.')[0].length > 3 ? x.toString().substring(0,x.toString().split('.')[0].length-3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + x.toString().substring(x.toString().split('.')[0].length-3): x.toString();
}



const ExpenseListItem = ({ id, description, amount, createdAt },props) => {
  let history =useHistory()
  let dispatch = useDispatch()
  const onRemove = (id) => {
  
  
    dispatch(startRemoveExpense({id}));
    history.push('/')
  };
  return(
   
    <div className="list-item" >
      <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </div>
    <h3 className="list-item__data">{'₹'}{numberWithCommas(amount)}</h3>
    <h3><Link to={`/edit/${id}`}  style={{ textDecoration: 'none' }} >✏️/</Link><button onClick={()=>{onRemove(id)}}>🗑️</button></h3>
    </div>
)};

export default ExpenseListItem;
