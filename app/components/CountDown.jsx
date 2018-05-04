var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');
var Controls = require('Controls');

var CountDown = React.createClass({

  getInitialState: function() {
    return {
      inputTime: 0,
      countDownStatus: 'stopped'
    };
  },

  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer=undefined;
  },

  componentDidUpdate: function(prevProps, prevState) {

    if(prevState.countDownStatus !== this.state.countDownStatus){
      switch(this.state.countDownStatus){
        case('started'):
          if(this.state.inputTime>0)
          this.startTimer();
          break;
        case('stopped'):
          this.setState({inputTime: 0});
        case('paused'):
          clearInterval(this.timer);
          this.timer=undefined;
            break;

      }
    }
  },

  startTimer: function() {

    this.timer = setInterval( () => {

      var newcountTime = this.state.inputTime-1;
      this.setState({
           inputTime:  newcountTime >= 0 ? newcountTime : 0
      });
      if(newcountTime === 0)
          this.setState({countDownStatus: 'stopped'});
    }, 1000);
  },

  setTimeToCountDown: function(inputTime) {

    this.setState(
      {
        inputTime: inputTime,
        countDownStatus: 'started'
      });
  },

  handleStatusChange: function(newStatus) {
    this.setState({
      countDownStatus: newStatus
    });
  },

  render: function() {

    var {inputTime, countDownStatus} = this.state;

    var returnControlArea = () => {
      if(countDownStatus === 'stopped')
        return <CountDownForm sendTimeToCountDown={this.setTimeToCountDown}/>
      else if(countDownStatus !== 'stopped');
        return <Controls onStatusChange={this.handleStatusChange} countDownStatus={countDownStatus}/>
    };

    return (
       <div>
         <h1 className="page-title">CountDown App</h1>
         <Clock totalSeconds={inputTime}/>
         {returnControlArea()}
       </div>
    );
  }
});

module.exports = CountDown;
