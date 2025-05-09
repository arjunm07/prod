import React from 'react';
import ".//CSS/Tax.css";
import TaxBar from "./TaxBar"

export default function Tax() {
  return (
    <div>
      <div className="tax">
      <img src="tax.png" alt="..." className="img-tx"/>
        <h3>Tax Summary</h3>
        <br></br>
        <h5>Total Annual Tax : Tax to be paid annually</h5>
        <br></br>
        <h5>Tax Paid : Tax already paid</h5>
        <TaxBar/>
        
      </div>      
    </div>
  )
}
