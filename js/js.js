$(document).ready(function() {

$('#exploreButton').click(function() {
  $('#exploreButton').removeClass('display_on').addClass('display_off');
  $('#introYN').addClass('display_on').removeClass('display_off');

});


$('.touchpoint1').click(function() {
  $('.touchpoint').removeClass('active');
  $('.touchpoint1').addClass('active');
  $('.intro_detail').removeClass('display_on').addClass('display_off');
  $('.detail1').removeClass('display_off').addClass('display_on');
});
$('.touchpoint2, .divpoint2').click(function() {
  $('.touchpoint').removeClass('active');
  $('.touchpoint2').addClass('active');
  $('.intro_detail').removeClass('display_on').addClass('display_off');
  $('.detail2').removeClass('display_off').addClass('display_on');

});
$('.touchpoint3, .divpoint3').click(function() {
  $('.touchpoint').removeClass('active');
  $('.touchpoint3').addClass('active');
  $('.intro_detail').removeClass('display_on').addClass('display_off');
  $('.detail3').removeClass('display_off').addClass('display_on');
});
$('.touchpoint4, .divpoint4').click(function() {
  $('.touchpoint').removeClass('active');
  $('.touchpoint4').addClass('active');
  $('.intro_detail').removeClass('display_on').addClass('display_off');
  $('.detail4').removeClass('display_off').addClass('display_on');
});
$('.touchpoint5, .divpoint5').click(function() {
  $('.touchpoint').removeClass('active');
  $('.touchpoint5').addClass('active');
  $('.intro_detail').removeClass('display_on').addClass('display_off');
  $('.detail5').removeClass('display_off').addClass('display_on');
});
$('.touchpoint6, .divpoint6').click(function() {
  $('.touchpoint').removeClass('active');
  $('.touchpoint6').addClass('active');
  $('.intro_detail').removeClass('display_on').addClass('display_off');
  $('.detail6').removeClass('display_off').addClass('display_on');
});
$('.touchpoint7, .divpoint7').click(function() {
  $('.touchpoint').removeClass('active');
  $('.touchpoint7').addClass('active');
  $('.intro_detail').removeClass('display_on').addClass('display_off');
  $('.detail7').removeClass('display_off').addClass('display_on');
});
$('.touchpoint8, .divpoint8').click(function() {
  $('.touchpoint').removeClass('active');
  $('.touchpoint8').addClass('active');
  $('.intro_detail').removeClass('display_on').addClass('display_off');
  $('.detail8').removeClass('display_off').addClass('display_on');
});
$('.touchpoint9, .divpoint9').click(function() {
  $('.touchpoint').removeClass('active');
  $('.touchpoint9').addClass('active');
  $('.intro_detail').removeClass('display_on').addClass('display_off');
  $('.detail9').removeClass('display_off').addClass('display_on');
});
$('.touchpoint10, .divpoint10').click(function() {
  $('.touchpoint').removeClass('active');
  $('.touchpoint10').addClass('active');
  $('.intro_detail').removeClass('display_on').addClass('display_off');
  $('.detail10').removeClass('display_off').addClass('display_on');
});
$('.touchpoint11, .divpoint11').click(function() {
  $('.touchpoint').removeClass('active');
  $('.touchpoint11').addClass('active');
  $('.intro_detail').removeClass('display_on').addClass('display_off');
  $('.detail11').removeClass('display_off').addClass('display_on');
});
$('.touchpoint12, .divpoint12').click(function() {
  $('.touchpoint').removeClass('active');
  $('.touchpoint12').addClass('active');
  $('.intro_detail').removeClass('display_on').addClass('display_off');
  $('.detail12').removeClass('display_off').addClass('display_on');
});
$('.touchpoint13, .divpoint13').click(function() {
  $('.touchpoint').removeClass('active');
  $('.touchpoint13').addClass('active');
  $('.intro_detail').removeClass('display_on').addClass('display_off');
  $('.detail13').removeClass('display_off').addClass('display_on');
});
$('.touchpoint14, .divpoint14').click(function() {
  $('.touchpoint').removeClass('active');
  $('.touchpoint14').addClass('active');
  $('.intro_detail').removeClass('display_on').addClass('display_off');
  $('.detail14').removeClass('display_off').addClass('display_on');
});

//intro bg
$('.intro_nav .touchpoint, .divpoint').click(function() {
  $('.introBg img').attr('src','img/zwei_inseln_intro.svg');
  $('.industrie').removeClass('display_on').addClass('display_off');
  $('.regen').removeClass('display_on').addClass('display_off');
  $('.skip_intro').removeClass('display_off').addClass('display_on');
  $('.to_islands').removeClass('display_on').addClass('display_off');
});

$('.touchpoint1, .intro_touchpoint1').click(function() {
  $('.introBg img').attr('src','img/zwei_inseln_intro.svg');
  $('.regen').removeClass('display_off').addClass('display_on');
  $('.industrie').removeClass('display_off').addClass('display_on');
});
$('.intro_touchpoint2, .intro_con .divpoint2').click(function() {
  $('.introBg img').attr('src','img/intro/intro_Wasserressourcen.svg');
});
$('.intro_touchpoint3, .intro_con .divpoint3').click(function() {
  $('.introBg img').attr('src','img/intro/intro_Mensch.svg');
});
$('.intro_touchpoint4, .intro_con .divpoint4').click(function() {
  $('.introBg img').attr('src','img/intro/intro_Wirtschaft.svg');
});
$('.intro_touchpoint5, .intro_con .divpoint5').click(function() {
  $('.introBg img').attr('src','img/intro/intro_Entnahme.svg');
});
$('.intro_touchpoint6, .intro_con .divpoint6').click(function() {
  $('.introBg img').attr('src','img/intro/intro_Klaeranlage.svg');
});
$('.intro_touchpoint7, .intro_con .divpoint7').click(function() {
  $('.introBg img').attr('src','img/intro/intro_abfluss.svg');
});
$('.intro_touchpoint8, .intro_con .divpoint8').click(function() {
  $('.introBg img').attr('src','img/intro/intro_regen_TRANS.svg');
  $('.regen').removeClass('display_off').addClass('display_on');
});
$('.intro_touchpoint9, .intro_con .divpoint9').click(function() {
  $('.introBg img').attr('src','img/intro/intro_regen_TRANS.svg');
  $('.industrie').removeClass('display_off').addClass('display_on');
});
$('.intro_touchpoint10, .intro_con .divpoint10').click(function() {
  $('.introBg img').attr('src','img/intro/intro_intZufluss.svg');
});
$('.intro_touchpoint11, .intro_con .divpoint11').click(function() {
  $('.introBg img').attr('src','img/intro/intro_oberflaechen.svg');
});
$('.intro_touchpoint12, .intro_con .divpoint12').click(function() {
  $('.introBg img').attr('src','img/intro/intro_exZufluss.svg');
});
$('.intro_touchpoint13, .intro_con .divpoint13').click(function() {
  $('.introBg img').attr('src','img/intro/intro_brunnen.svg');
});
$('.intro_touchpoint14, .intro_con .divpoint14').click(function() {
  $('.introBg img').attr('src','img/zwei_inseln_intro.svg');
  $('.skip_intro').removeClass('display_on').addClass('display_off');
  $('.to_islands').removeClass('display_off').addClass('display_on');
});


//detail Bg ändern
$('.insel_detail_con .intro_nav .touchpoint1').click(function() {
  $('.introBg img').attr('src','../img/insel.svg');
});
$('.insel_detail_con .intro_nav .touchpoint2, .island_detail .divpoint2').click(function() {
  $('.introBg img').attr('src','../img/layout_insel_detail/Ressourcen.svg');
});
$('.insel_detail_con .intro_nav .touchpoint3, .island_detail .divpoint3').click(function() {
  $('.introBg img').attr('src','../img/layout_insel_detail/Verbrauch.svg');
});
$('.insel_detail_con .intro_nav .touchpoint4, .island_detail .divpoint4').click(function() {
  $('.introBg img').attr('src','../img/layout_insel_detail/Industrie.svg');
});
$('.insel_detail_con .intro_nav .touchpoint5, .island_detail .divpoint5').click(function() {
  $('.introBg img').attr('src','../img/layout_insel_detail/Entnahme.svg');
});
$('.insel_detail_con .intro_nav .touchpoint6, .island_detail .divpoint6').click(function() {
  $('.introBg img').attr('src','../img/layout_insel_detail/Klaeranlage.svg');
});
$('.insel_detail_con .intro_nav .touchpoint7, .island_detail .divpoint7').click(function() {
  $('.introBg img').attr('src','../img/layout_insel_detail/Abfluss.svg');
});


function bes_show(){

  $('.island').mouseover(function() {
    $('.island_des').removeClass('display_on').addClass('display_off');
  });

  $('.island_1').mouseover(function() {
    $('.island_des_1').removeClass('display_off').addClass('display_on');
  });

  $('.island_2').mouseover(function() {
    $('.island_des_2').removeClass('display_off').addClass('display_on');
  });

  $('.island_3').mouseover(function() {
    $('.island_des_3').removeClass('display_off').addClass('display_on');
  });

  $('.island_4').mouseover(function() {
    $('.island_des_4').removeClass('display_off').addClass('display_on');
  });

  $('.island_5').mouseover(function() {
    $('.island_des_5').removeClass('display_off').addClass('display_on');
  });

  $('.island_6').mouseover(function() {
    $('.island_des_6').removeClass('display_off').addClass('display_on');
  });

  $('.island_7').mouseover(function() {
    $('.island_des_7').removeClass('display_off').addClass('display_on');
  });

  $('.island_8').mouseover(function() {
    $('.island_des_8').removeClass('display_off').addClass('display_on');
  });

  $('.island_9').mouseover(function() {
    $('.island_des_9').removeClass('display_off').addClass('display_on');
  });

  $('.island_10').mouseover(function() {
    $('.island_des_10').removeClass('display_off').addClass('display_on');
  });

  $('.island_11').mouseover(function() {
    $('.island_des_11').removeClass('display_off').addClass('display_on');
  });

  $('.island_12').mouseover(function() {
    $('.island_des_12').removeClass('display_off').addClass('display_on');
  });

  $('.island_13').mouseover(function() {
    $('.island_des_13').removeClass('display_off').addClass('display_on');
  });

  $('.island_14').mouseover(function() {
    $('.island_des_14').removeClass('display_off').addClass('display_on');
  });

  $('.island_15').mouseover(function() {
    $('.island_des_15').removeClass('display_off').addClass('display_on');
  });

  $('.island_16').mouseover(function() {
    $('.island_des_16').removeClass('display_off').addClass('display_on');
  });

  $('.island_17').mouseover(function() {
    $('.island_des_17').removeClass('display_off').addClass('display_on');
  });

  $('.island_18').mouseover(function() {
    $('.island_des_18').removeClass('display_off').addClass('display_on');
  });

  $('.island_19').mouseover(function() {
    $('.island_des_19').removeClass('display_off').addClass('display_on');
  });

  $('.island_20').mouseover(function() {
    $('.island_des_20').removeClass('display_off').addClass('display_on');
  });

  $('.island_21').mouseover(function() {
    $('.island_des_21').removeClass('display_off').addClass('display_on');
  });

  $('.island_22').mouseover(function() {
    $('.island_des_22').removeClass('display_off').addClass('display_on');
  });

  $('.island_23').mouseover(function() {
    $('.island_des_23').removeClass('display_off').addClass('display_on');
  });

  $('.island_24').mouseover(function() {
    $('.island_des_24').removeClass('display_off').addClass('display_on');
  });

  $('.island_25').mouseover(function() {
    $('.island_des_25').removeClass('display_off').addClass('display_on');
  });

  $('.island_26').mouseover(function() {
    $('.island_des_26').removeClass('display_off').addClass('display_on');
  });

  $('.island_27').mouseover(function() {
    $('.island_des_27').removeClass('display_off').addClass('display_on');
  });

  $('.island_28').mouseover(function() {
    $('.island_des_28').removeClass('display_off').addClass('display_on');
  });
};



$('.island').mouseout(function() {
  $('.island_des').removeClass('display_on').addClass('display_off');
});

$('.button_back').click(function() {
  $('.intro_detail').removeClass('display_on').addClass('display_off');
});

var table= [
// [„Land“,“Position_Ressource“,“Zahl“,“Position_Verbrauch“,“Zahl“,“Position_NACE“,“Zahl,“Position_Entnahme“,“Zahl“,“Position_Klaerung“,“Zahl“]
["Belgien","22","19.9","26","26","17","15","9","5082","5","84","Belgien"],
["Litauen","21","24.5","25","35","20","12.5","16","650","kein Daten","kein Daten","Litauen"],
["Estland","25","12.3","24","43","5","43","12","1748","7","82.1","Estland"],
["Polen","16","63.1","23","43","23","10","4","11243","10","70.2","Polen"],
["Ungarn","5","116.4","22","46","22","12","10","5051","9","72.6","Ungarn"],
["Tschechische Republik","24","16","21","47","18","14","13","1650","8","79.8","Tschechische"],
["Rumaenien","18","42.3","20","49","12","20","7","6418","15","35.5","Romaenien"],
["Slowenien","20","32.1","19","52","19","13","14","1156","13","54.9","Slowenien"],
["Bulgarien","10","106.7","18","53","10","21","8","5468","14","54.5","Bulgarien"],
["Slowakei","13","80.3","17","54","4","54","17","637","kein Daten","kein Daten","Slowakei"],
["Griechenland","15","72","16","55","9","23","kein Daten","kein Daten","kein Daten","kein Daten","Griechenland"],
["Deutschland","1","188","15","56","21","12.5","2","33036","kein Daten","kein Daten","Deutschland"],
["Frankreich","2","186.3","14","62","25","5","3","30008","12","55.4","Frankreich"],
["Malta","28","0.1","13","64","11","21","21","45","2","92.9","Malta"],
["Vereinigtes Königreich","4","172.9","12","64","15","18","6","8214","kein Daten","kein Daten","UK"],
["Niederlande","11","91.8","11","65","16","18","5","10724","kein Daten","kein Daten","Niederlande"],
["Kroatien","7","111.7","10","66","13","20","18","633","kein Daten","kein Daten","Kroatien"],
["Portugal","14","73.6","9","67","24","6","kein Daten","kein Daten","kein Daten","kein Daten","Portugal"],
["Dänemark","23","16.3","8","68","8","24.5","15","652","3","90.1","Daenemark"],
["Österreich","12","84","7","69","7","25","kein Daten","kein Daten","kein Daten","kein Daten","Oesterreich"],
["Spanien","8","111.1","6","76","14","19","1","37349","kein Daten","kein Daten","Spanien"],
["Schweden","3","186.2","5","79","6","26","11","2690","4","87","Schweden"],
["Italien","6","115.8","4","87.5","3","87.5","kein Daten","kein Daten","kein Daten","kein Daten","Italien"],
["Zypern","27","0.3","3","93.75","26","3","19","255","kein Daten","kein Daten","Zypern"],
["Letland","19","33.7","2","112.5","2","112.5","20","247","11","67.2","Lettland"],
["Irland","17","51","1","144","1","144","kein Daten","kein Daten","kein Daten","kein Daten","Irland"],
["Luxemburg","26","1.6","kein Daten","kein Daten","kein Daten","kein Daten","22","43","1","96.3","Luxemburg"],
["Finnland","9","110","kein Daten","kein Daten","kein Daten","kein Daten","kein Daten","kein Daten","6","83","Finnland"]


];


function des_show() {
  for( var i = 0; i < table.length; i ++) {

    var item = table[ i ];

    $('.island_'+ item[1]).mouseover(function() {
      $('.island_des_'+ item[1]).removeClass('display_off').addClass('display_on');
    });
  }
};

function initIslands(){
  for ( var i = 0; i < table.length; i ++ ) {

    var item = table[ i ];

    var floatIsland = document.createElement( 'a' );
    floatIsland.className = 'island island_'+item[1];
    floatIsland.href= 'laender/' + item[11] + '.html';

    $('.islands').append(floatIsland);

    $('.island_' + item[1]).css('background', 'url(./img/laender/'+ item[11] +'.svg)');
    $('.island_' + item[1]).css('background-repeat', 'no-repeat');
    $('.island_' + item[1]).css('top', Math.floor(Math.random() * 360) + 80  +'px');
    $('.island_' + item[1]).css('left', Math.floor(Math.random() * 800) + 500 +'px');
    $('.island_' + item[1]).css('z-index', Math.floor(Math.random() * 700)* (-1) +'px');
    $('.island_' + item[1]).css('-webkit-animation-name', 'none');
    $('.island_' + item[1]).css('-webkit-animation-name', 'sizeChange'+ item[1]);

  }
};

function ressourcen(){
  for ( var i = 0; i < table.length; i ++ ) {

    var item = table[ i ];

    var floatIsland = document.createElement( 'a' );
    floatIsland.className = 'island island_'+item[1];
    floatIsland.href= 'laender/' + item[0] + '.html';

    $('.islands').append(floatIsland);

    $('.island_' + item[1]).css('background', 'url(./img/laender/'+ item[11] +'.svg)');
    $('.island_' + item[1]).css('background-repeat', 'no-repeat');


    var floatNumber = document.createElement( 'div' );
    floatNumber.className = 'island_des_nr_'+item[1];
    var numberContent = ""+item[2]+"";
    $('.islands').append(floatNumber);
    $('.island_des_nr_' + item[1]).append(numberContent);

    var numberBes = document.createElement( 'div' );
    numberBes.className = 'island_des island_des_'+ item[1] + ' display_off';
    var besContent = "<h2>" + item[0] + "</h2><p>" + item[2] + "<br>Mrd. m&sup3</p>";
    $('.islands').append(numberBes);
    $('.island_des_' + item[1]).append(besContent);
  }
};

function verbrauch(){
  for ( var i = 0; i < table.length; i ++ ) {

    var item = table[ i ];

    var floatIsland = document.createElement( 'a' );
    floatIsland.className = 'island island_'+ item[3];
    floatIsland.href= 'laender/' + item[0]+'.html';

    $('.islands').append(floatIsland);

    $('.island_' + item[3]).css('background', 'url(./img/laender/'+ item[11] +'.svg)');
    $('.island_' + item[3]).css('background-repeat', 'no-repeat');

    var floatNumber = document.createElement( 'div' );
    floatNumber.className = 'island_des_nr_'+item[3];
    var numberContent = ""+item[4]+"";
    $('.islands').append(floatNumber);
    $('.island_des_nr_' + item[3]).append(numberContent);

    var numberBes = document.createElement( 'div' );
    numberBes.className = 'island_des island_des_'+ item[3] + ' display_off';
    var besContent = "<h2>" + item[0] + "</h2><p>" + item[4] + " m&sup3<br>/Einwohner</p>";
    $('.islands').append(numberBes);
    $('.island_des_' + item[3]).append(besContent);
  }
};

function wirtschaft(){
  for ( var i = 0; i < table.length; i ++ ) {

    var item = table[ i ];

    var floatIsland = document.createElement( 'a' );
    floatIsland.className = 'island island_'+item[5];
    floatIsland.href= 'laender/' + item[0]+'.html';

    $('.islands').append(floatIsland);

    $('.island_' + item[5]).css('background', 'url(./img/laender/'+ item[11] +'.svg)');
    $('.island_' + item[5]).css('background-repeat', 'no-repeat');

    var floatNumber = document.createElement( 'div' );
    floatNumber.className = 'island_des_nr_'+ item[5];
    var numberContent = ""+ item[6] +"";
    $('.islands').append(floatNumber);
    $('.island_des_nr_' + item[5]).append(numberContent);

    var numberBes = document.createElement( 'div' );
    numberBes.className = 'island_des island_des_'+ item[5] + ' display_off';
    var besContent = "<h2>" + item[0] + "</h2><p>" + item[6] + "<br/> Mio m&sup3</p>";
    $('.islands').append(numberBes);
    $('.island_des_' + item[5]).append(besContent);
  }
};

function entnahme(){
  for ( var i = 0; i < table.length; i ++ ) {

    var item = table[ i ];

    var floatIsland = document.createElement( 'a' );
    floatIsland.className = 'island island_'+item[7];
    floatIsland.href= 'laender/' + item[0]+'.html';

    $('.islands').append(floatIsland);

    $('.island_' + item[7]).css('background', 'url(./img/laender/'+ item[11] +'.svg)');
    $('.island_' + item[7]).css('background-repeat', 'no-repeat');

    var floatNumber = document.createElement( 'div' );
    floatNumber.className = 'island_des_nr_'+item[7];
    var numberContent = ""+item[8]+"";
    $('.islands').append(floatNumber);
    $('.island_des_nr_' + item[7]).append(numberContent);

    var numberBes = document.createElement( 'div' );
    numberBes.className = 'island_des island_des_'+ item[7] + ' display_off';
    var besContent = "<h2>" + item[0] + "</h2><p>" + item[8] + "<br/> Mio m&sup3</p>";
    $('.islands').append(numberBes);
    $('.island_des_' + item[7]).append(besContent);
  }
};

function klaerung(){
  for ( var i = 0; i < table.length; i ++ ) {

    var item = table[ i ];

    var floatIsland = document.createElement( 'a' );
    floatIsland.className = 'island island_'+item[9];
    floatIsland.href= 'laender/' + item[0]+'.html';

    $('.islands').append(floatIsland);

    $('.island_' + item[9]).css('background', 'url(./img/laender/'+ item[11] +'.svg)');
    $('.island_' + item[9]).css('background-repeat', 'no-repeat');

    var floatNumber = document.createElement( 'div' );
    floatNumber.className = 'island_des_nr_'+item[9];
    var numberContent = ""+item[10]+"";
    $('.islands').append(floatNumber);
    $('.island_des_nr_' + item[9]).append(numberContent);

    var numberBes = document.createElement( 'div' );
    numberBes.className = 'island_des island_des_'+ item[9] + ' display_off';
    var besContent = "<h2>" + item[0] + "</h2><p>" + item[10] + "<br>%</p>";
    $('.islands').append(numberBes);
    $('.island_des_' + item[9]).append(besContent);
  }
};

des_show();
initIslands();

$('.island_des_title').removeClass('display_on').addClass('display_off');
$('.island_des_title_init').removeClass('display_off').addClass('display_on');

$('.ressourcen').click(function(){
    $('.islands').empty();

    // $('.islands').append(island_des_title_1);
    $('.island_des_title').removeClass('display_on').addClass('display_off');
    $('.island_des_title_1').removeClass('display_off').addClass('display_on');

    $('.ressourcen').addClass('active');
    $('.verbrauch').removeClass('active');
    $('.wirtschaft').removeClass('active');
    $('.entnahme').removeClass('active');
    $('.klaerung').removeClass('active');
    ressourcen();
    bes_show();
  }
);

$('.verbrauch').click(function(){
  $('.islands').empty();

  // $('.islands').append(island_des_title_1);
  $('.island_des_title').removeClass('display_on').addClass('display_off');
  $('.island_des_title_2').removeClass('display_off').addClass('display_on');

  $('.ressourcen').removeClass('active');
  $('.verbrauch').addClass('active');
  $('.wirtschaft').removeClass('active');
  $('.entnahme').removeClass('active');
  $('.klaerung').removeClass('active');
  verbrauch();
  bes_show();
});

$('.wirtschaft').click(function(){
  $('.islands').empty();

  // $('.islands').append(island_des_title_1);
  $('.island_des_title').removeClass('display_on').addClass('display_off');
  $('.island_des_title_3').removeClass('display_off').addClass('display_on');

  $('.ressourcen').removeClass('active');
  $('.verbrauch').removeClass('active');
  $('.wirtschaft').addClass('active');
  $('.entnahme').removeClass('active');
  $('.klaerung').removeClass('active');
  wirtschaft();
  bes_show();

});

$('.entnahme').click(function(){
  $('.islands').empty();

  // $('.islands').append(island_des_title_1);
  $('.island_des_title').removeClass('display_on').addClass('display_off');
  $('.island_des_title_4').removeClass('display_off').addClass('display_on');

  $('.ressourcen').removeClass('active');
  $('.verbrauch').removeClass('active');
  $('.wirtschaft').removeClass('active');
  $('.entnahme').addClass('active');
  $('.klaerung').removeClass('active');
  entnahme();
  bes_show();

});

$('.klaerung').click(function(){
  $('.islands').empty();

  $('.island_des_title').removeClass('display_on').addClass('display_off');
  $('.island_des_title_5').removeClass('display_off').addClass('display_on');

  $('.ressourcen').removeClass('active');
  $('.verbrauch').removeClass('active');
  $('.wirtschaft').removeClass('active');
  $('.entnahme').removeClass('active');
  $('.klaerung').addClass('active');
  klaerung();
  bes_show();

});



});
