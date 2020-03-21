import React, { Component } from 'react';
import Transaction from './Transaction';


class Transactions extends Component {
    delete = id => {
        this.props.delete(id)
    }

    render() {
        return (
            <table align="center" id="transactions">
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Vender</th>
                        <th>Category</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.trans.map(t => <Transaction key={t._id} trans={t} delete={this.delete} />)}
                    <tr>
                        <td colSpan="4" className={this.props.sum > 500 ? "deposit sum" : "withdraw sum"}>
                            Sum: {this.props.sum}$
                    </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default Transactions