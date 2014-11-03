import Ember from 'ember';

export default Ember.ObjectController.extend({
	isValid: Ember.computed.notEmpty('model.name'),
	actions: {
		save: function() {
			console.log("this.get('isValid') = " + this.get('isValid'));
			if (this.get('isValid')) {
				var _this = this;
				console.log("this is " + this);
				this.get('model').save().then(function(album) {
					console.log("This inside callback = " + this);

					_this.transitionTo('picture-albums.show', album);
				});
			} else {
				console.log("invalid");
				this.set('errorMessage', 'A valid name was not provided.');
			}
		},
		cancel: function() {
			this.transitionTo('picture-albums');
			return false;
		}
	}
});
