//basic 1
var multi = [1, 2, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < multi.length; i++) {
    for (var j = 0; j < multi.length; j++) {
        document.write(multi[i] + " x  " + multi[j] + " = " + multi[i] * multi[j] + " <br>");
    }
}
// basic 2 
//printing full name in the browser
var fullName1 = {
    fName: "Cristiana",
    lName: "Ene"
};
document.write(fullName1.fName + " " + fullName1.lName);
var fullName = [
    {
        fName: "Cristiana",
        lName: "Ene"
    },
    {
        fName: "Cristiana",
        lName: "Ene"
    },
    {
        fName: "Cristiana",
        lName: "Ene"
    },
    {
        fName: "Cristiana",
        lName: "Ene"
    },
    {
        fName: "Cristiana",
        lName: "Ene"
    },
    {
        fName: "Cristiana",
        lName: "Ene"
    },
    {
        fName: "Cristiana",
        lName: "Ene"
    },
    {
        fName: "Cristiana",
        lName: "Ene"
    },
    {
        fName: "Cristiana",
        lName: "Ene"
    },
    {
        fName: "Cristiana",
        lName: "Ene"
    },
    {
        fName: "Cristiana",
        lName: "Ene"
    }
];
//prints name 10 times
fullName.forEach(function (item) {
    document.write(item.fName + " " + item.lName + "<br>");
});
//triggers function after 5 sec
setTimeout(function () {
    fullName.forEach(function (item) {
        document.write(item.fName + " " + item.lName + "<br>");
    });
}, 5000);
/*
//basic 3
let names: string[] = ['Anna', 'Bianca', 'Camelia', 'Daniela'];
for ( let i = 0; i < names.length; i++) {
    document.write(i); // prints index of the elements
    document.write(names[i] + "<br>"); //prints only the values
}
*/
