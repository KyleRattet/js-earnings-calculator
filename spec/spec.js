var Calculate = require('../js/utility.js');

// describe('Calculate', function() {
//   beforeEach(function(){
//     var testTip = [];
//     var testArr = [100,.05 , .1 ];
//     mealData = new Calculate(testArr,testTip)
//   });
// });
beforeEach(function(){
    var testTip = [5,5];
    var testArr = [100,.05 , .1 ];
    mealData = new Calculate(testArr,testTip)
  });


describe('subtotal', function() {
  it('should take the meal price and add tax to it for the subtotal', function(){
    expect(mealData.subTotal()).toEqual(105);
  });
});

describe('tip', function() {
  it('return the dollar value of mealPrice * tip%', function(){
    expect(mealData.tip()).toEqual(10);
  });
});

describe('addTips', function() {
  it('accumulate the tip amount', function(){
    expect(mealData.addTips()).toEqual(10);
  });
});
