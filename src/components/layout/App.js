import React from 'react'
import { Route } from 'react-router'
import Layout from '.././layout/Layout'
import Home from '.././pages/Home'
import UserManagement from '.././pages/UserManagement'
import Counter from '.././pages/Counter'
import FetchData from '.././FetchData'
import HomepageLayout from '.././pages/HomepageLayout'

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/userManagement" component={UserManagement} />
    <Route path="/counter" component={Counter} />
    <Route path="/layout" component={HomepageLayout} />
    <Route path="/fetchdata/:startDateIndex?" component={FetchData} />
  </Layout>
);
