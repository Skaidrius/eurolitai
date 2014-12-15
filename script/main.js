(function($) {
  
  // initialisation
  $(".english").addClass("hidden");
  $("#lithuanian").addClass("active");

  //change language
  $("#lithuanian").click(function(){
    $(this).addClass("active");
    $("#english").removeClass("active");
    $(".english").removeClass("visible").addClass("hidden").addClass("center");
    $(".lithuanian").removeClass("hidden").addClass("visible");
  });
  $("#english").click(function(){
    $(this).addClass("active");
    $("#lithuanian").removeClass("active");
    $(".lithuanian").removeClass("visible").addClass("hidden");
    $(".english").removeClass("hidden").addClass("visible");
  });
  
  // show currency change calculator
  $('#showChange').click(function(){
    $('#changeCalculator').toggleClass("hidden"); 
  });
  
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
      $('#eur').val(eur);
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
      $('#lt').val(lt);
      showNumbers();
    } else {
      showError();
    }
  });
  
  var hideError = function(){
    $('#error').addClass("hide");
    $('#changeLt').val('');
    $('#changeEur').val('');
  };
  var showError = function() {
    $('#error').removeClass("hide").addClass("error");
  };

  // currency change calculator
  $('#changeLt').keyup(function () {
    var change,
        lt = $(this).val();
      change =  toEur($('#lt').val() - lt);
      $('#changeEur').val(change);
      showNumbers();
  });
  
  $('#changeEur').keyup(function () {
    var change,
        eur = $(this).val();
      change = toLt($('#eur').val() - eur);
      $('#changeLt').val(change);
      showNumbers();
  });
  // show calculation
  var showNumbers = function(){
    var explain = $('#explain'),
        ltl = $('#lt').val().toString().replace(".", ","),
        eurs = $('#eur').val().toString().replace(".", ","),
        changeEurs = $('#changeEur').val().toString().replace(".", ","),
        changeLts = $('#changeLt').val().toString().replace(".", ","),
        calculationText;
    if (changeEurs > 0 || changeLts > 0) {
      calculationText = "<p>" + ltl +" LTL/ " + eurs + " EUR = " + changeLts +" LTL +" + changeEurs + " EUR" + "</p>";
    } else {
      calculationText = "<p>" + ltl +" LTL/ " + eurs + " EUR " + "</p>";
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