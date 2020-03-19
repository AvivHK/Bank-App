import React, { Component } from 'react';

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: "",
            vendor: "",
            category: "",
        }
    }

    changeValue = async event => {
        await this.setState({
            [event.target.id === "amount" ? "amount" : event.target.id === "vendor" ? "vendor" : "category"]: event.target.value
        })
        console.log(this.state)
    }

    deposit = () => this.props.addTransaction(this.state, true)

    withdraw = () => this.props.addTransaction(this.state, false)


    checkIfInsufficientFunds = () => {

    }



    render() {
        return (
            <div>
                <div id="button">
                    <div style={{fontSize:"25px"}}>Amount:</div>
                    <input id="amount" value={this.state.amount} onChange={this.changeValue} style={{fontSize:"25px"}}></input>
                    <div style={{fontSize:"25px"}}>Vendor:</div>
                    <input id="vendor" value={this.state.vendor} onChange={this.changeValue} style={{fontSize:"25px"}}></input>
                    <div style={{fontSize:"25px"}}>Category:</div>
                    <input id="category" value={this.state.category} onChange={this.changeValue} style={{fontSize:"25px"}}></input>
                </div>
                <button style={{backgroundColor: "green", fontSize:"40px", margin:"10px"}} onClick={this.deposit}>Deposit</button>
                <button style={{backgroundColor: "red", fontSize:"40px", margin:"10px"}} onClick={this.withdraw}>Withdraw</button>
            </div>
        );
    }
}
export default Operations