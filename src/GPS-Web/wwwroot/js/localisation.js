$(document).ready(function () {
    console.log("ready!");
    let formEnabled = true;
    let name = $("#Name");
    let deviceName = $("#DeviceName");
    let highAccuracy = $("#HighAccuracy");
    let statisticWrapper = $("#statisticWrapper");

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
    function start() {
        console.log("Starting");
        toggleForm();
    }
    function stop() {
        console.log("Stopping");
        toggleForm();
    }


    function toggleForm() {
        if (formEnabled) {
            disableForm();
            formEnabled = false;
        } else {
            enableForm();
            formEnabled = true;
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