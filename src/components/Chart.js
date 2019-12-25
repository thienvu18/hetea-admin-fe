import React from "react";
import { LineChart } from 'react-chartkick';
import 'chart.js';

class ChartComponent extends React.Component {
    constructor() {
        super();
        this.data = { "2017-05-13": 2, "2017-05-14": 5, "2017-05-15": 2, "2017-05-16": 15 };
    }
    render() {
        return (
            <>
                <LineChart width="600px"
                    height="400px"
                    xtitle="Size" ytitle="Population"
                    data={this.data} />
            </>
        );
    }
}

export default ChartComponent;
