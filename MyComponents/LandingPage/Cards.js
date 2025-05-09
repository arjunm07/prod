import React from "react";

export default function Cards() {
  return (
    <div className="bg">
      <div className="card-container">
        <div className="card">
          <img src="salary1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Salary Description</h5>
            <p class="card-text">Find Salary Details here...</p>
            <a href="/salarydesc" class="btn btn-primary">
              View
            </a>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <img src="salary2.jfif" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Salary Status</h5>
              <p class="card-text">Find Current Status...</p>
              <a href="/salarystat" class="btn btn-primary">
                View
              </a>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <img src="salary4.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Provident Fund</h5>
              <p class="card-text">Find PF Details...</p>
              <a href="/providentf" class="btn btn-primary">
                View
              </a>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <img src="salary5.jfif" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Tickets</h5>
              <p class="card-text">Raise Ticket/Query...</p>
              <a href="/ticket" class="btn btn-primary">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
