document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'TU_API_KEY';
    const ciudad = 'Nueva York';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperatura = data.main.temp;
            const descripcion = data.weather[0].description;

            document.getElementById('temperature').textContent = `Temperatura: ${temperatura}°C`;
            document.getElementById('description').textContent = `Condición: ${descripcion}`;
        })
        .catch(error => {
            console.error('Error al obtener datos del tiempo:', error);
        });
});
