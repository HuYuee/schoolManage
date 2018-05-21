import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";//等到线上环境更换为BrowserRouter
import Layout from 'containers/Layout'
import Home from 'containers/Home'
import About from 'containers/About'
import Topics from 'containers/Topics'

const BasicExample = () => (
  <Router>
    <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
    </Layout>
  </Router>
);
  export default BasicExample;