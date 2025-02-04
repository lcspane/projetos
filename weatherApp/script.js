const apiKey = '54d5b77c75fd46fd88ae74665a48c7d7'; // Weatherbit.io

// Função principal ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    fetchUserLocation();
    setupAutocomplete();
});

// Função para obter a localização do usuário com base no IP
function fetchUserLocation() {
    fetch('https://ipinfo.io/json?token=c4af9d296bebb0')
        .then(response => response.json())
        .then(data => {
            const city = data.city;
            if (city) {
                document.getElementById('cityInput').value = city;
                fetchWeather(city);
            } else {
                fetchWeather('São Paulo');
            }
        })
        .catch(error => {
            console.error('Erro ao obter localização:', error);
            fetchWeather('São Paulo');
        });
}

// Função para configurar o autocomplete
function setupAutocomplete() {
    const cityInput = document.getElementById('cityInput');
    const citySuggestions = document.getElementById('citySuggestions');

    cityInput.addEventListener('input', function() {
        const query = cityInput.value.trim();
        if (query.length >= 3) {
            fetchCitySuggestions(query);
        } else {
            citySuggestions.innerHTML = '';
        }
    });
}

// Função para buscar sugestões de cidades
function fetchCitySuggestions(query) {
    const url = `https://api.weatherbit.io/v2.0/cities?city=${query}&key=${apiKey}&lang=pt`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data.length > 0) {
                displayCitySuggestions(data.data);
            }
        })
        .catch(error => {
            console.error('Erro ao buscar sugestões de cidades:', error);
        });
}

// Função para exibir as sugestões de cidades
function displayCitySuggestions(cities) {
    const citySuggestions = document.getElementById('citySuggestions');
    citySuggestions.innerHTML = '';

    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = `${city.city_name}, ${city.country_code}`;
        citySuggestions.appendChild(option);
    });
}

// Função para buscar o clima de uma cidade
function fetchWeather(city) {
    const currentWeatherUrl = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}&lang=pt`;
    const forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}&lang=pt&days=6`;

    // Busca o clima atual
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data.length > 0) {
                displayCurrentWeather(data.data[0]);
            } else {
                showError();
            }
        })
        .catch(error => {
            console.error('Erro ao buscar dados do clima atual:', error);
            showError();
        });

    // Busca a previsão para 6 dias
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data.length > 0) {
                displayForecast(data.data);
            }
        })
        .catch(error => {
            console.error('Erro ao buscar previsão do tempo:', error);
        });
}

// Funções para exibir/ocultar erros e exibir dados do clima
function showError() {
    const errorAlert = document.getElementById('errorAlert');
    errorAlert.classList.remove('d-none');
}

function hideError() {
    const errorAlert = document.getElementById('errorAlert');
    errorAlert.classList.add('d-none');
}

function displayCurrentWeather(data) {
    const currentWeather = document.getElementById('currentWeather');
    const cityName = document.getElementById('cityName');
    const weatherIcon = document.getElementById('weatherIcon');
    const temperature = document.getElementById('temperature');
    const weatherCondition = document.getElementById('weatherCondition');
    const feelsLike = document.getElementById('feelsLike');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
    const uvIndex = document.getElementById('uvIndex');

    cityName.textContent = `${data.city_name}, ${data.country_code}`;
    weatherIcon.src = `https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`;
    temperature.textContent = `${data.temp}°C`;
    weatherCondition.textContent = data.weather.description;
    feelsLike.textContent = `${data.app_temp}°C`;
    humidity.textContent = `${data.rh}%`;
    windSpeed.textContent = `${data.wind_spd.toFixed(1)} m/s`;
    uvIndex.textContent = data.uv.toFixed(1);

    currentWeather.classList.remove('d-none');
}

function displayForecast(data) {
    const forecast = document.getElementById('forecast');
    forecast.innerHTML = '';

    data.forEach(day => {
        const date = new Date(day.valid_date).toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric' });
        forecast.innerHTML += `
            <div class="col-md-4 col-lg-2">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title">${date}</h5>
                        <img src="https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png" alt="${day.weather.description}" class="weather-icon mb-3">
                        <p class="card-text">${day.max_temp}°C / ${day.min_temp}°C</p>
                        <p class="card-text">${day.weather.description}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

// Evento de busca manual
document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    }
});