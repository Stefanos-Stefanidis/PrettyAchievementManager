app.controller('user_Ctrl', function ($scope) {

    $scope.name = 'Steve';
    $scope.lastname = 'Stevenidis';
    $scope.email = 'steve@gmail.com';
    $scope.phone = '2310123456';

    $scope.achievmentsCount = '30';
    $scope.sBadges = '10';
    $scope.gBadges = '0';

    // calculates and print user stats . (ποζεριά)
    angular.element(document).ready(function () {
        var counter = 0;

        addUpSpan('achCount', $scope.achievmentsCount);
        addUpSpan('sBdgCount', $scope.sBadges);
        addUpSpan('gBdgCount', $scope.gBadges);


        //Καθε 100ms αυξανει εναν αριθμο κατα 1 και τον αποτυπωνει σε ενα span element
        function addUpSpan(parentID, maxNumber) {
            setInterval(function () {
                if (counter < maxNumber) {
                    counter = setSpanText(counter, parentID);
                }
                else {
                    clearInterval();
                }
            }, 100);
        }
        function setSpanText(textNumber, id) {
            textNumber++;
            $('#' + id + ' span').text(textNumber);
            return textNumber;
        }
    });
});