app.factory('resumeService', function ($http) {
	return {
		get: function () {
			return $http.get('/js/Modules/resume.json');
		}
	};
});
