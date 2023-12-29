document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const notas = document.getElementById('notas').value;

    if (!titulo || !notas) {
        alert('Por favor, complete todos los campos');
        return;
    }

    // Aquí se debe guardar la información en el dispositivo utilizando la API Web Storage.
    localStorage.setItem(titulo, notas);
    alert('Notas guardadas con éxito');
});
