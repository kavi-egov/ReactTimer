var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');
describe('controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should display pause button', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countDownStatus="started"/>);

      var $controlDom = $(ReactDOM.findDOMNode(controls));
      //var ResultantButtonName = $controlDom.find('controls')[0];
      var ResultantButton = $controlDom.find('button:contains(Pause)');
      expect(ResultantButton).toExist();
      expect(ResultantButton.length).toBe(1);
    });

    it('should display start button', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countDownStatus="paused"/>);

      var $controlDom = $(ReactDOM.findDOMNode(controls));
      //var ResultantButtonName = $controlDom.find('controls')[0];
      var ResultantButton = $controlDom.find('button:contains(Start)');
      expect(ResultantButton).toExist();
      expect(ResultantButton.length).toBe(1);
    });
  });
});
