const currentTemp = document.querySelector('#current-temp');
const weatherlcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption') ;
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=1af772870981d7c04599ac687ad3192b"

async function apiFetch() {
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }else{
            throw Error(await response.text());
        }

    } catch(error){
        console.log(error)
    }
}

apiFetch();

function displayResults(data){
    currentTemp.innerHTML= `${data.main.temp}&deg;F`;
    weatherlcon.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    desc = desc.split(' ').map(function(word) {
        return word.toUpperCase();
      }).join(' ');
    captionDesc.textContent = `${desc}`;


}