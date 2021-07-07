var starters = [
    {
        img: "img/starter - bears-garlic-Image by RitaE from Pixabay 1300827_1920.jpg",
        name: "Bears Garlic Mousse",
        description: "Fresh butter wrapped in rich garlic sauce plus tons of Parmigiano Regiano",
        price: 12.90
    },
    {
        img: "img/starter - salad-Image by RitaE from Pixabay.jpg",
        name: "Figg Salad",
        description: "Smoothy figgs embraced by alpine goat cheese",
        price: 14.90
    },
    {
        img: "img/starter - salad-Image by S. Hermann & F. Richter from Pixabay.jpg",
        name: "Caprese Salad",
        description: "Silky mozzarella happily married with tomatoes and basil",
        price: 15.00
    },
    {
        img: "img/starter - salmon-Image by RitaE from Pixabay.jpg",
        name: "Salmon Tartare",
        description: "Salmon fillet nicely sliced and diced with spring onions and dill ",
        price: 14.90
    }
];
var mainCourses = [
    {
        img: "img/main - fish- Image by RitaE from Pixabay 2366925_1920.jpg",
        name: "Sea Bream",
        description: "Strong swimmer sea bass rescued by grilled vegetables",
        price: 22.90
    },
    {
        img: "img/main - mussels- Image by PaulNI from Pixabay 2114006_1920.jpg",
        name: "Mussels",
        description: "Mediterranean mussles sanked in white Chardonnay",
        price: 20.90
    },
    {
        img: "img/main-steak- Image by Divily from Pixabay 2936531_1920.jpg",
        name: "Steak",
        description: "Sizzling beef tenderloin huged by butter and rosemary",
        price: 32.00
    },
    {
        img: "img/main-vongole - Image by Free-Photos from Pixabay 1081974_1920.jpg",
        name: "Vongole",
        description: "Angry vongole chilled by lemon and fresh herbs ",
        price: 25.00
    }
];
var desserts = [
    {
        img: "img/dessert - creme -Image by freestocks-photos from Pixabay -2940496_1920.jpg",
        name: "Creme Brulee",
        description: "Crunchy icy waves of bourbon vanilla ready to cool you down",
        price: 8.90
    },
    {
        img: "img/dessert - pancake- Image by Bernadette Wurzinger from Pixabay 1776646_1920.jpg",
        name: "Pancakes",
        description: "Puffy pancakes ready warm up your sad and loneley old soul ",
        price: 7.90
    },
    {
        img: "img/dessert -churros- Image by Дарья Яковлева from Pixabay 2188871_1920.jpg",
        name: "Churros",
        description: "Long curly dough sticks. Lots of chocolate. Not recommended for the faint-hearted ",
        price: 7.90
    },
    {
        img: "img/dessert- strawberry mousse - Image by Matěj Vrtil from Pixabay 3765572_1920.jpg",
        name: "Strawberry Mousse",
        description: "A true oh la la made of naughty strawberries and beautiful heavy cream ",
        price: 12.00
    }
];
var beverages = [
    {
        img: "img/coffee-Image by Karolina Grabowska from Pixabay.jpg",
        name: "Coffee",
        description: "",
        price: 5.00
    },
    {
        img: "img/beers- mage by Pexels from Pixabay 1283566_1920.jpg",
        name: "Craft Beer",
        description: "",
        price: 6.00
    },
    {
        img: "img/lime-Image by Steve Buissinne from Pixabay.jpg",
        name: "Fizzy Lemonade",
        description: "",
        price: 9.90
    },
    {
        img: "img/wine-Image by Anrita1705 from Pixabay 4931923_1920.jpg",
        name: "Wine",
        description: "",
        price: 10.90
    }
];
//option 2
function addCourse(courses, containerId) {
    courses.forEach(function (course) {
        var htmlCourse = "\n        <div class=\"imgandtext col-lg-3 col-md-6 col-sm-12\">\n            <img class = \"img-fluid rounded\" src = \"" + course.img + "\">\n            <h6>" + course.name + "</h6>\n            <p>" + course.description + "<br><strong>&#8364 " + course.price.toFixed(2) + "</strong></p>\n        </div>\n        ";
        document.getElementById(containerId).innerHTML += htmlCourse;
    });
}
addCourse(starters, "starter");
addCourse(mainCourses, "maincourse");
addCourse(desserts, "dessert");
addCourse(beverages, "beverage");
/*option 1
starters.forEach(function(course) {
    let htmlCourse : string  = `
    <div class="imgandtext col-lg-3 col-md-6 col-sm-12">
        <img class = "img-fluid rounded" src = "${course.img}">
        <h6>${course.name}</h6>
        <p>${course.description}<br><strong>&#8364 ${course.price.toFixed(2)}</strong></p>
    </div>
    `;
    document.getElementById("starter").innerHTML+= htmlCourse;
      
});

mainCourses.forEach(function(course) {
    let htmlCourse : string  = `
    <div class="imgandtext col-lg-3 col-md-6 col-sm-12">
        <img class = "img-fluid rounded" src = "${course.img}">
        <h6>${course.name}</h6>
        <p>${course.description}<br><strong>&#8364 ${course.price.toFixed(2)}</strong></p>
    </div>
    `;
    document.getElementById("maincourse").innerHTML+= htmlCourse;
      
});

desserts.forEach(function(course) {
    let htmlCourse : string  = `
    <div class="imgandtext col-lg-3 col-md-6 col-sm-12">
        <img class = "img-fluid rounded" src = "${course.img}">
        <h6>${course.name}</h6>
        <p>${course.description}<br><strong>&#8364 ${course.price.toFixed(2)}</strong></p>
    </div>
    `;
    document.getElementById("dessert").innerHTML+= htmlCourse;
      
});

beverages.forEach(function(course) {
    let htmlCourse : string  = `
    <div class="imgandtext col-lg-3 col-md-6 col-sm-12">
        <img class = "img-fluid rounded" src = "${course.img}">
        <h6>${course.name}</h6>
        <strong>&#8364 ${course.price.toFixed(2)}</strong>
    </div>
    `;
    document.getElementById("beverage").innerHTML+= htmlCourse;
      
});
*/ 
