import React, { Component } from 'react';
import Transaction from './Transaction';


class Transactions extends Component {
    delete = id => {
        this.props.delete(id)
    }

    render() {
        return (
            <div style={{display: "inline"}} id="transactions">
                <div style={{fontSize:"60px" ,fontWeight:"bold"}}>All transactions:</div>
                {this.props.trans.map(t => <Transaction key={t._id} trans={t} delete={this.delete} />)}
            </div>
        );
    }
}
export default Transactions