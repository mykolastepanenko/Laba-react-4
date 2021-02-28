import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navbar, NavbarBrand, NavDropdown, Nav} from "react-bootstrap"
import About from "./pages/About"
import Users from "./pages/Users"
import Home from "./pages/Home"
import User from "./pages/User"
import Store from "./pages/Store"
import Admin from "./pages/Admin"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

let users = ["Микола", "Олексій", "Данило", "Анатолій", "Віктор", "Ярослав", "Петро"]

export default function App() {
  return (
    <Router>
      <div>
      <Navbar bg="dark" expand="lg">
  <Link className="navbar-brand" to="/">React-Bootstrap</Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/admin">Admin</Link>
      <Link className="nav-link" to="/user">User</Link>
      <Link className="nav-link" to="/users">Users</Link>
      <Link className="nav-link" to="/store">Store</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users users={users} />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/admin">
            <Admin users={users} />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}