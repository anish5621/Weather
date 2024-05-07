let inputLocation = document.querySelector('input');

let searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputLocation.value}&units=metric&appid=5c081bd2d45a6947f8f0e584d47efc4a`)
        .then(response => response.json())
        .then(data => {
            inputLocation.value = "";
            console.log(data)


            const sunUpDate = new Date(data.sys.sunrise * 1000);
            const sunDownDate = new Date(data.sys.sunset * 1000);

            let imageIcon = data.weather[0].icon;

            document.querySelector('img').setAttribute("src", `https://openweathermap.org/img/wn/${imageIcon}@4x.png`)

            let city = document.querySelector('#city');
            let temp = document.querySelector('#temp');
            let humidity = document.querySelector('#humidity');
            let wind = document.querySelector('#wind');
            let des = document.querySelector('#des');
            let sunRise = document.querySelector('#sunRise');
            let sunSet = document.querySelector('#sunSet');

            city.innerText = data.name;
            temp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
            humidity.innerText = data.main.humidity + "%";
            wind.innerText = data.wind.speed + "m/s";
            des.innerText = data.weather[0].main;

            let riseHour = sunUpDate.getHours();
            let riseMin = sunUpDate.getMinutes();
            let riseSec = sunUpDate.getSeconds();

            let downHour = sunDownDate.getHours();
            let downMin = sunDownDate.getMinutes();
            let downSec = sunDownDate.getSeconds();

            sunRise.innerText = `${riseHour}:${riseMin}:${riseSec}`;
            sunSet.innerText = `${downHour}:${downMin}:${downSec}`;
            

        })

})