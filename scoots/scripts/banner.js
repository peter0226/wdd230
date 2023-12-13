const bannerMeet = document.querySelector('#bannerMeet');
const pBanner = document.querySelector('#pBanner');
const sw = document.querySelector('.switch');
const menu = document.querySelector('#menu');

bannerMeet.classList.add("show");

function closeBanner() {
    bannerMeet.classList.toggle("noShow");
    sw.classList.toggle("bannerShow");
    menu.classList.toggle("bannerShow");
}