// add scripts
$(document).on('ready', function() {

  var valuesArr = [];
  var tipArr = [];
  $('form').on('submit', function (e) {
    e.preventDefault();
    valuesArr=[];
    var formValues = $('.form-input');
    for (var i = 0; i < formValues.length; i++) {
      valuesArr.push($($('.form-input')[i]).val());
      $($('.form-input')[i]).val("");
    }
    var mealData= new Calculate(valuesArr, tipArr)
    tipArr.push(mealData.tip());
    $('#subtotal').html(" $" + mealData.subTotal());
    $('#tip').html(" $" +mealData.tip());
    $('#total').html(" $" +(mealData.subTotal()+mealData.tip()) );
    $('#totalTips').html(" $" +mealData.addTips());
    $("#mealCount").html(" " + tipArr.length);
    $("#averageTip").html(" $" +(mealData.addTips() / tipArr.length))
  });

// this button clears the form values before submit
  $('[value="Clear"]').on('click', function (e) {
    e.preventDefault();
    var formValues = $('.form-input');
    for (var i = 0; i < formValues.length; i++) {
      $($('.form-input')[i]).val("");
    }
  });
// this button clears the totals
  $('[value="Reset"]').on("click", function(){
    $("span").not(".small").html("");
    tipArr = [];
    valuesArr = [];
  })
});
