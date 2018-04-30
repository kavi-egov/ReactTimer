var React = require('react');
var Nav = require('Navigation');

/*
  - main component which holds all the other components for this app
  - takes navigation component as the first child
  - props.children will acquire all the children passed to the main component from the app.jsx using the Route and IndexRoute elements
*/

var Main = (props) => {
  return (
    <div>
        <Nav/>
      <div>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
