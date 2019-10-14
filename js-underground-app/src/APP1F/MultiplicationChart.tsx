import React from 'react';
import './MultiplicationChart.scss'



const Formula: React.FC<{multiplier: number}> = ({
  multiplier
}) => {
  return (
    <React.Fragment>
      {
        Array.from(new Array(9)).map((d, idx) => (
          <div className="formula">
            <span>{multiplier}</span>
            <span>x</span> 
            <span>{idx + 1}</span> 
            <span>=</span>
            <span>{(idx + 1) * multiplier}</span>
          </div>
        ))
      }
    </React.Fragment>
  )
}

const Formulas: React.FC = () => {
  return (
    <React.Fragment>
      {
        Array.from(new Array(8)).map((d, idx) => (
          <div className="card chart">
            <div className="number">{idx + 2}</div>
            <Formula multiplier={idx + 2} />
          </div>
        ))
      }
    </React.Fragment>
  )
}

const MultiplicationChart: React.FC = () => {
  return (
    <div className="multiplication-chart">
      <div className="content">
        <div className="card title">
          <div className="hr" />
          <div>
            <div className="header1">九九乘法表</div>
            <div className="header2">MULTIPLICATION CHART</div>
          </div>
          <div className="hr" />
        </div>
        <Formulas />
      </div>
      <div className="footer">
        Copyright © 2019 HexSchool. All rights reserved.
      </div>

    </div>
  );
}

export default MultiplicationChart;
