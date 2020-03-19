import React, { Component } from 'react';

class Transaction extends Component {
    

    delete = () =>  this.props.delete(this.props.trans._id)

    render() {
        let trans = this.props.trans;
        return (
            <div style={{fontSize:"25px"}}className={`transaction ${trans.amount > 0 ? "deposit" : "withdraw"}`}>
                <span className="amount">{trans.amount}$ </span>
                <span className="category">{trans.category} </span>
                <span className="vendor">{trans.vendor} </span>
                <button style={{fontSize:"25px"}} onClick={this.delete} >Delete</button>
            </div>);
    }
}
export default Transaction