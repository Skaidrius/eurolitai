(function($) {
  
  var ltInp = $('#lt'),
      eurInp = $('#eur'),
      changeLtLt1Inp = $('#changeLtLt1'),
      changeLtLt2Inp = $('#changeLtLt2'),
      changeLtInp = $('#changeLt'),
      changeEurInp = $('#changeEur'),
      changeEurEur1Inp = $('#changeEurEur1'),
      changeEurEur2Inp = $('#changeEurEur2'),
      lithuanianInp = $("#lithuanian"),
      englishInp = $("#english"),
      error = $('#error');
  
  // initialisation
  $(".english").addClass("hidden");
  lithuanianInp.addClass("active");

  //change language
  lithuanianInp.click(function(){
    $(this).addClass("active");
    englishInp.removeClass("active");
    $(".english").hide();
    $(".lithuanian").show();
  });
  englishInp.click(function(){
    $(this).addClass("active");
    lithuanianInp.removeClass("active");
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
  ltInp.keyup(function () {
    var lt = $(this).val(),
        eur = toEur(lt);
    if ($.isNumeric(lt)) {
      hideError();
      eurInp.val(eur).toString().replace(".", ",");
      showNumbers();
    } else {
      showError();
    }
  });
  
  eurInp.keyup(function () {
    var eur = $(this).val(),
        lt = toLt(eur);
    if ($.isNumeric(eur)) {
      hideError();
      ltInp.val(lt).toString().replace(".", ",");
      showNumbers();
    } else {
      showError();
    }
  });
  
  var hideError = function(){
    error.addClass("hidden");
    clear();
  };
  var showError = function() {
    error.removeClass("hidden").addClass("error");
  };
  
  //clearing functions
  var clear = function(){
    changeLtLt1Inp.val('');
    changeLtLt2Inp.val('');
    changeLtInp.val('');
    changeEurInp.val('');
    changeEurEur1Inp.val('');
    changeEurEur2Inp.val('');
  };
  var clear1 = function(){
    changeLtInp.val('');
    changeEurInp.val('');
    changeEurEur1Inp.val('');
    changeEurEur2Inp.val('');
  };
  var clear2 = function(){
    changeLtLt1Inp.val('');
    changeLtLt2Inp.val('');
    changeEurEur1Inp.val('');
    changeEurEur2Inp.val('');
  };
  var clear3 = function(){
    changeLtLt1Inp.val('');
    changeLtLt2Inp.val('');
    changeLtInp.val('');
    changeEurInp.val('');
  };

  // currency change calculator
  // first conversion LTL(EUR)=LTL+LTL
  changeLtLt1Inp.keyup(function () {
    clear1();
    var change,
        lt = $(this).val();
    change =  (ltInp.val() - lt).toFixed(2);
    changeLtLt2Inp.val(change).toString().replace(".", ",");
    showNumbers();
  });
  
  changeLtLt2Inp.keyup(function () {
    clear1();
    var change,
        lt = $(this).val();
    change = (ltInp.val() - lt).toFixed(2);
    changeLtLt1Inp.val(change).toString().replace(".", ",");
    showNumbers();
  });
  
  // second conversion LTL(EUR)=LTL+EUR
  changeLtInp.keyup(function () {
    clear2();
    var change,
        lt = $(this).val();
    change =  toEur(ltInp.val() - lt);
    changeEurInp.val(change).toString().replace(".", ",");
    showNumbers();
  });
  
  changeEurInp.keyup(function () {
    clear2();
    var change,
        eur = $(this).val();
    change = toLt(eurInp.val() - eur);
    changeLtInp.val(change).toString().replace(".", ",");
    showNumbers();
  });
  
  // third conversion LTL(EUR)=EUR+EUR
  changeEurEur1Inp.keyup(function () {
    clear3();
    var change,
        eur = $(this).val();
    change = (eurInp.val() - eur).toFixed(2);
    changeEurEur2Inp.val(change).toString().replace(".", ",");
    showNumbers();
  });
  
  changeEurEur2Inp.keyup(function () {
    clear3();
    var change,
        eur = $(this).val();
    change = (eurInp.val() - eur).toFixed(2);
    changeEurEur1Inp.val(change).toString().replace(".", ",");
    showNumbers();
  });
  
  // show calculation
  var showNumbers = function(){
    var explain = $('#explain'),
        lts = ltInp.val().toString().replace(".", ","),
        eurs = eurInp.val().toString().replace(".", ","),
        changeLtLt1 = changeLtLt1Inp.val().toString().replace(".", ","),
        changeLtLt2 = changeLtLt2Inp.val().toString().replace(".", ","),
        changeEurs = changeEurInp.val().toString().replace(".", ","),
        changeLts = changeLtInp.val().toString().replace(".", ","),
        changeEurEur1 = changeEurEur1Inp.val().toString().replace(".", ","),
        changeEurEur2 = changeEurEur2Inp.val().toString().replace(".", ","),
        calculationText;
    if (changeLtLt1 !=="" && changeLtLt2 !=="") {
      calculationText = "<p>" + lts +" Lt (" + eurs + " Eur) = " + changeLtLt1 +" Lt + " + changeLtLt2 + " Lt" + "</p>";
    } else if (changeEurs !=="" && changeLts !=="") {
      calculationText = "<p>" + lts +" Lt (" + eurs + " Eur) = " + changeLts +" Lt + " + changeEurs + " Eur" + "</p>";
    } else if (changeEurEur1 !=="" && changeEurEur2!=="" ) {
      calculationText = "<p>" + lts +" Lt (" + eurs + " Eur) = " + changeEurEur1 +" Eur + " + changeEurEur2 + " Eur" + "</p>";
    } else {
      calculationText = "<p>" + lts +" Lt (" + eurs + " Eur) " + "</p>";
    }
    explain.html(calculationText);
  };

}) (jQuery);