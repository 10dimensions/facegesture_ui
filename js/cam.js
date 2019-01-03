var videoInput = document.getElementById('video');
  
var ctracker = new clm.tracker();
ctracker.init();
ctracker.start(videoInput);

Face.CamStream = function()
{
   if (typeof currentStream !== 'undefined') 
   {
        Face.stopMediaTracks(currentStream);
    }

  const videoConstraints = {};

  videoConstraints.facingMode = 'user';
  
  const constraints = 
  {
    video: videoConstraints,
    audio: false
  };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(stream => {

      currentStream = stream;
      video.srcObject = stream;
      return navigator.mediaDevices.enumerateDevices();
    })

    .then(Face.gotDevices)
    .catch(error => {
      console.error(error);
    });

}


Face.stopMediaTracks = function (stream) 
{
    stream.getTracks().forEach(track => {
      track.stop();
    });
}

Face.CamStream();