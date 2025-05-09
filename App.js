import "./App.css";
import Navbar from "./MyComponents/Common/Navbar";
import Cards from "./MyComponents/LandingPage/Cards";
import Body from "./MyComponents/SalaryDesc/Body";
import Salary from "./MyComponents/SalaryDesc/Salary";
import { BrowserRouter, Routes, Route } from "react-router";
import Tax from "./MyComponents/SalaryDesc/Tax";
import Tickets from "./MyComponents/Ticket/Tickets";
import Holiday from "./MyComponents/SalaryStatus/Holiday";
import Login from "./MyComponents/LoginPage/Login";
import Intro from "./MyComponents/LoginPage/Intro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="/login"
          element={
            <>
              <Login/>
              <Intro/>
            </>
          }
        />

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Cards />
            </>
          }
        />
        <Route
          path="/salarydesc"
          element={
            <>
              <Navbar />
              <Body />
              <Salary />
              <Tax />
            </>
          }
        />

        <Route
          path="/ticket"
          element={
            <>
              <Navbar />
              <Tickets />
            </>
          }
        />

<Route
          path="/salarystat"
          element={
            <>
              <Navbar />
              <Holiday/>
            </>
          }
        />

<Route
          path="/logout"
          element={
            <>
              <Login/>
              <Intro/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
