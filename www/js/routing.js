



app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
    })
    
    .state('profil', {
      url: '/profil',
      templateUrl: 'templates/profil.html',
    })

    .state('achievmentsManagment', {
      url: "/achievmentsManagment",
      templateUrl: "templates/achievmentsManagment.html"
    })


  $urlRouterProvider.otherwise("/home");

});