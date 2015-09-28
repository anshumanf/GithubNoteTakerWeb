let
  React  = require('react'),
  Router = require('react-router'),
  Main   = require('../components/Main'),
  Home   = require('../components/Home');

let {
  DefaultRoute,
  Route,
} = Router;

module.exports = (
  <Route name="app" path="/" handler={Main}>
    <DefaultRoute handler={Home} />
  </Route>
);
