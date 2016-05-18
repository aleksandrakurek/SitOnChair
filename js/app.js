// ------------------------DROP DOWN MENU-----------------------------------

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var d = 0; d < dropdowns.length; d++) {
            var openDropdown = dropdowns[d];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



document.addEventListener("DOMContentLoaded", function() {

    // SLIDER

    var prevButton = document.getElementById("prevPicture");
    var nextButton = document.getElementById("nextPicture");
    var pictures = document.querySelectorAll(".slider img");
    var currentVisiblePicture = 0;

    pictures[currentVisiblePicture].classList.add("visible");

    prevButton.addEventListener("click", function(event) {

        pictures[currentVisiblePicture].classList.remove("visible");
        currentVisiblePicture--;

        if (currentVisiblePicture < 0) {
            currentVisiblePicture = pictures.length - 1;
        }

        pictures[currentVisiblePicture].classList.add("visible");

    });

    nextButton.addEventListener("click", function(event) {
        // console.log("Click in next button");
        pictures[currentVisiblePicture].classList.remove("visible");
        currentVisiblePicture++;

        if (currentVisiblePicture > (pictures.length - 1)) {
            currentVisiblePicture = 0;
        }

        pictures[currentVisiblePicture].classList.add("visible");

    });


    // GALLERY - znikajacy element z nazwa

    var imageBox = document.querySelectorAll(".image_box");

    for (var i = 0; i < imageBox.length; i++) {

        imageBox[i].addEventListener("mouseover", function(event) {
            this.firstElementChild.style.display = "none";
        }); // zamkniecie eventu mouseenter

        imageBox[i].addEventListener("mouseout", function(event) {
            this.firstElementChild.style.display = "initial";

        }); // zamkniecie eventu mouseout
    } // zamkniecie for



    // PRICE calculator

    function summary() {
        var priceCalc = chairPrice + fabricPrice + colorPrice + transportPrice;
        sumCalc.innerText = priceCalc + " zł";
    }

    var chairType = document.querySelector("#type_of_chair");
    var fabricType = document.querySelector("#type_of_fabric");
    var fabricColor = document.querySelector("#color_of_chair"); // kolor
    var transportCheckbox = document.querySelector("#transport");

    var chairChoice = document.querySelector("#chair_of_choice");
    var fabricChoice = document.querySelector("#fabric_of_choice");
    var colorChoice = document.querySelector("#color_of_choice"); // kolor
    var transportChoice = document.querySelector("#transport_of_choice");

    var chairCost = document.querySelector("#chosenChairCost");
    var fabricCost = document.querySelector("#chosenMaterialCost");
    var colorCost = document.querySelector("#chosenColorCost"); //kolor
    var transportCost = document.querySelector("#chosenTransportCost");

    var chairPrice = 0;
    var fabricPrice = 0;
    var colorPrice = 0; // kolor!
    var transportPrice = 0;

    var sumCalc = document.querySelector("#chair_type_price_calculate");
    var priceCalc = 0;


    chairType.addEventListener("change", function() {
        var typeOptions = chairType.options[chairType.selectedIndex].innerText;
        chairChoice.innerText = typeOptions;

        if (chairType.options[chairType.selectedIndex].value === 'clair') {
            chairPrice = 2400;
            chairCost.innerText = chairPrice;
        } else if (chairType.options[chairType.selectedIndex].value === 'margarita') {
            chairPrice = 2000;
            chairCost.innerText = chairPrice;
        } else if (chairType.options[chairType.selectedIndex].value === 'selena') {
            chairPrice = 1800;
            chairCost.innerText = chairPrice;
        }

        summary();
    });


    // Kolor
    fabricColor.addEventListener("change", function() {
        var colorOptions = fabricColor.options[fabricColor.selectedIndex].innerText;
        colorChoice.innerText = colorOptions;

        if (fabricColor.options[fabricColor.selectedIndex].value === 'Czerwony') {
            colorPrice = 0;
            colorCost.innerText = colorPrice;
        } else if (fabricColor.options[fabricColor.selectedIndex].value === 'Czarny') {
            colorPrice = 0;
            colorCost.innerText = colorPrice;
        } else if (fabricColor.options[fabricColor.selectedIndex].value === 'Pomarańczowy') {
            colorPrice = 0;
            colorCost.innerText = colorPrice;
        }

        summary();
    });

    fabricType.addEventListener("change", function() {
        var fabricOptions = fabricType.options[fabricType.selectedIndex].innerText;
        fabricChoice.innerText = fabricOptions;

        if (fabricType.options[fabricType.selectedIndex].value === 'Tkanina') {
            fabricPrice = 500;
            fabricCost.innerText = fabricPrice;
        } else if (fabricType.options[fabricType.selectedIndex].value === 'Skóra') {
            fabricPrice = 1000;
            fabricCost.innerText = fabricPrice;
        }
        summary();
    });



    var checkTransport = transportCheckbox.value;

    transportCheckbox.addEventListener("change", function() {

        if (checkTransport === 'on') {
            transportPrice = 120;
            checkTransport = 'off';
            transportCost.innerText = transportPrice;
            transportChoice.innerText = "Koszt transportu";
        } else {
            transportPrice = 0;
            transportCost.innerText = transportPrice;
            transportChoice.innerText = "Bez transportu";
            checkTransport = 'on';
        }
        summary();
    });




});


// ------------------------DROP DOWN MENU-----------------------------------


// var listElements = document.querySelectorAll(".drop_down ul li");
//
// for (var i = 0; i < listElements.length; i++) {
//     listElements[i].addEventListener("mouseover", function(event) {
//         if (this.children.length > 0) {
//             var elementToShow = this.children[0];
//             elementToShow.style.display = "block";
//         }
//     });
//
//     listElements[i].addEventListener("mouseout", function(event) {
//         if (this.children.length > 0) {
//             var elementToHide = this.children[0];
//             elementToHide.style.display = "none";
//         }
//
//     });
// }
