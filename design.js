var bulb = 0;

function findbulb()
{ 
    if(bulb==0)
    {
        document.getElementById("image").src="img.bulbon.jpeg";
        bulb=1;
    }
    else{
        document.getElementById("image").src="img.bulboff.jpeg";
        bulb=0; 
    }
}