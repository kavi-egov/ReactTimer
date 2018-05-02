var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');


var CountDown = React.createClass({

  getInitialState: function() {
    return {
      inputTime: 0,
      countDownStatus: 'stopped'
    };
  },

  componentDidUpdate: function(prevProps, prevState) {

    if(prevState.countDownStatus !== this.state.countDownStatus){
      switch(this.state.countDownStatus){
        case('started'):
          if(this.state.inputTime>0)
          this.startTimer();
      }
    }
  },

  startTimer: function() {

    this.timer = setInterval( () => {

      var newcountTime = this.state.inputTime-1;
      this.setState({
           inputTime:  newcountTime >= 0 ? newcountTime : 0
      });
      if(newcountTime === 0) clearInterval(this.timer);
    }, 1000);
  },

  setTimeToCountDown: function(inputTime) {

    this.setState(
      {
        inputTime: inputTime,
        countDownStatus: 'started'
      });
  },

  render: function() {

    var {inputTime} = this.state;
    return (
       <div>
         <Clock totalSeconds={inputTime}/>
         <CountDownForm sendTimeToCountDown={this.setTimeToCountDown}/>
       </div>
    );
  }
});

module.exports = CountDown;
