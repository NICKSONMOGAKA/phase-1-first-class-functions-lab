const { expect } = require('chai');
const {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers
} = require('../index.js');

describe('index.js', () => {
  const drivers = ['Milo', 'Otis', 'Garfield'];

  describe('returnFirstTwoDrivers()', () => {
    it('should return a new array containing the first two drivers from the passed-in array', () => {
      expect(returnFirstTwoDrivers(drivers)).to.eql(['Milo', 'Otis']);
    });
  });

  describe('returnLastTwoDrivers()', () => {
    it('should return an array of the last two drivers', () => {
      expect(returnLastTwoDrivers(drivers)).to.eql(['Otis', 'Garfield']);
    });
  });

  describe('selectingDrivers', () => {
    it('has the `returnFirstTwoDrivers` function to as its first element', () => {
      expect(selectingDrivers[0]).to.equal(returnFirstTwoDrivers);
    });

    it('has the `returnLastTwoDrivers` function to as its last element', () => {
      expect(selectingDrivers[1]).to.equal(returnLastTwoDrivers);
    });

    it('allows us to invoke either function from the array', () => {
      expect(selectingDrivers[0](drivers)).to.eql(['Milo', 'Otis']);
      expect(selectingDrivers[1](drivers)).to.eql(['Otis', 'Garfield']);
    });
  });

  describe('createFareMultiplier()', () => {
    it('returns a function', () => {
      expect(createFareMultiplier(2)).to.be.a('function');
    });

    it('should multiply a given value using the created multiplier', () => {
      const fareMultiplier = createFareMultiplier(3);
      expect(fareMultiplier(10)).to.equal(30);
    });
  });

  describe('fareDoubler()', () => {
    it('is a function', () => {
      expect(fareDoubler).to.be.a('function');
    });

    it('doubles fares', () => {
      expect(fareDoubler(10)).to.equal(20);
    });
  });

  describe('fareTripler()', () => {
    it('is a function', () => {
      expect(fareTripler).to.be.a('function');
    });

    it('triples fares', () => {
      expect(fareTripler(10)).to.equal(30);
    });
  });

  describe('selectDifferentDrivers(arrayOfDrivers, function)', () => {
    it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', () => {
      expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Milo', 'Otis']);
    });

    it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', () => {
      expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Otis', 'Garfield']);
    });
  });
});
