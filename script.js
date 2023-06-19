const weatherContainer = document.createElement("div");
weatherContainer.style.padding = "50px";
weatherContainer.style.textAlign = "center";
document.body.prepend(weatherContainer);

const xhr= new XMLHttpRequest();

xhr.open(
"GET",
"http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19",
true
);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 & xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
		
		const city = response.name;
		const temp = response.main.temp;
		const pressure = response.main.pressure;
		const description = response.weather[0].description;
		const humidity = response.main.humidity;
		const speed = response.wind.speed;
		const deg = response.wind.deg;
		const icon = `http://openweathermap.org/img/w/${response.weather[0].icon}.png`;
		
	
		
		weatherContainer.innerHTML = `
		<span>Місто: ${city}</span></br>
		<span>Температура: ${temp} °C</span></br>
		<span>Тиск: ${pressure} hPa</span></br>
		<span>Опис: ${description}</span></br>
		<span>Вологість: ${humidity}</span></br>
		<span>Швидкість вітру: ${speed} m/s</span></br>
		<span>Напрям у градусах: ${deg} °</span></br>
		<img src='${icon}'></br>
		`
    }
}

xhr.send();




