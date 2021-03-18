var myPet = {
 species :"shepard",
 name : "Rex",
 legs : 4,
 friends : ["Tom", "Jerry"]
}

function myFunction(myObj) {
    return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction};
