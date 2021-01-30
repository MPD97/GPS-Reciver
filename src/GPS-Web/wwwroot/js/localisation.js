$(document).ready(function () {
    console.log("ready!");
    let formEnabled = false;
    let name = $("#Name");
    let deviceName = $("#DeviceName");
    let highAccuracy = $("#HighAccuracy");

    let button = $("#button");

    button.on("click", function () {
        var text = $(this).text();

        if (text == "Start") {
            console.log("Starting");
            toggleForm();
        } else if (text == "Stop") {
            console.log("Stopping");
            toggleForm();
        }
        else {
            alert("Wrong value of a button!");
        }
    });


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
        }
        function enableForm() {
            name.prop("disabled", false);
            deviceName.prop("disabled", false);
            highAccuracy.prop("disabled", false);
        }
    }

});