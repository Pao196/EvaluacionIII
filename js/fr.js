function procesarFormulario(evento) {
    evento.preventDefault() 
    const peso = document.getElementById('weight').value
    const minutos = document.getElementById('minutes').value
    const caminar = document.getElementById('caminar').checked
    const correr = document.getElementById('correr').checked
    const resultado = document.getElementById('resultado')

    if (peso < 1 || peso > 120) {
        resultado.textContent = 'El rango aceptado es entre 1 y 120kg';
        return;}
    if (minutos < 5 || minutos > 150 ) {
        resultado.textContent = 'El rango aceptado de tiempo es de 5 y 150 min';
        return;}

    let met = 0;
    if (caminar) {
        met += 3.5;}
    if (correr) {
        met += 8;}

    const calorias = met*3.5*peso*(minutos/200);


    resultado.textContent = 'Las calorías quemadas durante la actividad son: '+calorias.toFixed(2);
    };
