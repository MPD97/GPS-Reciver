$(document).ready(function () {
	console.log("ready!");
	let formEnabled = true;
	let name = $("#Name");
	let deviceName = $("#DeviceName");
	let statisticWrapper = $("#statisticWrapper");

	let highAccuracy = $("#HighAccuracy");
	let timestamp = $("#Timestamp");
	let counter = $("#Counter");
	let latitude = $("#Latitude");
	let longitude = $("#Longitude");
	let accuracy = $("#Accuracy");
	let altitude = $("#Altitude");
	let altitudeAccuracy = $("#AltitudeAccuracy");
	let heading = $("#Heading");
	let speed = $("#Speed");

	let counterValue = 0;
	let button = $("#button");

	button.on("click", function () {
		var text = $(this).text();

		if (text == "Start") {
			start();
		} else if (text == "Stop") {
			stop();
		}
		else {
			alert("Wrong value of a button!");
		}
	});

	let positionWatcher = null;
	function start() {
		console.log("Starting");
		toggleForm();

		let options = {
			enableHighAccuracy: highAccuracy.is(":checked"),
			timeout: 10000,
			maximumAge: 0,
			desiredAccuracy: 0
		};

		positionWatcher = navigator.geolocation.watchPosition(onSuccess, onError, options);

	}
	function stop() {
		console.log("Stopping");
		toggleForm();
		clearWatch();
		clearStatistics();
	}

	function onSuccess(position) {
		timestamp.text(position.coords.timestamp);
		counter.text(counterValue++);
		latitude.text(position.coords.latitude);
		longitude.text(position.coords.longitude);
		accuracy.text(position.coords.accuracy);
		altitude.text(position.coords.altitude);
		altitudeAccuracy.text(position.coords.altitudeAccuracy);
		heading.text(position.coords.heading);
		speed.text(position.coords.speed);
	}

	function clearWatch() {
		if (positionWatcher != null) {
			navigator.geolocation.clearWatch(positionWatcher);
			positionWatcher = null;
		}
	}
	function clearStatistics() {
		timestamp.text("0");
		counter.text("0");
		latitude.text("0");
		longitude.text("0");
		accuracy.text("0");
		altitude.text("0");
		altitudeAccuracy.text("0");
		heading.text("0");
		speed.text("0");
		counterValue = 0;
	}

	// onError Callback receives a PositionError object
	//
	function onError(error) {
		alert('code: ' + error.code + '\n' +
			'message: ' + error.message + '\n');
	}



	function toggleForm() {
		if (formEnabled) {
			disableForm();
			formEnabled = false;
			statisticWrapper.show("slow");
		} else {
			enableForm();
			formEnabled = true;
			statisticWrapper.hide("slow");
		}
		function disableForm() {
			name.prop("disabled", true);
			deviceName.prop("disabled", true);
			highAccuracy.prop("disabled", true);
			button.text("Stop");
			button.removeClass("btn-primary");
			button.addClass("btn-danger");
		}
		function enableForm() {
			name.prop("disabled", false);
			deviceName.prop("disabled", false);
			highAccuracy.prop("disabled", false);
			button.text("Start");
			button.addClass("btn-primary");
			button.removeClass("btn-danger");
		}
	}
});