var inputvalue = document.querySelector('#cityInput');
var btn = document.querySelector('#searchBtn');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var feel_like = document.querySelector('#feel_like');
var visibility = document.querySelector('#visibility');
var humidity = document.querySelector('#humidity');
apik = "f5f3ad4de40e18648eea58eabf206af1";

function convertion(val) {
    return (val - 273).toFixed(3);
}
function convertionkm(val) {
    return (val/1000).toFixed(1);
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temperature = data['main']['temp']
            var windspeed = data['wind']['speed']
            var feellike = data['main']['feels_like']
            var humid = data['main']['humidity']
            var visibile = data['visibility']



            city.innerHTML = `Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${convertion(temperature)} °C<span>`
            feel_like.innerHTML = `Feel Like : <span>${convertion(feellike)} °C<span>`
            description.innerHTML = `Sky conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed : <span>${windspeed} km/h<span>`
            humidity.innerHTML = `Humidity : <span>${humid} %<span>`
            visibility.innerHTML = `Visibility : <span>${convertionkm(visibile)} km <span>`



        })
        .catch(err => alert('You entered wrong city name'))
})