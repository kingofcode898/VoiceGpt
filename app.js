


function uploadAudio() {
  var audioFileInput = document.getElementById("audioFileInput");
  var file = audioFileInput.files[0]; // Get the selected file

  if (file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var audioData = e.target.result; // Get the audio data

      // Do something with the audio data, e.g., send it to a server or process it locally
      // You can access the audio data as 'audioData' variable here
    };
    reader.readAsDataURL(file); // Read the file as data URL
  }
}
function uploadText(){
  var text = document.getElementById("question").value;
  console.log(text);
}


