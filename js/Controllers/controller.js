app.controller('controller', function ($scope, resumeService) {
	resumeService.get().then(function (obj) {
		$scope.obj = obj;
	});
});
