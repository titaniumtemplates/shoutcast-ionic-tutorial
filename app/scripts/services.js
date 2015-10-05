angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('streamService', function($http, $q){

    var streamUrl = 'http://198.100.125.242:80/';
    var metadataUrl = streamUrl + '7.html';
    var contentRegex = /<body>(.*)<\/body>/;
    var itunesSearchUrl = 'https://itunes.apple.com/search?term=';
    var resolutionRegex = /100x100/;

    var service = {
      getStreamInfo: getStreamInfo
    };
    return service;
    // ***************************************************************************
    function getStreamInfo() {
      return $http.get(metadataUrl).then(function(response) {
        var title = parseShoutcastResponse(response.data);
        if (!title) {
          return {};
        }
        return getCover(title).then(function(coverUrl) {
          return {
            title: title,
            coverUrl: coverUrl
          };
        });
      });
    }

    function getCover(title) {
      return $http.get(itunesSearchUrl + title).then(function(response) {
        var item = response.data.results[0];
        if (!item || !item.artworkUrl100) {
          return null;
        }
        return item.artworkUrl100.replace(resolutionRegex, '500x500');
      });
    }

    function parseShoutcastResponse(html) {
      var content = html.match(contentRegex)[1];
      var parts = content.split(',');
      if (parts.length < 7 || !parts[6]) {
        return null;
      }
      return parts[6];
    }
});
