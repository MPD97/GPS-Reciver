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

	let counterValue = 1;
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
			timeout: 27000,
			maximumAge: 30000,
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
		let cv = counterValue++;
		timestamp.text(position.timestamp);
		counter.text(cv);
		latitude.text(position.coords.latitude);
		longitude.text(position.coords.longitude);
		accuracy.text(position.coords.accuracy);
		altitude.text(position.coords.altitude);
		altitudeAccuracy.text(position.coords.altitudeAccuracy);
		heading.text(position.coords.heading);
		speed.text(position.coords.speed);

		let data = {
			name: name.val(),
			deviceName: deviceName.val(),
			highAccuracy: highAccuracy.is(":checked"),
			timestamp: position.timestamp,
			counter: cv,
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			accuracy: position.coords.accuracy,
			altitude: position.coords.altitude,
			altitudeAccuracy: position.coords.altitudeAccuracy,
			heading: position.coords.heading,
			speed: position.coords.speed
		};

		postData(data);
	}

	function postData(data) {
		console.log(data);
		let json = JSON.stringify(data);
		console.log(json);

		$.post("/Localisation/Upload", data, "json")
			.done(function (data) {
				console.log("Localisation pushed" + data);
			});
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
		counterValue = 1;
	}

	// onError Callback receives a PositionError object
	//
	function onError(error) {
		switch (error.code) {
			case error.PERMISSION_DENIED:
				x.innerHTML = "User denied the request for Geolocation."
				break;
			case error.POSITION_UNAVAILABLE:
				x.innerHTML = "Location information is unavailable."
				break;
			case error.TIMEOUT:
				x.innerHTML = "The request to get user location timed out."
				break;
			case error.UNKNOWN_ERROR:
				x.innerHTML = "An unknown error occurred."
				break;
		}
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