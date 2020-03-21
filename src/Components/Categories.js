import React, { Component } from 'react';
import PieChart from './PieChart';

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
        trans.reduce(function (res, value) {
            if (!res[value.category]) {
                res[value.category] = { label: value.category, y: 0};
                result.push(res[value.category])
            }
            res[value.category].y += value.amount;
            return res;
        }, {});
        return result
    }

    render() {
        let cate = this.getState()
        return (
            <div>
                <PieChart categories={cate} />
            </div>
        );
    }
}
export default Categories