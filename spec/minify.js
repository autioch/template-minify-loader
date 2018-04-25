/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
const { expect } = require('chai');

const minify = require('../src/minify');
const testCases = require('./testCases');

describe('Source minify', () => {
  testCases.forEach((testCase) => {
    it('should return properly minified html', () => {
      expect(minify(testCase.source)).to.equal(testCase.minified);
    });
  });
});
