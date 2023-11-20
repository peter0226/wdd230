const currentTemp = document.querySelector('#current-temp');
const weatherlcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#description') ;
const humidity = document.querySelector('#humidity');
const windChill = document.querySelector('#wind-chill');
const lat=21.16;
const lon=-86.85;
const apiKey="1af772870981d7c04599ac687ad3192b";
const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

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


function displayResults(data){
    currentTemp.innerHTML= `${data.main.temp}&deg;F`;
    weatherlcon.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    desc = desc.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join(' ');
    captionDesc.textContent = `${desc}`;
    humidity.innerHTML=data.main.humidity+" %";

    const windChillValue = updateWindChill(data.main.temp, data.wind.speed);
    windChill.innerHTML = windChillValue;
}

const cnt = 32;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${lat}&lon=${lon}&appid=${apiKey}&cnt=${cnt}`;

async function getForecastFetch() {
    try {
        const forecastResponse = await fetch(forecastURL);
        if (forecastResponse.ok) {
            const foreData = await forecastResponse.json();
            console.log(foreData); // testing
            displayForecast(foreData);
        } else {
            throw Error(await forecastResponse.text());
        }
    } catch (error) {
        console.log(error);
    } 
}

function displayForecast(data) {
    const forecastContainer = document.getElementById('forecast-container'); // Supongo que tienes un contenedor en tu HTML con el id "forecast-container"
  
    // Limpiar contenido existente antes de agregar nuevos elementos
    forecastContainer.innerHTML = '';
  
    // Iterar sobre los elementos en data.list (asumiendo que hay al menos 3 elementos)
    for (let i = 8; i <= 24; i += 8) {
      // Crear elementos para cada pronóstico
      const forecastElement = document.createElement('div');
      forecastElement.classList.add('forecast');
  
      const imgTempElement = document.createElement('div');
      imgTempElement.classList.add('imgTemp');
  
      const imgElement = document.createElement('img');
      imgElement.src = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;
      imgElement.alt = `${data.list[i].weather[0].description} Icon`;
      imgElement.classList.add('imgForeContent');
  
      const tempElement = document.createElement('span');
      tempElement.classList.add('tempForeContent');
      tempElement.textContent = `${(data.list[i].main.temp).toFixed(0)} °F`;
  
      imgTempElement.appendChild(imgElement);
      imgTempElement.appendChild(tempElement);
  
      const dateElement = document.createElement('span');
      dateElement.classList.add('dateForeContent');
      dateElement.textContent = obtenerFecha(data.list[i].dt);
  
      const dayElement = document.createElement('span');
      dayElement.classList.add('dayForeContent');
      dayElement.textContent = obtenerDiaSemana(data.list[i].dt);
  
      forecastElement.appendChild(imgTempElement);
      forecastElement.appendChild(dateElement);
      forecastElement.appendChild(dayElement);
  
      forecastContainer.appendChild(forecastElement);
    }
  }
  
  // Función auxiliar para obtener la fecha en formato "MMM DD"
  function obtenerFecha(timestamp) {
    const date = new Date(timestamp * 1000);
    const options = { month: 'short', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  
  // Función auxiliar para obtener el día de la semana
  function obtenerDiaSemana(timestamp) {
    const date = new Date(timestamp * 1000);
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  


apiFetch();
getForecastFetch();