if (document.getElementById("form") != null) {
    var Form = document.getElementById("form");
    Form.addEventListener("submit", formValidation);
}


if (document.getElementById("showMore1") != null) {
    var showMoreButton1 = document.getElementById("showMore1");
    showMoreButton1.addEventListener("click", showMoreButton1Clicked);
}

if (document.getElementById("showMore2") != null) {
    var showMoreButton2 = document.getElementById("showMore2");
    showMoreButton2.addEventListener("click", showMoreButton2Clicked);
}


if (document.getElementById("motherWisdom") != null) {
    var blockquoteWisdom = document.getElementById("motherWisdom");
    blockquoteWisdom.addEventListener("mouseover", mouseOverBlockquoteWisdom);
    blockquoteWisdom.addEventListener("mouseout", mouseOutBlockquoteWisdom);

}


if (document.getElementById("indexFooter") != null) {
    window.addEventListener("load", footerInIndexIsLoaded);
}



function formValidation(e) {
    var nameField = document.getElementById("nameInput").value;
    var emailField = document.getElementById("emailInput").value;

    if (nameField == "" || emailField == "") {
        window.alert("Please fill out all required fields.");
        e.preventDefault();
    } else {
        window.alert("Thank you!");
    }

}

function showMoreButton1Clicked() {
    var description = document.getElementById("salma");
    var showMore1Img = document.getElementById("showMore1Img");


    if (description.style.display == "none") {
        description.style.display = "block";
        showMore1Img.setAttribute("src", "images/showLess.svg");

    } else {
        description.style.display = "none";
        showMore1Img.setAttribute("src", "images/showMore.svg");

    }

}

function showMoreButton2Clicked() {
    var description = document.getElementById("seamCarving");
    var showMore2Img = document.getElementById("showMore2Img");


    if (description.style.display == "none") {
        description.style.display = "block";
        showMore2Img.setAttribute("src", "images/showLess.svg");

    } else {
        description.style.display = "none";
        showMore2Img.setAttribute("src", "images/showMore.svg");

    }

}

function mouseOverBlockquoteWisdom() {
    var blockquoteWisdom = document.getElementById("motherWisdom");
    blockquoteWisdom.style.backgroundColor = "#8b77a0";
}

function mouseOutBlockquoteWisdom() {
    var blockquoteWisdom = document.getElementById("motherWisdom");
    blockquoteWisdom.style.backgroundColor = "#d7c8e7";
}

function footerInIndexIsLoaded() {
    var footer = document.getElementById("indexFooter");
    var newP = document.createElement("p");
    var date = new Date();
    var dateInText = document.createTextNode("Page loaded on:" + date);
    newP.appendChild(dateInText);
    footer.appendChild(newP);

}