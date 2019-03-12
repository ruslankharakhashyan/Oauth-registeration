/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Sidebar from '../components/Sidebar/Sidebar';
import Aside from '../components/Aside/Aside';
import Layout from '../layouts/Full';

import Dashboard from './Dashboard';


class Main extends Component {
  render() {
    return (
      <Layout>
        <Sidebar {...this.props} />
        <main className="main">
          <Breadcrumb />
          <Container fluid>
            <Route render={({ location }) => (
              <Switch location={location}>
                <Route component={Dashboard} path="/dashboard" />
              </Switch>
            )} />
          </Container>
        </main>
        <Aside />
      </Layout>
    );
  }
}

export default Main;
