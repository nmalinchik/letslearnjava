app.controller('MainController', ['$scope', function($scope){
  $scope.topics = [
    {
      name: 'Задания',
      link: '#',
      subtopics: [{
        name: 'Видео',
        link: '#'
      },
      {
        name: 'Аудио',
        link: '#'
      },
      {
        name: 'Уроки',
        link: '#'
      }
    ]
    },
    {
      name: 'Курсы',
      link: '#',
      subtopics: [{
        name: 'Java',
        link: '#'
      },
      {
        name: 'Spring',
        link: '#'
      }
    ]
  },
  {
    name: 'Игры',
    link: '#',
    subtopics: [{
      name: 'Дуэль',
      link: '#'
    },
    {
      name: 'Best',
      link: '#'
    }
  ]
  },
  ];



}])
