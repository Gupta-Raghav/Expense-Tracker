import React,{useEffect,useState} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import randomColor from "randomcolor";
import ReactApexChart from "./Chart";


const Piec= (props)=>{
    let chartlist=[]

    props.expenses.map((expense)=>{
        let color=randomColor()
        let info = {title:expense.description,value:expense.amount,color:color}
        chartlist.push(info)
    })
    return(
    <div>
    <div className='analytics-container  analytics-container_left'>
      <PieChart 
      data={chartlist}
          
      animate = 'true'
      reveal = '40%'
      radius = '20'
      /> 
    </div>
    <div>
    {/* <div id="chart" className='analytics-container  analytics-container_right'>
    <ReactApexChart options={this.props} series={this.props.expenses} type="line" height={350} />
</div> */}
    </div>
    </div>

    )}

const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };

  };
export default connect(mapStateToProps)(Piec);