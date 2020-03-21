import CanvasJSReact from './canvasjs.react';
import React, { Component } from 'react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
    render() {
        let cate = this.props.categories
        const options = {
            animationEnabled: true,
            animationDuration: 2000,
            exportEnabled: true,
            theme: "light2",
            backgroundColor: "#ecf0f1",
            title: {
                text: "Incomes and Expenses"
            },
            data: [{
                type: "column",
                dataPoints: cate
            }]
        }

        return (
                <CanvasJSChart className="chart" options={options}/>
        );
    }
}


export default PieChart;
