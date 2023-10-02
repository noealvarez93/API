document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'e66d02b5d091801b6ef58c17b5766a48'; 
    const ciudad = 'Montevideo,uy'; 

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperatura = data.main.temp;
            const descripcion = data.weather[0].description;

            document.getElementById('temperature').textContent = `${temperatura}°C`;
            document.getElementById('description').textContent = `Condición: ${descripcion}`;
        })
        .catch(error => {
            console.error('Error al obtener datos del tiempo:', error);
        });
});
