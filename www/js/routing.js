



app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('profil', {
      url: '/profil',
      templateUrl: 'templates/profil.html',
    })

    .state('achievmentsManagment', {
      url: "/achievmentsManagment",
      templateUrl: "templates/achievmentsManagment.html"
    })

    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "index.html"
    });


  // $urlRouterProvider.otherwise('dashboard');

});