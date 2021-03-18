var lion = {
    "name" : "Simba",
    "leg" : 4,
    "tails" : 1
};


function myFunction(propName, propValue){
    lion[propName] = propValue;
    return lion; 
}

myFunction ("roar", "roar-roar");
module.exports = myFunction;
