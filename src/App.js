import React, { Component } from 'react';
import './App.css';
import Transactions from './Components/Transactions';
import Operations from './Components/Operations';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Categories from './Components/Categories';
import Header from './Components/Header';


const axios = require('axios');



class App extends Component {
  sum = 0;
  constructor() {
    super()
    this.state = {
      transactions: [],
      redirect: false,
    }
  }

  async getTransactions() {
    return axios.get("http://localhost:8000/transactions")
  }

  calcSum = () => {
    let sum = 0
    this.state.transactions.forEach(t => sum += parseInt(t.amount))
    return sum
  }

  componentDidMount = async () => {
    const response = await this.getTransactions()
    this.setState({ transactions: response.data })
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
    axios.post("http://localhost:8000/transaction", toAdd)
    trans.push(toAdd)
    this.setState({
      transactions: trans
    })
  }

  delete = id => {
    axios.delete(`http://localhost:8000/transaction/${id}`)
    const transactions = this.state.transactions.filter(t => t._id !== id)
    this.setState({ transactions })
  }


  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" render={() =>
          <div>
            <div className="homePage">Welcome to yellow bank
            <div className="chart">
                <Categories trans={this.state.transactions} />
              </div>
            </div>
          </div>} />
        <Route exact path="/transactions" render={() =>
          <div className="table">
            <Transactions trans={this.state.transactions} delete={this.delete} sum={this.calcSum()} />
          </div>
        } />
        <Route exact path="/depositAndWithdraw" render={() =>
          <Operations addTransaction={this.addTransaction} />
        } />
      </Router >
    );
  }
}

export default App;
