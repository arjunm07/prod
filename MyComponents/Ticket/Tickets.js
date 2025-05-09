import React, { useState } from "react";
import ".//CSS/Tickets.css"; 

const TicketPage = () => {
    const [ticketData, setTicketData] = useState({
        employeeId: "",
        email: "",
        subject: "",
        description: ""
    });

    const handleChange = (e) => {
        setTicketData({ ...ticketData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Ticket Submitted:", ticketData);
        alert("Your ticket has been raised!");
        resetForm(); 
    };

    const resetForm = () => {
        setTicketData({ employeeId: "", email: "", subject: "", description: "" });
    };

    return (
        <div className="ticket-container">
            <h2>Raise a Ticket</h2>
            <form class="form-container"onSubmit={handleSubmit}>
                <input class="input-container" type="number" name="employeeId" placeholder="Employee ID" value={ticketData.employeeId} onChange={handleChange} required />
                <input class="input-container" type="email" name="email" placeholder="Email" value={ticketData.email} onChange={handleChange} required />
                <input class="input-container" type="text" name="subject" placeholder="Subject" value={ticketData.subject} onChange={handleChange} required />
                <textarea class="text-c" name="description" placeholder="Describe your issue" value={ticketData.description} onChange={handleChange} required />
                <div className="button-group">
                    <button type="submit">Submit Ticket</button>
                    <button type="button" onClick={resetForm} className="reset-button">Reset</button>
                </div>
            </form>
        </div>
    );
};

export default TicketPage;

