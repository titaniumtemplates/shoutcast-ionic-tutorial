angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

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
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('StreamController', function($interval, streamService) {

var isPlaying = false;
var stream;
var timer;
var vm = angular.extend(this, {
  togglePlay: togglePlay,
  isPlaying: isPlaying,
  info: null
});
// *********************************************************************
function togglePlay() {
  if (vm.isPlaying) {
    pause();
  } else {
    play();
  }
  vm.isPlaying = isPlaying = !isPlaying;
}

function play() {
  if (window.Stream) {
    stream = new window.Stream('http://198.100.125.242:80/');
    // Play audio
    stream.play();
  }
  getStreamInfo();
  timer = $interval(function() {
      getStreamInfo();
  }, 5000);
}

function pause() {
  vm.info = null;
  $interval.cancel(timer);
  if (!stream) {
    return;
  }
  stream.stop();
}

function getStreamInfo() {
  streamService.getStreamInfo().then(function(info) {
    vm.info = info;
  }, function() {
    vm.info = null;
  });
}
});
