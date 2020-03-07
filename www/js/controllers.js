
var firebaseConfig = {
    apiKey: "AIzaSyBBUMQySqPomz7pWZgKfDo2AOhtGuP-BEE",
    authDomain: "maxapp-503ee.firebaseapp.com",
    databaseURL: "https://maxapp-503ee.firebaseio.com",
    projectId: "maxapp-503ee",
    storageBucket: "maxapp-503ee.appspot.com",
    messagingSenderId: "943151558756",
    appId: "1:943151558756:web:c5ca42b6d70839c2692f71",
    measurementId: "G-9RXFD47JSG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
angular.module('starter.controllers', [])

.controller("registroCtrl",function($scope){
   $scope.obtener= function(datos){
    firebase.auth().createUserWithEmailAndPassword(datos.email, datos.password).catch(function(error) {
     // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      smoke.alert("PROFE PATOOOOO?", function(e){
  
}, {
  ok: "Yep",
  cancel: "Nope",
  classname: "custom-class"
});

      // ...
    });
  }
})

.controller('DashCtrl', function($scope) {
  $rootScope.Categorias=[
{
  Nombrecategoria:"Audio-Visuales","imagen" "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7_GwykI0ZEVtkyZByQuRRr7RfaqC5-6IdbO7UHOeKA_3Swib8"
  ].
}
{
  Nombrecategoria:"Celulares","imagen" "https://https://www.muyshopper.com/blog/wp-content/uploads/Mejores-celulares-gama-media-2019..jpeg"
  ]
}
 
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);cmd
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
