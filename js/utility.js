var Calculate = function(valuesArr, tipArr ) {
  this.mealPrice = parseInt(valuesArr[0]);
  this.taxRate = valuesArr[1];
  this.tipPercetage = valuesArr[2];
  this.totalTips = tipArr;

};
Calculate.prototype.subTotal = function(){
  subTotalPrice = this.mealPrice + (this.mealPrice*(this.taxRate));
  return subTotalPrice;
};
Calculate.prototype.tip = function (){
  tip = this.tipPercetage * this.mealPrice;
  return tip;
};
Calculate.prototype.addTips = function(){
  var total = 0;
  for (var i = 0; i < this.totalTips.length; i++) {
      total += this.totalTips[i];
  }
  return total;
};

var Player = function(name){
  this.name = name
}

module.exports = Calculate
