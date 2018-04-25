/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
const { expect } = require('chai');

const loader = require('../src/index');
const { withResult } = require('./testCases');

describe('Returns string with option `execute`', () => {
  withResult
    .filter((testCase) => testCase.execute)
    .forEach((testCase) => {
      it('should compile without error', () => {
        /* Simulate context that is normally given by webpack. */
        const webpackSimulator = {
          cacheable() {}, // eslint-disable-line no-empty-function
          options: {
            execute: testCase.execute
          }
        };

        const result = loader.call(webpackSimulator, testCase.source);

        expect(result).to.equal(testCase.compiled);
      });
    });
});
