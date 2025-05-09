import React from 'react'
import Navbar from '../Common/Navbar'
import ".//CSS/Salary.css";
export default function Salary() {
  return (
    <div>
      <div className="container">
        <img src="piechart1.webp" alt="..." className="img-top"/>
        <h5>Pay Slip</h5>
        <p>Gross Pay : Total Pay </p>
        <p>Taxes and Deductions : Tax Deduction </p>
        <p>In-Hand : After Deduction</p>
        <a href="/payslip">View PaySlip</a>
      </div>
    </div>
    
  )
}
