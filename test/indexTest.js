const chai = require('chai');
const expect = chai.expect;

const {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
} = require('../index');

describe('index', function () {
  describe('receivesAFunction(callback)', function () {
    it('receives a function and calls it', function () {
      let called = false;
      function spy() {
        called = true;
      }
      receivesAFunction(spy);
      expect(called).to.be.true;
    });
  });

  describe('returnsANamedFunction()', function () {
    it('returns a function', function () {
      const fn = returnsANamedFunction();
      expect(fn).to.be.a('function');
    });

    it('returns a named function', function () {
      const fn = returnsANamedFunction();
      expect(fn.name).not.to.be.empty;
    });
  });

  describe('returnsAnAnonymousFunction()', function () {
    it('returns a function', function () {
      const fn = returnsAnAnonymousFunction();
      expect(fn).to.be.a('function');
    });

    it('returns an anonymous function', function () {
      const fn = returnsAnAnonymousFunction();
      expect(fn.name).to.be.empty;
    });
  });
});
