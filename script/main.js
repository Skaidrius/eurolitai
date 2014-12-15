(function($) {
  
  // initialisation
  $(".english").addClass("hidden");
  $("#lithuanian").addClass("active");
  $('#changeCalculator').addClass("hidden");

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
      $('#error').addClass("hide");
      return $('#eur').val(eur);
    } else {
      $('#error').removeClass("hide").addClass("error");
    }
  });
  
  $('#eur').keyup(function () {
    var eur = $(this).val(),
        lt = toLt(eur);
    if ($.isNumeric(eur)) {
      $('#error').addClass("hide");
      return $('#lt').val(lt);
    } else {
      $('#error').removeClass("hide").addClass("error");
    }
  });

  // currency change calculator
  $('#changeLt').keyup(function () {
    var change,
        lt = $(this).val(),
        eur = toLt(eur);
      change =  toEur($('#lt').val() - lt);
      return $('#changeEur').val(change);
  });
  
  $('#changeEur').keyup(function () {
    var change,
        eur = $(this).val(),
        lt = toEur(lt);
      change = toLt($('#eur').val() - eur);
      return $('#changeLt').val(change);
  });
  
  
}) (jQuery);