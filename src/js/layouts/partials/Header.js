import React, { Component } from 'react';
import {
  NavbarToggler, Nav,
  NavItem,
  NavLink,
  NavbarBrand, Form, Input, Button
} from 'reactstrap';
import { GoogleLogin, GoogleLogout } from '../../components/Google/index';
import { clientId } from '../../config';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logedin: false
    };
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.logout = this.logout.bind(this);
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  success(response) {
    console.log(response);
    if (response.accessToken) {
      this.setState({
        logedin: true
      });
    }
  }

  error(response) {
    console.log(response);
  }

  logout() {
    this.setState({
      logedin: false
    });
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
        <NavbarBrand href="#">Test</NavbarBrand>
        <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
        <Form className="form-inline px-4 d-md-down-none">
          <i className="fa fa-search" />
          <Input placeholder="Are you looking for something?" />
        </Form>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell" /></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell" /></NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            {
              (!this.state.logedin) ?
              (
                <GoogleLogin onSuccess={this.success} onFailure={this.error} clientId={clientId} />
              ) :
              (
                <GoogleLogout buttonText="Logout" onLogoutSuccess={this.logout} />
              )
            }
          </NavItem>
        </Nav>
        <NavbarToggler className="" onClick={this.asideToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
      </header>
    );
  }
}

export default Header;
