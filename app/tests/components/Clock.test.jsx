var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    expect(clock).toExist();
  });
});

describe('render test', () => {
  it('should render clock test', () => {
    var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={63}/>);
    var $element = $(ReactDOM.findDOMNode(clock));
    var resultText = $element.find('.clock-text').text();
    expect(resultText).toBe('01:03');
  });
});

describe('formatSeconds', () => {

  it('should format seconds', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    expect(clock).toExist();
      var seconds = 615;
      var expected = '10:15';
      var actualresult = clock.formatSeconds(seconds);
      expect(actualresult).toBe(expected);
  });

  it('should format seconds when sec/min is less than 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actualresult = clock.formatSeconds(seconds);
      expect(actualresult).toBe(expected);
  });
});
