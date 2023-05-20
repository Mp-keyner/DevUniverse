const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=8Hudq3w4a2m8FgUw8cpr817gbVWTJpGbVrZrjDS7';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // Aquí tienes acceso a los datos de la API de la NASA
        // Puedes procesarlos y mostrarlos en tu HTML

        // Por ejemplo, muestra el título y la descripción de la Imagen Astronómica del Día (APOD)
        const apodContainer = document.getElementById('apod-container');
        apodContainer.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.explanation}</p>
      <img src="${data.url}" alt="APOD">
    `;
    })
    .catch(error => {
        console.error('Error al consultar la API de la NASA:', error);
    });
