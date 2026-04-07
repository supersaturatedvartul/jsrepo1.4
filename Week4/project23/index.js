const key = 'use_your_api_key';

const input = document.getElementById('weatherinput');
const findbtn = document.getElementById('find');
const content = document.getElementById('content');
const cityelement = document.getElementById('citytype');
const imgelement = document.getElementById('weathertypeimg');
const tempelement = document.getElementById('temptype');
const container = document.querySelector('.container')

findbtn.addEventListener('click',function () {
    if(input.value.length === 0 || input.value === '') {
        alert("Please enter a Valid City!!")
    }
    let city = input.value;

    weather(city);

});

async function weather(city) {
    let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
    let data = await request.json()
    console.log(data)

    let cityName = data.name;
    let weatherType = data.weather[0].main;
    let temp = data.main.temp;
    tempelement.textContent = temp + ' °C';
    cityelement.textContent = cityName;
    if (weatherType === 'Haze' || weatherType === 'Smoke' || weatherType === 'Ash' || weatherType === 'Mist' || weatherType === 'Dust' || weatherType === 'Fog' || weatherType === 'Sand')  {
        imgelement.innerHTML = '<img src="weathericons/smoke.png" height=150px width=150px>'
        container.classList.add('hazecontainer')
    }
    else if (weatherType === 'Clouds') {
        imgelement.innerHTML = '<img src="weathericons/clouds.png" height=150px width=150px">'
        container.classList.add('cloudcontainer')
    }
    else if (weatherType === 'Clear') {
        imgelement.innerHTML = '<img src="weathericons/sun.png" height=150px width=150px">'
        container.classList.add('sunnycontainer')
    }
    else if (weatherType === 'Rain') {
        imgelement.innerHTML = '<img src="weathericons/rain.png" height=150px width=150px">'
        container.classList.add('raincontainer')
    }
    else if (weatherType === 'Drizzle') {
        imgelement.innerHTML = '<img src="weathericons/rainy-day.png" height=150px width=150px">'
        container.classList.add('raincontainer')
    }
    else if (weatherType === 'Thunderstorm') {
        imgelement.innerHTML = '<img src="weathericons/storm.png" height=150px width=150px">'
        container.classList.add('raincontainer')
    }
    else if (weatherType === 'Snow') {
        imgelement.innerHTML = '<img src="weathericons/snowflake.png" height=150px width=150px">'
        container.classList.add('cloudcontainer')
    }
};


