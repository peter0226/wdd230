const bannerMeet = document.querySelector('#bannerMeet');
const pBanner = document.querySelector('#pBanner');
const sw = document.querySelector('.switch');
const menu = document.querySelector('#menu');
const nowDate = Date.now();
const newDate = new Date(nowDate);
var day = newDate.getDay();

if (day === 1)
{
    bannerMeet.classList.add("show");
    pBanner.innerHTML = `Wednesday at 7:00 p. m.`;

}
else if (day === 2)
{
    bannerMeet.classList.add("show");
    pBanner.innerHTML = `Tomorrow at 7:00 p. m.`;
}
else if (day === 3)
{
    bannerMeet.classList.add("show");
    pBanner.innerHTML = `¡Today at 7:00 p. m.!`;
}else{
    bannerMeet.classList.add("noShow");
    sw.classList.toggle("bannerShow");
    menu.classList.toggle("bannerShow");
}

function closeBanner() {
    bannerMeet.classList.toggle("noShow");
    sw.classList.toggle("bannerShow");
    menu.classList.toggle("bannerShow");
}