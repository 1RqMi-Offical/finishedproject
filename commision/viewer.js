const strJs = document.querySelector('.str-cards');
const cardsConts = document.querySelectorAll('.str-cards-cont');
const pagination = document.querySelector('.pagination ul ');

for (let x = 0; x < cardsConts.length; x++) {
    const element = document.createElement("li");
    element.classList.add("bullet")
    pagination.appendChild(element);

}

const bullets = document.querySelectorAll('.pagination .bullet');
const prevButton = document.querySelector('.pagination .prev-button');
const nextButton = document.querySelector('.pagination .next-button');


let currentPage = 0;

function showPage(pageIndex) {
    const percentage = -((100 / cardsConts.length)).toFixed(1) * pageIndex;
    console.log(((100 / cardsConts.length)).toFixed(1))
    strJs.style.transform = `translateX(${percentage}%)`;

    bullets.forEach((bullet, index) => {
        if (index === pageIndex) {
            bullet.classList.add('active');
        } else {
            bullet.classList.remove('active');
        }
    });
}

function goToPreviousPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    } else {
        currentPage = cardsConts.length - 1;
        showPage(currentPage);
    }
}

function goToNextPage() {
    if (currentPage < cardsConts.length - 1) {
        currentPage++;
        showPage(currentPage);
    } else {
        currentPage = 0;
        showPage(currentPage);
    }
}

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        currentPage = index;
        console.log("currentpage: " + currentPage);
        console.log("index: " + index);
        showPage(currentPage);
    });
});
showPage(0)
prevButton.addEventListener('click', goToPreviousPage);
nextButton.addEventListener('click', goToNextPage);
