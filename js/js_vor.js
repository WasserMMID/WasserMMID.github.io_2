var table = [
  [ "Belgien", "1", "1", 1, 1 ,1],
  [ "Deutschland", "2", "5", 2, 1 ,2],
  [ "Frankreich", "3", "3", 3,1,3],
  [ "Dänemark", "4", "6", 4,1,4 ],
  [ "Großbritannien", "5", "10",5,1,5],
  [ "Finnland", "6", "4", 2, 2, 6],
  [ "Malta", "7", "2", 3, 2, 7 ],
  [ "Niederland", "8", "8", 4, 2, 8 ],
  [ "Spanien", "9", "7", 5, 2, 9 ],
  [ "Litauen", "10", "9", 1, 2, 10 ],
  [ "Belgien", "11", "1", 1, 3, 11 ],
  [ "Deutschland", "12", "5", 2, 3, 12 ],
  [ "Frankreich", "13", "3", 3, 3, 13 ],
  [ "Dänemark", "14", "6", 4, 3, 14 ],
  [ "Großbritannien", "15", "10",5 , 3, 15],
  [ "Finnland", "16", "4", 2, 4, 16 ],
  [ "Malta", "17", "2", 3, 4, 17 ],
  [ "Niederland", "18", "8", 4, 4, 18],
  [ "Spanien", "19", "7", 5, 4, 19 ],
  [ "Litauen", "20", "9", 1, 4, 20 ],
  [ "Belgien", "21", "1", 1, 5, 21 ],
  [ "Deutschland", "22", "5", 2, 5, 22 ],
  [ "Frankreich", "23", "3", 3,5, 23],
  [ "Dänemark", "24", "6", 4,5, 24 ],
  [ "Großbritannien", "25", "10",5,5, 25],
  [ "Finnland", "26", "4", 2, 6 , 26],
  [ "Malta", "27", "2", 3, 6, 27 ],
  [ "Niederland", "28", "8", 1, 6, 28 ]
];


$(document).ready(function() {
  for ( var i = 0; i < table.length; i ++ ) {

    var item = table[ i ];

    var element = document.createElement( 'a' );
    element.className = 'island island_'+item[1];
    element.href= item[0]+'.html';

    $('.islands').append(element);

  }
});

ressourcen();
