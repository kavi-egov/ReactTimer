var React = require('react');

var CountDownForm = React.createClass({

  handleForm: function(e) {
    e.preventDefault();
    var inputTime = Number(this.refs.inputtime.value);
    if (inputTime && typeof inputTime == 'number' && inputTime > 0) {
      this.refs.inputtime.value = '';
      this.props.sendTimeToCountDown(inputTime);
    }
  },

  render: function() {

    return (
        <div>
          <form onSubmit={this.handleForm} className='countdow-form' ref='form'>
            <input type='text' placeholder='enter the time here' ref='inputtime'></input>
            <input type='submit' className='button expanded' value='START'></input>
          </form>
        </div>
    );
  }
});

module.exports = CountDownForm;
