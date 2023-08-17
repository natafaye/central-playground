function myThermostat(mode, temperature){
    let currentTemperature = "The A/C is on " + mode + " and now is " + temperature + " degrees.";
    return currentTemperature
}
let myPlaceTemperature = myThermostat("cool", 68);
console.log(myPlaceTemperature);

let myMomsHouseTemperature = myThermostat("heat", 82);
console.log(myMomsHouseTemperature);

let myFriedsHouseTemperature = myThermostat("Off", 102);
console.log(myFriedsHouseTemperature);