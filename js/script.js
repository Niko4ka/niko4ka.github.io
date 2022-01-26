let countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("timer").innerHTML = days + "д " + hours + "ч " + minutes + "м";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timerText").innerHTML = "";
        document.getElementById("timer").innerHTML = "Покупай мой курс :)";
        let buttons = document.getElementsByClassName("buyCourse");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "block";
            buttons[i].classList.add("opacityChange");
        }
    }
}, 1000);

//intersection animations
let observerDown = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const greet = entry.target.querySelector(".greeting");
        if (entry.isIntersecting) {
            greet.classList.add('appearDown');
            return;
        }
        greet.classList.remove('appearDown');
    });
});
observerDown.observe(document.querySelector('.main'));

let observerLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appearLeft');
            entry.target.classList.remove('opacity0');
        }
    });
});
observerLeft.observe(document.querySelector('.timer'));
observerLeft.observe(document.querySelector('.info'));
observerLeft.observe(document.querySelector('.fourFacts'));

let observerSecond = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const message = entry.target.querySelector(".message");
        if (entry.isIntersecting) {
            message.classList.add('appearDown');
            return;
        }
        message.classList.remove('appearDown');
    });
});
observerSecond.observe(document.querySelector('.aboutMeDiv'));

let observerThird = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const message = entry.target.querySelector(".message");
        if (entry.isIntersecting) {
            message.classList.add('appearDown');
            return;
        }
        message.classList.remove('appearDown');
    });
});
observerThird.observe(document.querySelector('.thirdMain'));

let first = 0;
let second = 0;
let third = 0;

function openMore(x) {
    if (x == 1) {
        if (first == 0) {
            first = 1;
            document.getElementById('firstAdditional').style.display = "block";
            return;
        } else {
            first = 0;
            document.getElementById('firstAdditional').style.display = "none";
        }
    }

    if (x == 2) {
        if (second == 0) {
            second = 1;
            document.getElementById('secondAdditional').style.display = "block";
        } else {
            second = 0;
            document.getElementById('secondAdditional').style.display = "none";
        }
    }

    if (x == 3) {
        if (third == 0) {
            third = 1;
            document.getElementById('thirdAdditional').style.display = "block";
        } else {
            third = 0;
            document.getElementById('thirdAdditional').style.display = "none";
        }
    }
}

function close() {
    document.getElementById('infoBuy').style.display = "none";
}

//payment methods
function sber(){
    document.getElementById('sber').style.display = "block";
    document.getElementById('qiwi').style.display = "none";
    document.getElementById('sberDiv').style.backgroundColor = "#bbbbbb";
    document.getElementById('qiwiDiv').style.backgroundColor = "white";
}
function qiwi(){
    document.getElementById('qiwi').style.display = "block";
    document.getElementById('sber').style.display = "none";
    document.getElementById('qiwiDiv').style.backgroundColor = "#bbbbbb";
    document.getElementById('sberDiv').style.backgroundColor = "white";
}

//feedback carousel
let slideIndex = 1;
let timerSlides;

function showSlides() {
    clearTimeout(timerSlides);
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

    let dots = document.getElementsByClassName("slide-dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slide-dot-active", "");
    }
    dots[slideIndex-1].className += " slide-dot-active";
    timerSlides = setTimeout(plusSlides, 7000, 1);
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

window.onload = function() {
    showSlides();
}