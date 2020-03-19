import React, { Component } from 'react';
import Category from './Category';

class Categories extends Component {

    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    getState() {
        const trans = this.props.trans
        let result = [];
        let counter = 0
        trans.reduce(function (res, value) {
            if (!res[value.category]) {
                counter++;
                res[value.category] = { category: value.category, amount: 0, id: counter };
                result.push(res[value.category])
            }
            res[value.category].amount += value.amount;
            return res;
        }, {});
        return result
    }

    render() {
        let cate = this.getState()
        return (
            <div>
                {cate.map(c => <Category cate={c} key={c.id} />)}
            </div>
        );
    }
}
export default Categories