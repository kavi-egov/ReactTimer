var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDown = require('CountDown');


  /*
    check if component exists
  */
  describe('if CountDown exists',() => {
      it('should exists', () => {
        var countDown = TestUtils.renderIntoDocument(<CountDown/>);
        expect(countDown).toExist();
      });

      describe('setTimeToCountDown', () => {
        it('should set count to clock', (done) => {
          var countDown = TestUtils.renderIntoDocument(<CountDown/>);
          expect(countDown.state.countDownStatus).toBe('stopped');
          countDown.setTimeToCountDown(10);
          expect(countDown.state.inputTime).toBe(10);
          expect(countDown.state.countDownStatus).toBe('started');
          setTimeout(() => {
              expect(countDown.state.inputTime).toBe(9);
              done();
          },1001);
        });

        it('should not set count to negative', (done) => {
          var countDown = TestUtils.renderIntoDocument(<CountDown/>);
          countDown.setTimeToCountDown(1);
          setTimeout(() => {
              expect(countDown.state.inputTime).toNotBe(-1);
              expect(countDown.state.inputTime).toBe(0);
              done();
          },2001);
        });

        it('should pause the countdown when status is set to paused', (done) => {
          var countDown = TestUtils.renderIntoDocument(<CountDown/>);
          countDown.setTimeToCountDown(3);
          countDown.handleStatusChange('paused');

          setTimeout(() => {
              expect(countDown.state.inputTime).toNotBe(2);
              expect(countDown.state.inputTime).toBe(3);
              expect(countDown.state.countDownStatus).toBe('paused');
              done();
          },1001);
        });

        it('should set the countdown to zero when status is set to stopped', (done) => {
          var countDown = TestUtils.renderIntoDocument(<CountDown/>);
          countDown.setTimeToCountDown(3);
          countDown.handleStatusChange('stopped');

          setTimeout(() => {
              expect(countDown.state.inputTime).toNotBe(2);
              expect(countDown.state.inputTime).toBe(0);
              expect(countDown.state.countDownStatus).toBe('stopped');
              done();
          },1001);
        });
      });

  });
