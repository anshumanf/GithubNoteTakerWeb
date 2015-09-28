let React = require('react');

let Main = React.createClass({
  render : function() {
    return (
      <div>
        Hello world
      </div>
    );
  },
});

React.render(<Main />, document.getElementById('app'));
