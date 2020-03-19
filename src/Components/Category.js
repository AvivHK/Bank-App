import React, { Component } from 'react';

class Category extends Component {
    render() {
        let cate = this.props.cate
        return (
            <div className="categories">
                <div>{cate.category} </div>
                <div>{cate.amount}</div>
            </div>
        );
    }
}
export default Category