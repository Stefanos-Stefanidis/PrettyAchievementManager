app.Controller('badges_Ctrl', function ($scope) {

    $scope.silverBadges = [
        { id='1', name: 'sBadge1', progress: '1', max='10', description: 'decs1' },
        { id='2', name: 'sBadge2', progress: '2', max='10', description: 'desc2' },
        { id='3', name: 'sBadge3', progress: '10', max='10', description: 'desc3' }
    ];

    $scope.goldenBadges = [
        { id='1', prevBadgeId='1', name: 'gBadge1', progress: '0', max='20', description: 'decs1' },
        { id='2', prevBadgeId='2', name: 'gBadge2', progress: '0', max='30', description: 'desc2' },
        { id='3', prevBadgeId='3', name: 'gBadge3', progress: '2', max='30', description: 'desc3' }
    ];

});