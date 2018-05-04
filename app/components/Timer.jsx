var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({

  getInitialState: function() {
    return {
      inputTime: 0,
      timerStatus: 'stopped'
    };
  },

  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer=undefined;
  },

  componentDidUpdate: function(prevProps, prevState) {

    if(prevState.timerStatus !== this.state.timerStatus){
      switch(this.state.timerStatus){
        case('started'):
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
      var newTime = this.state.inputTime + 1;
      this.setState({
           inputTime:  newTime
      });
    }, 1000);
  },

  handleStatusChange: function(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },

  render: function() {

    var {inputTime, timerStatus} = this.state;

    return (
       <div>
         <h1 className="page-title">Timer App</h1>
         <Clock totalSeconds={inputTime}/>
         <Controls onStatusChange={this.handleStatusChange} countDownStatus={timerStatus}/>
       </div>
    );
  }
});

module.exports = Timer;
