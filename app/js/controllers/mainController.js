app.controller('MainController', ['$scope', function($scope){
  $scope.topics = [
    {
      name: 'Экзамен Java 8',
      link: '#',
      subtopics: [{
        name: '---',
        link: '#'
      }
    ]
    },
    {
      name: 'Курсы',
      link: '#',
      subtopics: [{
        name: '---',
        link: '#'
      }
    ]
  },
  {
    name: 'Готовимся к собеседованию',
    link: '#',
    subtopics: [{
      name: 'Общие вопросы',
      link: '#'
    },
    {
      name: 'Тех вопросы',
      link: '#'
    },
    {
      name: 'Задачи',
      link: '#'
    },
    {
      name: 'Тестовые вопросы',
      link: '#'
    }
  ]
  },
  {
    name: 'Перевод',
    link: '#',
    subtopics: [{
      name: '---',
      link: '#'
    }
  ]
  },
  {
    name: 'Учебник java',
    link: '#',
    subtopics: [{
      name: '---',
      link: '#'
    }
  ]
  },
  {
    name: 'Frameworks',
    link: '#',
    subtopics: [{
      name: '---',
      link: '#'
    }
  ]
  },
  {
    name: 'NeoКоде',
    link: '#',
    subtopics: [{
      name: '---',
      link: '#'
    }
  ]
  },
  {
    name: 'Games',
    link: '#',
    subtopics: [{
      name: 'Можешь написать короче?',
      link: '#'
  }]
  },
  ];

  $scope.lessons = [
    'js/directives/html/intro.html',
    'js/directives/html/lesson1.html',
    'js/directives/html/lesson1-1.html',
    'js/directives/html/lesson1-2.html',
    'js/directives/html/lesson1-3.html',
    'js/directives/html/lesson1-4.html',
    'js/directives/html/lesson1-5.html',
    'js/directives/html/lesson1-8.html'
  ];

  $scope.selectedLesson = $scope.lessons[0];
  $scope.selectLesson = function(number){
    $scope.selectedLesson = $scope.lessons[number];
  }

  // angular.element(document).ready(function () {
  //       document.getElementById('msg').innerHTML = 'Hello';
  // });


}])
