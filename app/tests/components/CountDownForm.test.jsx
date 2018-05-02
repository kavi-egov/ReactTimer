var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountDownForm = require('CountDownForm');

describe('count down form', () => {

  it('should countdownform exist', () => {
    expect(CountDownForm).toExist();
  })

  it('should call sendTimeToCountDown', () => {
      var spy = expect.createSpy();
      var countDownForm = TestUtils.renderIntoDocument(<CountDownForm sendTimeToCountDown={spy}/>);
      countDownForm.refs.inputtime.value = '109';

      var $countDownNode = $(ReactDOM.findDOMNode(countDownForm));
      TestUtils.Simulate.submit($countDownNode.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call sendTimeToCountDown', () => {

      var spy = expect.createSpy();
      var countDownForm = TestUtils.renderIntoDocument(<CountDownForm sendTimeToCountDown={spy}/>);
      countDownForm.refs.inputtime.value = 'ASNWSKNWKW';

      var $countDownNode = $(ReactDOM.findDOMNode(countDownForm));
      TestUtils.Simulate.submit($countDownNode.find('form')[0]);

      expect(spy).toNotHaveBeenCalled(109);
  });
});
