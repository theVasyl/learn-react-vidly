import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/movies" className="navbar-brand">
        Vidly
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <NavLink to="/movies" className="nav-item nav-link" href="#">
          Movies
        </NavLink>
        <NavLink to="/customers" className="nav-item nav-link">
          Customers
        </NavLink>
        <NavLink to="/rentals" className="nav-item nav-link">
          Rentals
        </NavLink>
      </div>
    </nav>
  );
}
