const apiKey = '4d2130741291e5c53fd60571e6452b61';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');

const weatherIcon = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temp');
const cityElement = document.querySelector('.city');
const humidityElement = document.querySelector('.humidity');
const windElement = document.querySelector('.wind');

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        if(response.status === 404) { 
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.weather').style.display = 'none';
        }
        else{
            if (!response.ok) {
                alert('City not found');
                return;
            }
            const data = await response.json();
    
            // Update weather icon based on weather condition
            const weatherCondition = data.weather[0].main.toLowerCase();
    
            switch (weatherCondition) {
                case 'clouds':
                    weatherIcon.src = 'images/clouds.png';
                    break;
                case 'rain':
                    weatherIcon.src = 'images/rain.png';
                    break;
                case 'clear':
                    weatherIcon.src = 'images/clear.png';
                    break;
                case 'snow':
                    weatherIcon.src = 'images/snow.png';
                    break;
                case 'drizzle':
                    weatherIcon.src = 'images/drizzle.png';
                    break;
                case 'thunderstorm':
                    weatherIcon.src = 'images/thunderstorm.png';
                    break;
                default:
                    weatherIcon.src = 'images/clear.png';
            }
            document.querySelector('.weather').style.display = 'block';
            document.querySelector('.error').style.display = 'none';
    
            tempElement.innerHTML = `${Math.round(data.main.temp)}°C`;
            cityElement.innerHTML = data.name;
            humidityElement.innerHTML = `${data.main.humidity}%`;
            windElement.innerHTML = `${Math.round(data.wind.speed)} km/h`;
        }
    } catch (error) {
        alert('Error fetching weather data');
        console.error(error);
    }
        finally {
            console.log('Weather data fetch attempt completed.');
        }        
}

searchButton.addEventListener('click', () => {
    const city = searchInput.value.trim();
    if (city) {
        checkWeather(city);
    }
});

// Optionally, allow pressing Enter key to search
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});