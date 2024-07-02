// Code your solution in this file!
exports.returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  exports.returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  exports.selectingDrivers = [
    exports.returnFirstTwoDrivers,
    exports.returnLastTwoDrivers
  ];
  
  exports.createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  exports.fareDoubler = exports.createFareMultiplier(2);
  
  exports.fareTripler = exports.createFareMultiplier(3);
  
  exports.selectDifferentDrivers = function(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  };
  