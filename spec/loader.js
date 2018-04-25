/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
const { expect } = require('chai');

const loader = require('../src/index');
const { fromFile } = require('./testCases');

describe('Source compiles', () => {
  fromFile.forEach((testCase) => {
    it('should compile without error', () => {
      expect(loader(testCase)).to.not.throw; // eslint-disable-line no-unused-expressions
    });
  });
});
