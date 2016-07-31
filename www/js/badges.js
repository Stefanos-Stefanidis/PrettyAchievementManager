




app.controller('badges_Ctrl', ['$scope', '$interval', '$timeout', '$window', 'roundProgressService', function ($scope, $interval, $timeout, $window, roundProgressService) {


    $scope.silverBadges = [
        { id: '1', name: 'sBadge1', progress: '1', max: '10', description: 'desc1desc1desc1desc1desc1desc1' },
        { id: '2', name: 'sBadge2', progress: '2', max: '10', description: 'desc2' },
        { id: '3', name: 'sBadge3', progress: '10', max: '15', description: 'desc3' },
        { id: '4', name: 'sBadge4', progress: '9', max: '10', description: 'desc4' },
        { id: '5', name: 'sBadge5', progress: '20', max: '100', description: 'desc5' },
        { id: '6', name: 'sBadge6', progress: '0', max: '100', description: 'desc6' },
        { id: '7', name: 'sBadge7', progress: '0', max: '100', description: 'desc7' },
        { id: '8', name: 'sBadge8', progress: '20', max: '100', description: 'desc8' },
        { id: '9', name: 'sBadge9', progress: '9', max: '10', description: 'desc9' }
    ];

}]);