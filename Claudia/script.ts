//  //basic exercise 1

// let numArray : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let val of numArray) {
//     for (let i of numArray){
//         document.getElementById("multiplication").innerHTML += i + " x " + val + " = " + (i * val) + "<br>";
//     }
//     document.getElementById("multiplication").innerHTML += "<br>";
// }



//  //basic exercise 2


// const myName = {"fName":"Claudia", "lName":"Tomassetti"};

// for (let i=0; i < 10; i++){
//     myName.forEach(function(val){
//         console.log(val);
//     })
// }

// function creatingArray() {

//     for (let i=0; i < 10; i++){

//         myName["fName"]= "Claudia";
//         myName["lName"]= "Tomassetti";

//         document.getElementById("full_name").innerHTML += myName[i].fName + myName[i].lName;

//         console.log(myName);
// }

// }
const myName = []
for (let i=0; i < 10; i++){
    
    // const myName = {}
    // myName["fName"]= "Claudia";
    // myName["lName"]= "Tomassetti";
    myName[i]= {fName: "Claudia", lName :"Tomassetti"}
    // document.getElementById("full_name").innerHTML += myName[i].fName + myName[i].lName;

    console.log(myName);
    document.getElementById("full_name").innerHTML += myName[i].fName;
}

