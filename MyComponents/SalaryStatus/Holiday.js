import React from 'react';
import './CSS/Holiday.css';

export default function Holiday() {

  const salaryCreditDate = "28 May 2025"; // To be fetched from backend
  const prevSalary = "27 April 2025";// To be fetched from backend

  return (
    <div class="holiday-container">
      <div class="card-r">

        <div class="card1">
          <img src="credit.jpg" class="card-img-top" alt="Salary Credit" />
          <div class="card-body">
            <h5 class="card-title">Salary Credit Date</h5>
            <p class="card-text">
              Your salary will be credited on <strong>{salaryCreditDate}</strong>.
            </p>
            <p>Previous Salary was credited on <strong>{prevSalary}</strong></p>
          </div>
        </div>

        <div class="card2">
          <img src="bank.jpg" class="card-img-top" alt="Bank Holidays" />
          <div class="card-body">
            <h5 class="card-title">Bank Holidays</h5>
            <p class="card-text">
              Click the button below to view upcoming bank holidays.
            </p>
            <a href="https://canarabank.com/UploadedFiles/Pdf/HOLIDAY%20LIST-2025.pdf" class="btn btn-primary">
              View Bank Holidays
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
