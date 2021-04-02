// Code your solution in this file!


function distanceFromHqInBlocks(pickupLocation){
    let result;
    result = pickupLocation - 42;
        return Math.abs(result);
    
}

function distanceFromHqInFeet(pickuplocation){
    let distance;
    distance = distanceFromHqInBlocks(pickuplocation);
    let result2 = distance * 264;
        return result2;
}

function distanceTravelledInFeet(a,b){
    let travelInFeet = Math.abs(a-b)*264;
    return travelInFeet;
}

function calculatesFarePrice(a,b){
    let destination = Math.abs(a-b)*264;
    //let travelInFeet = Math.abs(a-b)*264;
    //let fare;

    if (destination < 400){
        return 0
    }
    
    else if( destination > 400 && destination < 2000){
        return (destination - 400) * Number.parseFloat('0.02');
    }

    else if ( destination > 2000 && destination < 2500){
        return 25;
    }

    
    
    else if ( destination > 2500){
        return "cannot travel that far";
    }


    
}
    
    