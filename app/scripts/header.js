'use strict';

//navigation header
angular.module('NeteGreek.navigation', [])
    .controller('navigationCtrl', function($scope, $http, $rootScope, LoadScreen){
        routeChange();
        
        //closes the navigation if open and an li is clicked        
        $('.navbar-brand, #mobileMenu, #mainMenu, #mobileSettings').on('click', function(){
            if( $('#mobileSettings').hasClass('in') ){
                     $('mobileSettings').collapse('hide');
            }
            else{
            //do nothing
            }
        });
        $scope.logout = function(){
            $rootScope.logout();
            window.location.assign('/#/login');
        };
    })
    .controller('indexController', function($scope, $http, LoadScreen, $rootScope) {
        $scope.homeButton = function(){
            if ($rootScope.checkAlumni()){
                window.location.assign('#/app/directory/members');
            }
            else{
                window.location.assign('#/app/home');
            }
        };
        $scope.sendHelpMessage = function(isValid, content){
            console.log('I am getting submitted');
            if(isValid){
                $scope.sendingHelp='pending';
                $http.post(ENDPOINTS_DOMAIN + '/_ah/api/netegreek/v1/user/report_error', packageForSending(content))
                .success(function(){console.log('success');
//                $('#helpModal').modal('hide');
                $scope.helpMessage.$setPristine();
                $scope.message={};
                $scope.sendingHelp='done';
                })
                .error(function(){console.log('error');
                $scope.sendingHelp='broken';});
            }
            else{
            //do nothing
            }
        };
	});