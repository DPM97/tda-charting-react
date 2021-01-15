import React from 'react'
import './styles/index.scss';
import Chart from './pages/chart'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <Router>
      <Route path ="/">
        <Chart />
      </Route>
    </Router>
  );


