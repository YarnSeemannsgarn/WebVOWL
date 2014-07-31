webvowl.labels.owlobjectproperty = (function () {

	var o = function () {
		webvowl.labels.BaseLabel.call(this);

		this.styleClass("objectproperty")
			.type("owl:ObjectProperty");
	};
	o.prototype = Object.create(webvowl.labels.BaseLabel.prototype);
	o.prototype.constructor = o;

	return o;
}());


