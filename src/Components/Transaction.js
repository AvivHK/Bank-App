import React, { Component } from 'react';


class Transaction extends Component {


    delete = () => this.props.delete(this.props.trans._id)

    

    render() {
        let trans = this.props.trans;
        return (
            <tr className={trans.amount >= 0? "deposit" : "withdraw" }>
                <td className="amount">{trans.amount} </td>
                <td className="vendor">{trans.vendor} </td>
                <td className="category">{trans.category} </td>
                <td><i className="fas fa-trash" onClick={this.delete}></i></td>
            </tr>
        );
    }
}
export default Transaction