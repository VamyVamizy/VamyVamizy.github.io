

if (lightMode == 'false') {
    console.log("Turning dark mode on...");
    darkSheet.media = "";
} else {
    console.log("Turning light mode on...");
    darkSheet.media = "none";
}
function changeSheet() {
    // make lightMode equal NOT lightMode
    lightMode = !lightMode;
    var lightSheet = document.getElementById("lightSheet")
    var darkSheet = document.getElementById("darkSheet")
    // if lightMode turned off, display dark stylesheet
    if (lightMode == false) {
        console.log("Turning dark mode on...");
        darkSheet.media = "";
    } else {
        console.log("Turning light mode on...");
        darkSheet.media = "none";
    }
}