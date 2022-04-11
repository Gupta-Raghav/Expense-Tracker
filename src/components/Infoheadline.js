import React from 'react'
import {connect} from 'react-redux';
import moment from 'moment';

class Infoheadline extends React.Component {
    render(){
    return(
        <div className="info-header ">
            <div className="content-container">
            <h3 className="info-header__title">Currently you are seeing the expenses from <b>{moment(this.props.filters.startDate).format('MMMM Do, YYYY')}</b> to <b>{moment(this.props.filters.endDate).format('MMMM Do, YYYY')}</b></h3>
            </div>
        </div>
    );
}
}

const mapStateToProps =(state)=> {

    return{
        filters: state.filters    
    };
};


export default connect(mapStateToProps)(Infoheadline);