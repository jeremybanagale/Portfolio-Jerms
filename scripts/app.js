
$(function(){
		$('.list li:first-child').click(function(){
			 window.setTimeout(function() {
           $('.profile').slideToggle();
                }, 300);
		});
		$('.list li:nth-child(2)').click(function(){
			 window.setTimeout(function(){
			$('.educ').slideToggle();
					},300);
		});
		$('.list li:nth-child(3)').click(function(){
			 window.setTimeout(function(){
			$('.skills').slideToggle();
					},300);
		});
		$('.list li:nth-child(4)').click(function(){
			 window.setTimeout(function(){
			$('.workexp').slideToggle();
				}, 300);
		});
		$('.list li:nth-child(5)').click(function(){
			 window.setTimeout(function(){
			$('.social').slideToggle();
				}, 300);
		});
		$('.btn-close').click(function(){
			$('.list-content').hide(300);
		});
	});

angular.module("portfolioPage", ["ngMaterial", "ngResource", "ngAnimate", "ui.router"])
  .controller('appCtrl', function($scope, $mdDialog) {
    $scope.info = profile.info;
    $scope.work = profile.work;
  })

  .controller('themeCtrl', function($scope) {
    $scope.theme = 'default';
  })

  .controller('skillsCtrl', function($scope) {
    $scope.skills = skills;
  })
	.controller('schoolsCtrl', function($scope) {
    $scope.schools = schools;
  })

  .controller('languageCtrl', function($scope) {
    $scope.languages = languages;
  })

  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('amber')
      .accentPalette('blue-grey');
    $mdThemingProvider.alwaysWatchTheme(true);
  });
