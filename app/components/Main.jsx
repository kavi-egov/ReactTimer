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
      <div className='row'>
        <div className='column small-centered medium-6 large-4'>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
