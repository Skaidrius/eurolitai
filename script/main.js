(function($) {
  //change language
  $(".english").addClass("hidden");
  $("#lithuanian").addClass("active");
  
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
  
  //validate 
  $('#lt').keyup(function () {
    var eur,
      lt = $(this).val();
    if ($.isNumeric(lt)) {
      $('#error').addClass("hide");
      eur = (lt / 3.4528).toFixed(2);
      return $('#eur').val(eur);
    } else {
      $('#error').removeClass("hide").addClass("error");
    }
  });
  $('#eur').keyup(function () {
    var lt,
      eur = $(this).val();
    if ($.isNumeric(eur)) {
      $('#error').addClass("hide");
      lt = (eur * 3.4528).toFixed(2);
      return $('#lt').val(lt);
    } else {
      $('#error').removeClass("hide").addClass("error");
    }
  });

}) (jQuery);