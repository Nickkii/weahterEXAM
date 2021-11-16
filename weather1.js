// определение геопозиции
function getLocation() {
    $.get("https://ipapi.co/json", function(data) {
        getWeather(data.city);
    });
}


// подключение автозаполнения от гугл
// $(document).ready(function() {
//     google.maps.event.addDomListener(window, 'load', initialize);
// });

// function initialize() {
//     var input = document.getElementById('location');
//     var autocomplete = new google.maps.places.Autocomplete(input);
// }



const list = document.getElementById('today')
const serchBlock = document.getElementById('serchBlock')

serchBlock.insertAdjacentHTML('beforebegin', ` 
<section id="titleCityBlock">
<div class="titleCity">
    Прогноз погоды 
</div>
</section>`)

list.insertAdjacentHTML('beforebegin', `
<div class="tab">
    <button class="tablinks" onclick="openCity(event, 'today')" id="defaultOpen">Погода на сегодня</button>
    <button class="tablinks" onclick="openCity(event, 'fiveDays')">Погода на 5 дней</button>
</div>
<div class="weekdays">
    <!-- Tab content -->
    <div id="today" class="tabcontent">
        <div class="background">

            <div class="bannerCity" id="bannerCity">
                <div class="weatherContainer">

                    <div class="leftCont" id="leftCont">
                        <div class="leftContBlock">
                            <div class="cityTemp">${getWeather.temp}</div>
                            <span class="title">Ощущается как</span>
                            <span class="feelsLike">${getWeather.feelsLike}</span>
                            <div class="cityName">${getWeather.cityname}</div>
                            <div class="cityTime">${getWeather.currTime}</div>
                            <div class="tempAllBlock">
                                <div class="tempAll">
                                    <div class="imgInfoBlockCity"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 226 226" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#ffffff"><path d="M113,113h-56.5v-75.33333c0,-10.40542 8.42792,-18.83333 18.83333,-18.83333h18.83333c10.40542,0 18.83333,8.42792 18.83333,18.83333z" opacity="0.35"></path><path d="M84.75,94.16667c-31.20683,0 -56.5,25.29317 -56.5,56.5c0,31.20683 25.29317,56.5 56.5,56.5c31.20683,0 56.5,-25.29317 56.5,-56.5c0,-31.20683 -25.29317,-56.5 -56.5,-56.5z"></path><rect x="6" y="7" transform="scale(9.41667,9.41667)" width="6" height="4"></rect><path d="M164.302,75.33333c0,1.88333 0,26.36667 0,28.25c0,5.65 3.76667,9.41667 9.41667,9.41667c5.65,0 9.41667,-3.76667 9.41667,-9.41667c0,-1.88333 0,-26.36667 0,-28.25c0,-5.65 -3.76667,-9.41667 -9.41667,-9.41667c-5.65,0 -9.41667,3.76667 -9.41667,9.41667z"></path><path d="M183.13533,41.43333l21.65833,21.65833c3.76667,4.70833 0.94167,12.24167 -5.65,12.24167h-50.85c-6.59167,0 -9.41667,-7.53333 -4.70833,-12.24167l20.71667,-21.65833c5.65,-4.70833 13.18333,-4.70833 18.83333,0z"></path></g></g></svg></div>
                                    <div class="pInfoBlockCity">
                                        <p>Макс. темп.</p>
                                        <p class="tempMax">${getWeather.tempMax}</p>
                                    </div>
                                </div>
                                <div class="tempAll">
                                    <div class="imgInfoBlockCity"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 226 226" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#ffffff"><path d="M113,113h-56.5v-75.33333c0,-10.40542 8.42792,-18.83333 18.83333,-18.83333h18.83333c10.40542,0 18.83333,8.42792 18.83333,18.83333z" opacity="0.35"></path><path d="M84.75,94.16667c-31.20683,0 -56.5,25.29317 -56.5,56.5c0,31.20683 25.29317,56.5 56.5,56.5c31.20683,0 56.5,-25.29317 56.5,-56.5c0,-31.20683 -25.29317,-56.5 -56.5,-56.5z"></path><rect x="6" y="7" transform="scale(9.41667,9.41667)" width="6" height="4"></rect><path d="M164.98942,75.56875c0,-1.88333 0,-26.36667 0,-28.25c0,-5.65 3.76667,-9.41667 9.41667,-9.41667c5.65,0 9.41667,3.76667 9.41667,9.41667c0,1.88333 0,26.36667 0,28.25c0,5.65 -3.76667,9.41667 -9.41667,9.41667c-5.65,0 -9.41667,-3.76667 -9.41667,-9.41667z"></path><path d="M183.82275,109.46875l21.65833,-21.65833c3.76667,-4.70833 0.94167,-12.24167 -5.65,-12.24167h-50.85c-6.59167,0 -9.41667,7.53333 -4.70833,12.24167l20.71667,21.65833c5.65,4.70833 13.18333,4.70833 18.83333,0z"></path></g></g></svg></div>
                                    <div class="pInfoBlockCity">
                                        <p>Мин.темп.</p>
                                        <p class="tempMin">${getWeather.tempMin}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="infoBlock">
                    <div class="infoBlockCity">

                        <div class="humidityAll">
                            <div class="imgInfoBlockCity"><img src="https://img.icons8.com/plumpy/30/000000/hygrometer--v1.png" /></div>
                            <div class="pInfoBlockCity">
                                <p>Влажность</p>
                                <p class="humidity">${getWeather.humidity} %</p>
                            </div>
                        </div>
                        <div class="visibilityAll">
                            <div class="imgInfoBlockCity"><img src="https://img.icons8.com/plumpy/30/000000/atmospheric-pressure.png" /></div>
                            <div class="pInfoBlockCity">
                                <p>Давление</p>
                                <p class="pressure">${getWeather.pressure}</p>
                            </div>
                        </div>
                        <div class="sunriseAll">
                            <div class="imgInfoBlockCity"><img src="https://img.icons8.com/plumpy/30/000000/sunrise.png" /></div>
                            <div class="pInfoBlockCity">
                                <p>Восход</p>
                                <p class="sunrise">${getWeather.sunrise}</p>
                            </div>
                        </div>
                        <div class="sunsetAll">
                            <div class="imgInfoBlockCity"><img src="https://img.icons8.com/plumpy/30/000000/sunset.png" /></div>
                            <div class="pInfoBlockCity">
                                <p>Закат</p>
                                <p class="sunset">${getWeather.sunset}</p>
                            </div>
                        </div>
                    </div>
                    <div class="infoHoursCity">
                        <div class="blockDay hour00">
                            <div class="date00"></div>
                            <div class="icon000"></div>
                            <div class="temp00"></div>
                        </div>
                        <div class="blockDay hour01">
                            <div class="date01"></div>
                            <div class="icon001"></div>
                            <div class="temp01"></div>
                        </div>
                        <div class="blockDay hour02">
                            <div class="date02"></div>
                            <div class="icon002"></div>
                            <div class="temp02"></div>
                        </div>
                        <div class="blockDay hour03">
                            <div class="date03"></div>
                            <div class="icon003"></div>
                            <div class="temp03"></div>
                        </div>
                        <div class="blockDay hour04">
                            <div class="date04"></div>
                            <div class="icon004"></div>
                            <div class="temp04"></div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>

            <div id="fiveDays" class="tabcontent">
                <div class="tabcontentdays">
                    <div class="blockDay day-two">
                        <div class="date2"></div>
                        <div class="icon02"></div>
                        <div class="description2"></div>
                        <div class="temp2"></div>
                        <div class="humidity2"></div>
                        <div class="speed2"></div>
                        <div class="pop2"></div>
                        <div class="main2"></div>
                    </div>
                    <div class="blockDay day-tree">
                        <div class="date3"></div>
                        <div class="icon03"></div>
                        <div class="description3"></div>
                        <div class="temp3"></div>
                        <div class="humidity3"></div>
                        <div class="speed3"></div>
                        <div class="pop3"></div>
                        <div class="main3"></div>
                    </div>
                    <div class="blockDay day-four">
                        <div class="date4"></div>
                        <div class="icon04"></div>
                        <div class="description4"></div>
                        <div class="temp4"></div>
                        <div class="humidity4"></div>
                        <div class="speed4"></div>
                        <div class="pop4"></div>
                        <div class="main4"></div>
                    </div>
                    <div class="blockDay day-five">
                        <div class="date5"></div>
                        <div class="icon05"></div>
                        <div class="description5"></div>
                        <div class="temp5"></div>
                        <div class="humidity5"></div>
                        <div class="speed5"></div>
                        <div class="pop5"></div>
                        <div class="main5"></div>
                    </div>
                    <div class="blockDay day-six">
                        <div class="date6"></div>
                        <div class="icon06"></div>
                        <div class="description6"></div>
                        <div class="temp6"></div>
                        <div class="humidity6"></div>
                        <div class="speed6"></div>
                        <div class="pop6"></div>
                        <div class="main6"></div>
                    </div>
                </div>

    </div>
</div>`)

