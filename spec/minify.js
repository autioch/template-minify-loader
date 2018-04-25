/* eslint-env mocha */
/* eslint max-nested-callbacks: [ 'error', 5 ] */
const { expect } = require('chai');

const minify = require('../src/minify');
const { withResult } = require('./testCases');

describe('Source minify', () => {
  withResult.forEach((testCase) => {
    it('should return properly minified html', () => {
      expect(minify(testCase.source)).to.equal(testCase.minified);
    });
  });
});
