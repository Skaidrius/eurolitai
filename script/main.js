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
    $('#changeLt').val('');
    $('#changeEur').val('');
  };
  var showError = function() {
    $('#error').removeClass("hidden").addClass("error");
  };

  // currency change calculator
  $('#changeLt').keyup(function () {
    var change,
        lt = $(this).val();
      change =  toEur($('#lt').val() - lt);
      $('#changeEur').val(change).toString().replace(".", ",");
      showNumbers();
  });
  
  $('#changeEur').keyup(function () {
    var change,
        eur = $(this).val();
      change = toLt($('#eur').val() - eur);
      $('#changeLt').val(change).toString().replace(".", ",");
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
      calculationText = "<p>" + ltl +" LTL (" + eurs + " EUR) = " + changeLts +" LTL + " + changeEurs + " EUR" + "</p>";
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
