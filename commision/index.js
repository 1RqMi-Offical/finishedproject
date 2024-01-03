let ip = "mc.blocksmc.com"
// set your minecraft ip copying


















const element = document.querySelectorAll(".mover");


function updateBackgroundPosition(event, eler, distance) {
    let backgroundPositionX = 0;
    let backgroundPositionY = 0;
    distance = 3;

    backgroundPositionX -= event.movementX;
    backgroundPositionY -= event.movementY;
    if (backgroundPositionX > distance) {
        backgroundPositionX = distance
    }
    else if (backgroundPositionX < -distance) {
        backgroundPositionX = -distance
    }

    if (backgroundPositionY > distance) {
        backgroundPositionY = distance
    }
    else if (backgroundPositionY < -distance) {
        backgroundPositionY = -distance
    }
    eler.style.backgroundPositionX = `calc(50% + ${backgroundPositionX - 3}px)`;
    eler.style.backgroundPositionY = `calc(50% + ${backgroundPositionY - 3 - 10}px)`;


}

element.forEach(function (l) {
    l.addEventListener('mousemove', function (event) {
        updateBackgroundPosition(event, l);
    });
});
const paragraphs = document.querySelectorAll('.headText p');
window.addEventListener('DOMContentLoaded', () => {

    const h1Elements = document.querySelectorAll('.cont .card .text');

    paragraphs[1].style.animationDelay = "3.5s"
    console.log(paragraphs[1].style.animationDelay)
    h1Elements.forEach((element) => {
        element.style.setProperty("--maxed", "max-content")

        const computedStyle = window.getComputedStyle(element);
        const maxWidth = computedStyle.height;
        console.log("max: " + maxWidth)
        element.style.setProperty('--maxheight', maxWidth);
        console.log(element.style.getPropertyValue('--maxheight'))
        setTimeout(function () { element.style.setProperty("--maxed", "0") }, 500)

    });

    paragraphs.forEach((paragraph) => {

        const width = paragraph.getBoundingClientRect().width + 'px';
        paragraph.style.width = width;
        console.log("Width: " + width)
        paragraph.style.animation = "typewriter 3.5s steps(30, end), caretflicker 1s 3"
        if (paragraph == paragraphs[1]) {
            paragraphs[1].style.animationDelay = "3.5s"
        }
    });
});

paragraphs[1].addEventListener("animationend", e => {

    paragraphs[1].style.opacity = "1";

})





let animationPlayed = false;

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}
var section = document.querySelector('.infocards');
var uniquePlayers = document.querySelector(".cr1 h2 span");
var playersDaily = document.querySelector('.cr2 h2 span');
var clockDaily = document.querySelector('.cr3 h2 span');

function animateNumbers(element, targetValue, start, timer) {
    var currentValue = start;
    var increment = Math.ceil(targetValue / 100);


    var interval = setInterval(function () {

        if (element != clockDaily) {
            currentValue += increment;
        } else {
            currentValue += 1;
        }

        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(interval);

            var displayValue = targetValue;
            if (element != clockDaily) {
                if (targetValue >= 1000) {
                    displayValue = (targetValue / 1000).toFixed(0) + 'k';
                }
            }
            element.textContent = displayValue;

            unStylize(uniquePlayers)
            unStylize(playersDaily)
            unStylize(clockDaily)
        } else {
            element.textContent = currentValue.toLocaleString().replaceAll(",", "");
        }
    }, timer);
}

function startNumberAnimation() {


    if (!animationPlayed && isElementInViewport(section)) {

        stylize(uniquePlayers)
        stylize(playersDaily)

        animateNumbers(uniquePlayers, 1000, 0, 20);
        animateNumbers(playersDaily, 100, 0, 20);
        animationPlayed = true;
    } else if (!isElementInViewport(section)) {
        animationPlayed = false;
    }
}
function stylize(ele) {
    ele.style.color = "#ff00ff"
    ele.style.fontSize = "45px"
}
function unStylize(ele) {
    ele.style.color = "inherit"
    ele.style.fontSize = "inherit"
}
document.addEventListener('scroll', startNumberAnimation);
let copybtn = document.querySelector(".copy");
copybtn.onclick = function () {


    var clipboardItem = new ClipboardItem({ 'text/plain': new Blob([ip], { type: 'text/plain' }) });

    navigator.clipboard.write([clipboardItem]).then(function () {
        copybtn.innerText = 'Copied!';

    }).catch(function (err) {
        console.error('Failed to copy: ', err);
    });
    setTimeout(function () { copybtn.innerText = 'Copy IP' }, 2000);
}

let btnExpand = document.querySelectorAll(".card-btn");
let cardP = document.querySelectorAll(".cont .card p");



for (let b = 0; b < btnExpand.length; b++) {

    btnExpand[b].parentElement.parentElement.onclick = function () {

        cardP[b].classList.toggle("expand");
        btnExpand[b].classList.toggle("exp");
        btnExpand[b].parentNode.classList.toggle("colorize");
        btnExpand[b].parentElement.parentElement.classList.toggle("glow");
    }

}


document.addEventListener("DOMContentLoaded", function () {

    strJs.style.width = `${(cardsConts.length) * 100}% `;



    var card = document.querySelector(".container-join .card");
    console.log("Moving");

    card.addEventListener("mousemove", function (e) {
        var cardRect = card.getBoundingClientRect();
        var offsetX = e.clientX - cardRect.left;
        var offsetY = e.clientY - cardRect.top;

        console.log("OffsetX: " + offsetX)
        console.log("OffsetY: " + offsetY)

        card.classList.remove("rotate-right", "rotate-left", "rotate-top", "rotate-bottom");

        if (offsetX > card.offsetWidth / 2) {
            card.classList.add("rotate-right");
            if (offsetY > card.offsetHeight / 2) {
                card.classList.add("rotate-bottom", "rotate-right");
            } else if (offsetY < card.offsetHeight / 2) {
                card.classList.add("rotate-top", "rotate-right");
            }
        } else if (offsetX < card.offsetWidth / 2) {
            card.classList.add("rotate-left");
            if (offsetY > card.offsetHeight / 2) {
                card.classList.add("rotate-bottom", "rotate-left");
            } else if (offsetY < card.offsetHeight / 2) {
                card.classList.add("rotate-top", "rotate-left");
            }
        }


    });

    card.addEventListener("mouseleave", function () {
        card.classList.remove("rotate-right", "rotate-left", "rotate-top", "rotate-bottom");
    });
});