function getWeather(city) {
    var api = "https://api.openweathermap.org/data/2.5/forecast/?lang=ru&exclude=daily&q=";
    var units = "&units=metric";
    var appid = "&appid=eb40569be873eddca9a3ad817c1a07fb";
    var $http = api + city + units + appid;
    $.getJSON($http, function(data) {
        console.log(data);
        const cityname = data.city.name;


        const urlPixabay = `https://pixabay.com/api/?key=23641816-dcf4d4f9c34852472448f65fc&page=1&orientation=horizontal&category=places&image_type=photo&q=${cityname}`
        console.log(urlPixabay)

        fetch(`https://pixabay.com/api/?key=23641816-dcf4d4f9c34852472448f65fc&page=1&orientation=horizontal&category=places&image_type=photo&q=${cityname}`)
            .then(response => response.json())
            .then(result => {
                document.querySelector(".tabcontent").style.backgroundImage = ""
                if (result.hits.length > 0) {
                    document.querySelector(".tabcontent").style.backgroundImage = `url(${result.hits[0].largeImageURL})`
                }
            })
        const icon1 = data.list[0].weather[0].icon;
        temp = data.list[0].main.temp.toFixed(0) + '°C';
        $(".cityTemp").text(temp);
        main = data.list[0].weather[0].main
        status = data.list[0].weather[0].description;
        iconId = data.list[0].weather[0].id;
        pressure = Math.round(data.list[0].main.pressure);
        humidity = Math.round(data.list[0].main.humidity);
        windSpeed = (data.list[0].wind.speed * 3.6).toFixed(0);
        windDirection = data.list[0].wind.deg.toFixed(0);
        city = data.list[0].name;
        country = data.list[0].sys.country;
        feelsLike = data.list[0].main.feels_like.toFixed(0);
        tempMax = data.list[0].main.temp_max.toFixed(0);
        tempMin = data.list[0].main.temp_min.toFixed(0);
        sunrise = data.city.sunrise;
        sunset = data.city.sunset;


        var hours = new Date().getHours();
        var dayOrNight = hours > 6 && hours < 22 ? "day" : "night";

        inputTextValue = data.city.name;
        $(".cityName").text(cityname);
        $(".cityTemp").text(temp);
        $(".feelsLike").text(feelsLike + '°C');
        $(".tempMax").text(tempMax + '°C');
        $('.tempMin').text(tempMin + '°C');
        $(".status").text(status[0].toUpperCase() + status.slice(1));
        $(".windSpeed").text(windSpeed + " км/ч");
        $(".humidity").text(humidity + '%')
        $(".sunrise").text(msToTime(sunrise));
        $(".sunset").text(msToTime(sunset));
        $("#location").val(inputTextValue);
        $("#cityName").text(city);
        $(".pressure").text(pressure + " Па");

        // установка местного времени
        const timezone = data.city.timezone;
        const timezoneInMinutes = timezone / 60;
        const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");
        $(".cityTime").text(currTime);



        // прогноз почасово
        let hourNow = data.list[0].weather[0].temp_day;


        //   прогноз по дням
        // DAY 2
        let date2 = data.list[7].dt_txt;
        $(".date2").text(date2);
        document.querySelector('.icon02').innerHTML = ` <img src = "https://openweathermap.org/img/wn/${data.list[7].weather[0]['icon']}@2x.png"> `
        const description2 = data.list[7].weather[0].description;
        $(".description2").text(description2);
        const temp2 = data.list[7].main.temp.toFixed(0);
        $(".temp2").text("Температура: " + temp2 + "°C");
        const humidity2 = data.list[7].main.humidity;
        $(".humidity2").text("Влажность: " + humidity2 + "%");
        const speed2 = Math.round((Number(data.list[7].wind.speed) * 3.6) * 100) / 100;
        $(".speed2").text("Ветер: " + speed2 + " км/ч");


        // DAY 3
        let date3 = data.list[15].dt_txt;
        $(".date3").text(date3);
        document.querySelector('.icon03').innerHTML = ` <img src = "https://openweathermap.org/img/wn/${data.list[15].weather[0]['icon']}@2x.png"> `
        const description3 = data.list[15].weather[0].description;
        $(".description3").text(description3);
        const temp3 = data.list[15].main.temp.toFixed(0);
        $(".temp3").text("Температура: " + temp3 + "°C");
        const humidity3 = data.list[15].main.humidity;
        $(".humidity3").text("Влажность: " + humidity3 + "%");
        const speed3 = Math.round((Number(data.list[15].wind.speed) * 3.6) * 100) / 100;
        $(".speed3").text("Ветер: " + speed3 + " км/ч");



        // DAY 4
        let date4 = data.list[23].dt_txt;
        $(".date4").text(date4);
        document.querySelector('.icon04').innerHTML = ` <img src = "https://openweathermap.org/img/wn/${data.list[23].weather[0]['icon']}@2x.png"> `
        const description4 = data.list[23].weather[0].description;
        $(".description4").text(description4);
        const temp4 = data.list[23].main.temp.toFixed(0);
        $(".temp4").text("Температура: " + temp4 + "°C");
        const humidity4 = data.list[23].main.humidity;
        $(".humidity4").text("Влажность: " + humidity4 + "%");
        const speed4 = Math.round((Number(data.list[23].wind.speed) * 3.6) * 100) / 100;
        $(".speed4").text("Ветер: " + speed4 + " км/ч");


        // DAY 5
        let date5 = data.list[30].dt_txt;
        $(".date5").text(date5);
        document.querySelector('.icon05').innerHTML = ` <img src = "https://openweathermap.org/img/wn/${data.list[30].weather[0]['icon']}@2x.png"> `
        const description5 = data.list[30].weather[0].description;
        $(".description5").text(description5);
        const temp5 = data.list[30].main.temp.toFixed(0);
        $(".temp5").text("Температура: " + temp5 + "°C");
        const humidity5 = data.list[30].main.humidity;
        $(".humidity5").text("Влажность: " + humidity5 + "%");
        const speed5 = Math.round((Number(data.list[30].wind.speed) * 3.6) * 100) / 100;
        $(".speed5").text("Ветер: " + speed5 + " км/ч");


        // DAY 6
        let date6 = data.list[38].dt_txt;
        $(".date6").text(date6);
        document.querySelector('.icon06').innerHTML = ` <img src = "https://openweathermap.org/img/wn/${data.list[38].weather[0]['icon']}@2x.png"> `
        const description6 = data.list[38].weather[0].description;
        $(".description6").text(description6);
        const temp6 = data.list[38].main.temp.toFixed(0);
        $(".temp6").text("Температура: " + temp6 + "°C");
        const humidity6 = data.list[38].main.humidity;
        $(".humidity6").text("Влажность: " + humidity6 + "%");
        const speed6 = Math.round((Number(data.list[30].wind.speed) * 3.6) * 100) / 100;
        $(".speed6").text("Ветер: " + speed6 + " км/ч");




        // почасово
        date00 = msToTime(data.list[0].dt);
        $(".date00").text(date00);
        document.querySelector('.icon000').innerHTML = ` <img src = "https://openweathermap.org/img/wn/${data.list[0].weather[0]['icon']}@2x.png"> `
        temp00 = data.list[0].main.temp.toFixed(0);
        $(".temp00").text(temp00 + "°C");

        date01 = msToTime(data.list[1].dt);
        $(".date01").text(date01);
        document.querySelector('.icon001').innerHTML = ` <img src = "https://openweathermap.org/img/wn/${data.list[1].weather[0]['icon']}@2x.png"> `
        temp01 = data.list[1].main.temp.toFixed(0);
        $(".temp01").text(temp01 + "°C");

        date02 = msToTime(data.list[2].dt);
        $(".date02").text(date02);
        document.querySelector('.icon002').innerHTML = ` <img src = "https://openweathermap.org/img/wn/${data.list[2].weather[0]['icon']}@2x.png"> `
        temp02 = data.list[2].main.temp.toFixed(0);
        $(".temp02").text(temp02 + "°C");

        date03 = msToTime(data.list[3].dt);
        $(".date03").text(date03);
        document.querySelector('.icon003').innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.list[3].weather[0]['icon']}@2x.png"> `
        temp03 = data.list[3].main.temp.toFixed(0);
        $(".temp03").text(temp03 + "°C");

        date04 = msToTime(data.list[4].dt);
        $(".date04").text(date04);
        document.querySelector('.icon004').innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.list[4].weather[0]['icon']}@2x.png"> `
        temp04 = data.list[4].main.temp.toFixed(0);
        $(".temp04").text(temp04 + "°C");



        function CardBackground(main) {
            let bannerCityBackgr = document.getElementById('leftCont');
            if (data.list[0].weather[0].main == 'Rain') {
                bannerCityBackgr.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
            }
            if (data.list[0].weather[0].main == 'Clouds') {
                bannerCityBackgr.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
            }
            if (data.list[0].weather[0].main == 'Clear') {
                bannerCityBackgr.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
            }
            if (data.list[0].weather[0].main == 'Snow') {
                bannerCityBackgr.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
            }
            if (data.list[0].weather[0].main == 'Fog') {
                bannerCityBackgr.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
            }
            if (data.list[0].weather[0].main == 'Thunderstorm') {
                bannerCityBackgr.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
            }
        }
        CardBackground()
    });


}
//время sunrise и sunset
const msToTime = function(millisecond) {
    let time = new Date(millisecond * 1000).toString('h-mm');
    let split = time.split(' ');
    let splitItem = split[4];
    return splitItem.slice(0, 5);
}

//показатель ветра
function math() {
    temp = Math.round((temp - 32) * 5 / 9 * 10 / 10);
    windSpeed = Math.round(windSpeed * 1.609344 * 10 / 10);
}

//дата
function getDate() {
    var d = new Date();
    var date = d.toLocaleDateString();
    $("#date").html(date);
}

//время
function getClock() {
    let d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    $("#time").text(h + ":" + m + ":" + s);
    let t = setTimeout(getClock, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

getDate();
getClock();
getLocation();


//серч инпут
window.onkeyup = keyup;
var inputTextValue;

function keyup(e) {
    inputTextValue = e.target.value;
    if (e.keyCode == 13) {
        console.log(inputTextValue);
        if (~inputTextValue.indexOf(",")) inputTextValue = "";
        getWeather(inputTextValue);
    }
}

$(document).ready(function() {
    $("#location").on("click", function() {
        $(this).val("");
        inputTextValue = "";
    });
    $('form').submit(function() {
        if (~inputTextValue.indexOf(",")) inputTextValue = "";
        getWeather(inputTextValue);
        return false;
    });
});


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
