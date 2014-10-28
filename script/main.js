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
  
  var a = [0.99, 1.99, 2.99, 3.99, 4.99, 9.99, 14.99, 19.99],
    lteur = $('.lteur'),
    eurlt = $('.eurlt');

  for (var i = 0, b = a.length; i < b; i++ ) {
    lteur.append("<li>"+a[i].toString().replace(".", ",") +" Lt = "+(a[i]/ 3.4528).toFixed(2).toString().replace(".", ",") +" Eur"+"</li>");
    eurlt.append("<li>"+a[i].toString().replace(".", ",") +" Eur = "+(a[i]* 3.4528).toFixed(2).toString().replace(".", ",") +" Lt"+"</li>");
  }


}) (jQuery);