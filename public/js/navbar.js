// Hamburger menu toggle
let hamburger = document.getElementById("hamburger");
let links = document.getElementById("links");
let main = document.querySelector("main");

hamburger.addEventListener("click", toggleHamburgerMenu);

function toggleHamburgerMenu() {
  hamburger.classList.toggle("active");
  links.classList.toggle("hidden");
}

// Close the dropdown if the user clicks outside of it
document.addEventListener("click", function (event) {
  if (!hamburger.contains(event.target) && !links.contains(event.target)) {
    hamburger.classList.remove("active");
    links.classList.add("hidden");
  }
});

// Recipes dropdown
const recipesButton = document.getElementById("recipesButton");
const recipeDropdown = document.getElementById("recipeDropdown");
const contentBelowDropdown = document.getElementById("contentBelowDropdown");

recipesButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the click event from triggering form submission
  recipeDropdown.classList.toggle("hidden"); // Toggle visibility of the menu links
//   contentBelowDropdown.style.marginTop = recipeDropdown.classList.contains("hidden") ? "0" : recipeDropdown.offsetHeight + "px";
});

 // Close the dropdown if the user clicks outside of it
document.addEventListener("click", function (event) {
    if (!recipesButton.contains(event.target) && !recipeDropdown.contains(event.target)) {
      recipeDropdown.classList.add("hidden");
    }
});

/*
//*! Start of js for second dropdown menu
let dropdown = document.getElementById("recipesButton")

dropdown.addEventListener("click", toggleDropdown)

function toggleDropdown() {
	const recipesButton = document.querySelector("#recipesButton #recipeDropdown");
	recipesButton.classList.toggle("hidden")
}

 // Close the dropdown if the user clicks outside of it
document.addEventListener("click", function (event) {
    if (!recipesButton.contains(event.target) && !recipeDropdown.contains(event.target)) {
      recipeDropdown.classList.add("hidden");
    }
});

//*! End of js for second dropdown menu
*/




/*
//* From Mayanwolfe
// This is for the navbar only.
let hamburger = document.getElementById("hamburger");
let links = document.getElementById("links");
let main = document.querySelector("main");

hamburger.addEventListener("click", hideLinks); // When hamburger is clicked, the links appear or disappear
hamburger.addEventListener("click", changeMenuState); // When hamburger is clicked, it changes into menu or x

// When one of the links is clicked, the links disappear
let link = document.querySelectorAll("ul#links > *");
for (let i = 0; i < link.length; i++) {
	let allLinks = link[i];
	allLinks.addEventListener("click", hideLinks);
	allLinks.addEventListener("click", removeActive);
}

// When the outer part of the hamburger menu is clicked the links disappear
main.addEventListener("click", hideLinksOnly);
main.addEventListener("click", removeActive);

// Function Components
function hideLinks() {
	if (links.classList.contains("hidden")) {
		links.classList.remove("hidden");
	} else {
		links.classList.add("hidden");
	}
}
function hideLinksOnly() {
	if (links.classList.contains("hidden") === false) {
		links.classList.add("hidden");
	}
}
function changeMenuState() {
	hamburger.classList.toggle("active");
}
function removeActive() {
	hamburger.classList.remove("active");
}

//* End from Mayanwolfe

// Recipes dropdown
const recipesButton = document.getElementById("recipesButton");
const recipeDropdown = document.getElementById("recipeDropdown");

recipesButton.addEventListener("click", (event) => {
	event.preventDefault(); // Prevent the click event from triggering form submission
    recipeDropdown.classList.toggle("hidden"); // Toggle visibility of the menu links
});

 // Close the dropdown if the user clicks outside of it
document.addEventListener("click", function (event) {
    if (!recipesButton.contains(event.target) && !recipeDropdown.contains(event.target)) {
      recipeDropdown.classList.add("hidden");
    }
});
*/