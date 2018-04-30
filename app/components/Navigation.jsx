var React = require('react');
var {Link, IndexLink} = require('react-router');

/*
  - Navigation component to render the Navigation bar
  - uses foundation's top-bar class for rendering
  - uses react-router Link and IndexLink for routing purposes

*/

// anonymous implementation returning just the render method o/p since the component doesnt not maintain nay state
var Navigation = () =>
<div className="top-bar">
  <div className="top-bar-left">
    <ul className="menu">
      <li className="menu-text">React Timer</li>
      <li>
        <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
      </li>
      <li>
        <Link to='/countdown' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>CountDown</Link>
      </li>
    </ul>
  </div>
  <div className="top-bar-right">
      <ul className="menu"><li className="menu-text">Created by <a href="https://www.fb.com/p.kaviyarasan" target="_blank">@Weird_Heathen</a></li></ul>
  </div>
</div> ;

module.exports = Navigation;
