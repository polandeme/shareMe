define(function() {
	var UnitsService = function() {
		var o = {
			show: function() {

			},
			hide: function() {
				$('.navgation ul').fadeOut(400);
				$('.input-text').show();
			},
			showPublich: function() {

			}
		}
		return o;
	}
	return UnitsService;
})