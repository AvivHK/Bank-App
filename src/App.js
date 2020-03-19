import React, { Component } from 'react';
import './App.css';
import Transactions from './Components/Transactions';
import Operations from './Components/Operations';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Transaction from './Components/Transaction';
import Categories from './Components/Categories';


const axios = require('axios');



class App extends Component {
  sum = 0;
  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }

  async getTransactions(){
    return axios.get("http://localhost:8000/transactions")
  }

  calcSum = () => {
    let sum = 0
    this.state.transactions.forEach(t => sum += parseInt(t.amount))
    return sum
  }

  componentDidMount = async () => {
    const response = await this.getTransactions()   
    this.setState({ transactions: response.data})
    this.calcSum()
  }

  addTransaction = (state, bool) => {
    let trans = [...this.state.transactions]
    let toAdd = {
      amount: parseInt(state.amount),
      vendor: state.vendor,
      category: state.category
    }
    if (!bool) {
      toAdd.amount = -toAdd.amount
    }
    axios.post("http://localhost:8000/transaction",toAdd)
    trans.push(toAdd)
    this.setState({
      transactions: trans
    })
  }

  delete = id => {
    axios.delete(`http://localhost:8000/transaction/${id}`)
    const transactions = this.state.transactions.filter(t => t._id !== id)
    this.setState({transactions})
  }


  render() {
    return (
      <Router>
        <div className="mainLinks">
          <Link className="link" to="/">Home</Link>
          <div></div>
          <Link className="link" to="/transactions">All Transaction</Link>
          <div></div>
          <Link className="link" to="/depositAndWithdraw">Deposit And Withdraw</Link>
        </div>
        <Route exact path="/" render={() =>
          <div>
            <div style={{fontSize:"60px", textAlign:"center"}}>Welcome to the bank</div>
          </div>} />
        <Route exact path="/transactions" render={() =>
          <div className="App">
            <Transactions trans={this.state.transactions} delete={this.delete} />
            <span style={{ fontSize: "25px" }}>Sum: </span>
            <span style={{ fontSize: "40px", fontWeight: "bold" }}>{this.calcSum()}</span>
          </div>
        } />
        <Route exact path="/depositAndWithdraw" render={() =>
          <Operations addTransaction={this.addTransaction} />
        } />
        <Categories trans={this.state.transactions}/>
      </Router >
    );
  }
}

export default App;
