var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');


  /*
    check if component exists
  */
  describe('Timer App',() => {
      it('should exists', () => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        expect(timer).toExist();
      });

      describe('timer func ', () => {
        it('should start timer', (done) => {
          var timer = TestUtils.renderIntoDocument(<Timer/>);
          expect(timer.state.inputTime).toBe(0);
          expect(timer.state.timerStatus).toBe('stopped');
          timer.handleStatusChange('started');
          expect(timer.state.timerStatus).toBe('started');

          setTimeout(() => {
            expect(timer.state.inputTime).toBe(1);
            done();
          },1001);
        });

        it('should pause timer', (done) => {
          var timer = TestUtils.renderIntoDocument(<Timer/>);
          timer.handleStatusChange('started');
          setTimeout(() => {
            timer.handleStatusChange('paused');
          },1001);

          setTimeout(() => {
            expect(timer.state.inputTime).toNotBe(2);
            expect(timer.state.inputTime).toBe(1);
            done();
          },1001);
        });

          it('should stop and set input time to zero', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');
            setTimeout(() => {
              expect(timer.state.inputTime).toBe(1);
              timer.handleStatusChange('stopped');
              expect(timer.state.inputTime).toBe(0);
              done();
            },1001);
        });
      });
    });
