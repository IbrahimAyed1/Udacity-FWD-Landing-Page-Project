/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const mySections = Array.from(document.querySelectorAll("section"));
let getNavbarList = document.getElementById("navbar__list");
let numOfSections = mySections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function addListItem() {
    for (let sectionNumber = 0; sectionNumber < numOfSections; sectionNumber++) {
        sectionName = mySections[sectionNumber].getAttribute("data-nav");
        sectionLink = mySections[sectionNumber].getAttribute('id');
        let createListItem = document.createElement("li");
        createListItem.innerHTML = `<a class="menu__link" href="#${sectionLink}">${sectionName}<a/>`
        getNavbarList.appendChild(createListItem)
    }
}


// Scroll to anchor ID using scrollTO event
const scrollTo = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("data-scroll-to");
    const element = document.querySelector(target);

    element.scrollIntoView({ behavior: "smooth" });
};

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
addListItem();


// Set sections as active
// Add class 'active' to section when near top of viewport

function isElementVisible(currentSection) {
    var rect = currentSection.getBoundingClientRect(),
        vWidth = window.innerWidth || document.documentElement.clientWidth,
        vHeight = window.innerHeight || document.documentElement.clientHeight,
        efp = function(x, y) { return document.elementFromPoint(x, y) };

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 ||
        rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
        currentSection.contains(efp(rect.left, rect.top)) ||
        currentSection.contains(efp(rect.right, rect.top)) ||
        currentSection.contains(efp(rect.right, rect.bottom)) ||
        currentSection.contains(efp(rect.left, rect.bottom))
    );
}

//Check to add or Remove active class 
document.onscroll = function setActiveClass() {
    for (section of mySections) {

        if (isElementVisible(section)) {
            if (!section.classList.contains("your-active-class")) {
                section.classList.add("your-active-class");
            }
        } else {
            section.classList.remove("your-active-class");
        }

    }
}