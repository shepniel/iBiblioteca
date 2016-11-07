// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','MainController','AuthorController','CurriculumController','BibliotecaController','BookController'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($urlRouterProvider,$stateProvider){

      $stateProvider  
      .state('main',{
        url:'/main',
        templateUrl:'templates/main.html',
        controller:'HomeCtrl'
      })
      .state('acceso',{
        url:'/acceso',
        templateUrl:'templates/ibiblioteca.html',
        controller:'ibibliotecaCtrl'
      })
      .state('consulta',{
        url:'/consulta',
        templateUrl:'templates/author.html',
        controller:'authorCtrl'
      })
      .state('curriculum',{
        url:'/curriculum',
        templateUrl:'templates/curriculum.html',
        controller:'curriculumCtrl'
      })
      .state('bookDetail',{
        url:'/book/:id',
        templateUrl:'templates/book.html',
        controller:'bookCtrl'
      })

      $urlRouterProvider.otherwise('main');
})
.factory('bookService', function() {     
var books = [       
      { title: 'La colmena', year: '1951', author: 'Camilo José Cela Trulock',          isbn: '843992688X', editorial: 'Anaya', cover: 'http://www.alianzaeditorial.es/jpg_g/alianza/LB00331701.jpg' }, 
      { title: 'La galatea', year: '1585', author: 'Miguel de Cervantes Saavedra',          isbn: '0936388110', editorial: 'Anaya', cover: "http://www.catedra.com/jpg_g/catedra/CA00004603.jpg" },       
      { title: 'El ingenioso hidalgo don Quijote de la Mancha', year: '1605',          author: 'Miguel de Cervantes Saavedra',          isbn: '0844273619', editorial: 'Anaya', cover: "http://www.algaida.es/jpg_g/algaida/AG00160001.jpg" },       
      { title: 'La dorotea', year: '1632', author: 'Félix Lope de Vega y Carpio',          isbn: '847039360X', editorial: 'Anaya', cover: "http://www.catedra.com/jpg_g/catedra/CA00095802.jpg" },       
      { title: 'La dragontea', year: '1602', author: 'Félix Lope de Vega y Carpio',          isbn: '8437624045', editorial: 'Anaya', cover: "http://www.catedra.com/jpg_g/catedra/CA00156001.jpg" }     
      ];     
  return {         
    getBooks: function() {             
      return books;         
    },         
    getBook: function(id) {             
      return books[id];         
    },     
  } 
});

