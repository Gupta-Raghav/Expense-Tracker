import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { HiChevronDoubleUp } from 'react-icons/hi';
import { RiDeleteBin6Line } from "react-icons/ri";

import { MdOutlineInsertComment,MdModeEdit } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
const numberWithCommas = (x) => {
  return x.toString().split('.')[0].length > 3 ? x.toString().substring(0,x.toString().split('.')[0].length-3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + x.toString().substring(x.toString().split('.')[0].length-3): x.toString();
}
const ExpenseListItem = ({ id, description, amount, createdAt,note },props) => {
  const [expanded,setExpanded]=useState(false);
  let history =useHistory()
  let dispatch = useDispatch()
  const onRemove = (id) => {
  
    dispatch(startRemoveExpense({id}));
    history.push('/')
  };
  return(
        <article className='question'>
    <header>
    <div className="list-item" >
      <div>
      <div className='list-item_data'></div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </div>
    <h3 className="list-item__data">{'₹'}{numberWithCommas(amount)}</h3>
    <div style={{display: 'flex',justifyContent:'space-between'}}><h3><button title="notes" style= {{background:'transparent',border:'none',paddingRight:'10px'}} onClick={() => setExpanded(!expanded)}>

{expanded ? <HiChevronDoubleUp />: <MdOutlineInsertComment /> }
</button><Link to={`/edit/${id}`} title="edit" style={{ textDecoration: 'none',color:'rgb(54,64,81)' }} ><MdModeEdit/> </Link><button title="delete"   style= {{background:'transparent',border:'none',color: 'maroon'}} onClick={()=>{onRemove(id)}}><RiDeleteBin6Line/></button></h3></div>
    
    </div>
    </header>
    {expanded && <p className='list-item'>{note}</p>}
    </article>
   
    
)};

export default ExpenseListItem;


