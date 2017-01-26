angular.module('app', [])

.controller('mainCtrl', function($scope){

  $scope.itemsList = [
    {'name': 'Belgien'},
    {'name': 'Litauen'},
    {'name': 'Estland'},
    {'name': 'Polen'},
    {'name': 'Ungarn'},
    {'name': 'Tschechische Republik'},
    {'name': 'Rumänien'},
    {'name': 'Slowenien'},
    {'name': 'Bulgarien'},
    {'name': 'Slowakei'},
    {'name': 'Griechenland'},
    {'name': 'Deutschland'},
    {'name': 'Frankreich'},
    {'name': 'Malta'},
    {'name': 'Vereinigtes Königreich'},
    {'name': 'Niederlande'},
    {'name': 'Kroatien'},
    {'name': 'Portugal'},
    {'name': 'Dänemark'},
    {'name': 'Österreich'},
    {'name': 'Spanien'},
    {'name': 'Schweden'},
    {'name': 'Italien'},
    {'name': 'Zypern'},
    {'name': 'Letland'},
    {'name': 'Irland'},
    {'name': 'Luxemburg'},
    {'name': 'Finnland'}
  ];
})

.directive('dropdownList',function( $timeout ){
  return {
    restrict: 'E',
    scope: {
      itemsList: '=',
      placeholder: '@'
    },
    template: '<input type="text" ng-model="search" placeholder="{{ placeholder }}" />' +
				'<div class="search-item-list"><ul class="list">' +
				'<li ng-repeat="item in itemsList | filter:search" ng-click="chooseItem( item )">{{ item.name }}' +
    		 '</li>' +
				'</ul></div>',
    link: function(scope, el, attr){
        var $listContainer = angular.element( el[0].querySelectorAll('.search-item-list')[0] );
        el.find('input').bind('focus',function(){
          $listContainer.addClass('show');
        });
        el.find('input').bind('blur',function(){
          $timeout(function(){ $listContainer.removeClass('show') }, 200);
        });

      	scope.chooseItem = function( item ){
				 scope.search = item.name;
         $listContainer.removeClass('show');
			 }
    }
  }
});

$('.search_icon').click(function() {
  var country = $('#select_country input').val();
  if (country=="Tschechische Republik") {
    country = "Tschechische";
  } else if (country=="Vereinigtes Königreich") {
    country = "UK";
  } else if (country=="Dänemark") {
    country = "Daenemark";
  } else if (country=="Österreich") {
    country = "Oesterreich";
  } else if (country=="Rumänien") {
    country = "Rumaenien";
  }
  $(location).attr('href', './'+ country + '.html');
});
