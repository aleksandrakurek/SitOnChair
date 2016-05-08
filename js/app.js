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
//
