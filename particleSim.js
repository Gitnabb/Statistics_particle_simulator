var x;
var y;
var probabilities = [0.2, 0.2, 0.2, 0.2, 0.2];
var results = [1, 2, 3, 4, 5];
var maxIterations = 255;
var strokeIntensity = 255;
function setup(){
    createCanvas(400, 400);
    background(169, 169, 169);
    x = 200;
    y = 200;
    for(var i = 0; i < maxIterations; i ++){
        strokeIntensity--;  
        stroke(strokeIntensity);
        strokeWeight(10);
        point(x, y); 
        // force integer downwards - example 5,5 = 5. 
        var rand = getRandomDirection();
        switch (rand) {
            case 1: // right
                x = x + 10;
                break;
            case 2: // left
                x = x - 10;
                break;
            case 3: // up
                y = y + 10;
                break;
            case 4: // down
                y = y - 10;
                break;
            case 5: // stay
                x = x
                y = y    
        }
    }
}
function getRandomDirection(){
    var num = Math.random(), 
    randIndex = 0,
    lastRandIndex = probabilities.length -1;
    for(var i = 0; i < lastRandIndex; i++){
        randIndex += probabilities[i];
        if (num < randIndex){
            return results[i];
        }
    }
    return results[lastRandIndex];
}




