Face.VectDist = function (a,b)
{   
    var x_del = a[0]-b[0];
    var y_del = a[1]-b[1];
    var d = Math.sqrt( x_del*x_del  +  y_del*y_del );
    
    return d; 
}
