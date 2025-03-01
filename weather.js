const apikey = '5432709e3c0d9600de153f68081b1bee';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');


searchBtn.addEventListener('click',()=> {
    const city = cityInput.value.trim();
    if (city){fetchWeather(city);
    }else{
        alert("plese enter a city name!");
    }
});

function fetchWeather(city){
    const apiurl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

    fetch(apiurl)
    .then(response =>{
        if (!response.ok){
            throw new Error("city not found!");
        }
        return response.json();
    })
    .then(data=>{
        displayWeather(data);
    })
    .catch(error=>{
        weatherResult.innerHTML = `<p>${error.message}</p>`;
    });
    
}

function displayWeather(data){
    const{ name,main,weather}=data;
    weatherResult.innerHTML=`
    <h2>${name}</h2>
    <p>temperature :${main.temp}°C</p>
    <p> Weather:${weather[0].description}</p>
    `;
}
