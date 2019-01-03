  
Face.CamStream();

var videoInput = document.getElementById('video');
  
var ctracker = new clm.tracker();
ctracker.init();
ctracker.start(videoInput);

var val_past=0;

//Debug
var output = document.getElementById("output");

function positionLoop() 
{
    requestAnimationFrame(positionLoop);
    var positions = ctracker.getCurrentPosition();
    // positions = [[x_0, y_0], [x_1,y_1], ... ]

    if(typeof(positions[57][0])!=="undefined")
    {
        var dist_m = Face.VectDist(positions[57], positions[60]);
        var dist_n = Face.VectDist(positions[62], positions[33]);

        var val_scaled=(dist_m/dist_n)*100;
        //console.log(val_scaled);
        
        //if(val_scaled-val_past)

        output.innerHTML = val_scaled.toString();

        MouthOpen = val_scaled;

    }

}

positionLoop();