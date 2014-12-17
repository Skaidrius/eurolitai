(function($) {
  
  // initialisation
  $(".english").addClass("hidden");
  $("#lithuanian").addClass("active");

  //change language
  $("#lithuanian").click(function(){
    $(this).addClass("active");
    $("#english").removeClass("active");
    $(".english").hide();
    $(".lithuanian").show();
  });
  $("#english").click(function(){
    $(this).addClass("active");
    $("#lithuanian").removeClass("active");
    $(".lithuanian").hide();
    $(".english").show();
  });

  var show = function(){
    $(this).removeClass("hidden").addClass("visible");
  };
  
  var hide = function(){
    $(this).removeClass("visible").addClass("hidden");
  };

  // convert currency functions
  var toEur = function(lt){
    var eur;
    eur = (lt / 3.4528).toFixed(2);
    return eur;
  };
  
  var toLt = function(eur){
    var lt;
    lt = (eur * 3.4528).toFixed(2);
    return lt;
  };
  
  //convert currencies 
  $('#lt').keyup(function () {
    var lt = $(this).val(),
        eur = toEur(lt);
    if ($.isNumeric(lt)) {
      hideError();
      $('#eur').val(eur).toString().replace(".", ",");
      showNumbers();
    } else {
      showError();
    }
  });
  
  $('#eur').keyup(function () {
    var eur = $(this).val(),
        lt = toLt(eur);
    if ($.isNumeric(eur)) {
      hideError();
      $('#lt').val(lt).toString().replace(".", ",");
      showNumbers();
    } else {
      showError();
    }
  });
  
  var hideError = function(){
    $('#error').addClass("hidden");
    clear();
  };
  var showError = function() {
    $('#error').removeClass("hidden").addClass("error");
  };
  
  //clearing functions
  var clear = function(){
    $('#changeLtLt1').val('');
    $('#changeLtLt2').val('');
    $('#changeLt').val('');
    $('#changeEur').val('');
    $('#changeEurEur1').val('');
    $('#changeEurEur2').val('');
  };
  var clear1 = function(){
    $('#changeLt').val('');
    $('#changeEur').val('');
    $('#changeEurEur1').val('');
    $('#changeEurEur2').val('');
  };
  var clear2 = function(){
    $('#changeLtLt1').val('');
    $('#changeLtLt2').val('');
    $('#changeEurEur1').val('');
    $('#changeEurEur2').val('');
  };
  var clear3 = function(){
    $('#changeLtLt1').val('');
    $('#changeLtLt2').val('');
    $('#changeLt').val('');
    $('#changeEur').val('');
  };

  // currency change calculator
  // first conversion LTL(EUR)=LTL+LTL
  $('#changeLtLt1').keyup(function () {
    clear1();
    var change,
        lt = $(this).val();
      change =  $('#lt').val() - lt;
      $('#changeLtLt2').val(change).toFixed(2).toString().replace(".", ",");
      showNumbers();
  });
  
  $('#changeLtLt2').keyup(function () {
    clear1();
    var change,
        lt = $(this).val();
      change = $('#lt').val() - lt;
      $('#changeLtLt1').val(change).toFixed(2).toString().replace(".", ",");
      showNumbers();
  });
  
  // second conversion LTL(EUR)=LTL+EUR
  $('#changeLt').keyup(function () {
    clear2();
    var change,
        lt = $(this).val();
      change =  toEur($('#lt').val() - lt);
      $('#changeEur').val(change).toFixed(2).toString().replace(".", ",");
      showNumbers();
  });
  
  $('#changeEur').keyup(function () {
    clear2();
    var change,
        eur = $(this).val();
      change = toLt($('#eur').val() - eur);
      $('#changeLt').val(change).toFixed(2).toString().replace(".", ",");
      showNumbers();
  });
  
  // third conversion LTL(EUR)=EUR+EUR
  $('#changeEurEur1').keyup(function () {
    clear3();
    var change,
        eur = $(this).val();
      change = $('#eur').val() - eur;
      $('#changeEurEur2').val(change).toFixed(2).toString().replace(".", ",");
      showNumbers();
  });
  
  $('#changeEurEur2').keyup(function () {
    clear3();
    var change,
        eur = $(this).val();
      change = $('#eur').val() - eur;
      $('#changeEurEur2').val(change).toFixed(2).toString().replace(".", ",");
      showNumbers();
  });
  
  // show calculation
  var showNumbers = function(){
    var explain = $('#explain'),
        ltl = $('#lt').val(),
        eurs = $('#eur').val(),
        changeLtLt1 = $('#changeLtLt1').val(),
        changeLtLt2 = $('#changeLtLt2').val(),
        changeEurs = $('#changeEur').val(),
        changeLts = $('#changeLt').val(),
        changeEurEur1 = $('#changeEurEur1').val(),
        changeEurEur2 = $('#changeEurEur2').val(),
        calculationText;
    if (changeLtLt1 > 0 || changeLtLt2 > 0) {
      calculationText = "<p>" + ltl +" LTL (" + eurs + " EUR) = " + changeLtLt1 +" LTL + " + changeLtLt2 + " LTL" + "</p>";
    } else if (changeEurs > 0 || changeLts > 0) {
      calculationText = "<p>" + ltl +" LTL (" + eurs + " EUR) = " + changeLts +" LTL + " + changeEurs + " EUR" + "</p>";
    } else if (changeEurEur1 > 0 || changeEurEur2 > 0) {
      calculationText = "<p>" + ltl +" LTL (" + eurs + " EUR) = " + changeEurEur1 +" EUR + " + changeEurEur2 + " EUR" + "</p>";
    } else {
      calculationText = "<p>" + ltl +" LTL (" + eurs + " EUR) " + "</p>";
    }
    explain.html(calculationText);
  };

  var a = [0.99, 1.99, 2.99, 3.99, 4.99, 9.99, 14.99, 19.99, 24.99, 29.99],
    lteur = $('.lteur'),
    eurlt = $('.eurlt');

  for (var i = 0, b = a.length; i < b; i++ ) {
    lteur.append("<li>"+a[i].toString().replace(".", ",") +" LTL = "+(a[i]/ 3.4528).toFixed(2).toString().replace(".", ",") +" EUR"+"</li>");
    eurlt.append("<li>"+a[i].toString().replace(".", ",") +" EUR = "+(a[i]* 3.4528).toFixed(2).toString().replace(".", ",") +" LTL"+"</li>");
  }

}) (jQuery);
