const mobileNav = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');


burgerIcon.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');

})

let changer = document.querySelector(".changer");
let bullet = document.querySelector(".bullet");
let icoChanger = document.querySelector(".bullet .ico");

// Step 1: Retrieve darkEnabled value from local storage
let darkEnabled = localStorage.getItem("darkEnabled");

// Step 2: Update darkEnabled variable
darkEnabled = darkEnabled === "true";

// Step 3: Update UI classes and styles
if (darkEnabled) {
    changer.classList.add("darked");
    bullet.classList.add("darked");
    icoChanger.classList.add("darken");
}



// Step 4: Event listener to save darkEnabled value in local storage
changer.addEventListener("click", e => {
    changer.classList.toggle("darked");
    bullet.classList.toggle("darked");
    icoChanger.classList.toggle("darken");

    darkEnabled = !darkEnabled; // Toggle the value

    // Step 4: Save darkEnabled value in local storage
    localStorage.setItem("darkEnabled", darkEnabled);

    toggleClassAndChangeRootClass("darked");
});

toggleClassAndChangeRootClass("darked");

function toggleClassAndChangeRootClass(className) {
    let root = document.documentElement;
    let hasClass = changer.classList.contains(className);

    if (hasClass) {
        //dark
        root.style.setProperty('--white', 'rgb(19, 19, 19)');
        root.style.setProperty('--gray', '#3b3b3b');
        root.style.setProperty('--black', 'white');
        root.style.setProperty('--gold', '#ffbd59');
        root.style.setProperty('--inverted', 'none');
        root.style.setProperty('--invert', 'invert()');
        root.style.setProperty('--opacityWhite', 'rgba(255, 255, 255, 0)');
        root.style.setProperty('--graywhite', 'rgb(26, 26, 26)');
    } else {
        //light
        root.style.setProperty('--graywhite', 'rgb(240, 240, 240)');
        root.style.setProperty('--opacityWhite', 'rgba(19, 19, 19, 0)');
        root.style.setProperty('--gold', '#5e3a00');
        root.style.setProperty('--inverted', 'invert()');
        root.style.setProperty('--invert', 'none');
        root.style.setProperty('--white', 'white');
        root.style.setProperty('--gray', '#d9d9d9');
        root.style.setProperty('--black', 'rgb(19, 19, 19)');
    }
}



