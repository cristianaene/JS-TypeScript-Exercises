//  //basic exercise 1

// let numArray : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let val of numArray) {
//     for (let i of numArray){
//         document.getElementById("multiplication").innerHTML += i + " x " + val + " = " + (i * val) + "<br>";
//     }
//     document.getElementById("multiplication").innerHTML += "<br>";
// }



//  //basic exercise 2

//--- This version works! --
const myName = []
for (let i=0; i < 10; i++){
    myName[i]= {fName: "Claudia", lName: "Tomassetti"}
    
}
console.log(myName);

setTimeout(function(){
    myName.forEach(function(i){
        document.getElementById("full_name").innerHTML += i.fName + " " + i.lName + "<br>";
    });

}, 5000);


//Ends --- This version works! --

// //--- This version works! --
// const myName = []
// for (let i=0; i < 10; i++){
    
//     // const myName = {}
//     // myName["fName"]= "Claudia";
//     // myName["lName"]= "Tomassetti";
//     myName[i]= {fName: "Claudia", lName :"Tomassetti"}
//     // document.getElementById("full_name").innerHTML += myName[i].fName + myName[i].lName;

//     console.log(myName);
//     document.getElementById("full_name").innerHTML += myName[i].fName + " " + myName[i].lName + "<br>";
// }
// // Ends ---This version works!---


// // ----This version doesn't work!!! ---
// function creatingArray() {

//     for (let i=0; i < 10; i++){

//         myName["fName"]= "Claudia";
//         myName["lName"]= "Tomassetti";

//         document.getElementById("full_name").innerHTML += myName[i].fName + myName[i].lName;

//         console.log(myName);
// }

// }  
// End ----This version doesn't work!!! ---

// // ----This version doesn't work!!! ---
// const myName = {"fName":"Claudia", "lName":"Tomassetti"};

// for (let i=0; i < 10; i++){
//     myName.forEach(function(val){
//         console.log(val);
//     })
// }
// // End ----This version doesn't work!!! ---


 //Basic exercise 3

// let allNames: string[] = ["Claudia", "Anna", "Laureen", "Alex", "Danilo"];

//  //this prints the index
// for (let i in allNames){
//     document.getElementById("all_names").innerHTML += i + "<br>"
// }

// document.getElementById("all_names").innerHTML += "<br>"

//  //this prints the value
// for (let i of allNames){
//     document.getElementById("all_names").innerHTML += i + "<br>"
// }

// document.getElementById("all_names").innerHTML += "<br>"

//  //this prints the index and the value

//  for (let i in allNames){
//     document.getElementById("all_names").innerHTML += i + " " + allNames[i] + "<br>"
// }



