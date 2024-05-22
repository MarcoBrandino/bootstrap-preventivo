console.log("funziona");

const inputTipoLavoro = document.getElementById('tipo_lavoro');
const inputCodicePromozionale = document.getElementById('codice_promozionale');

console.log(inputCodicePromozionale, inputTipoLavoro);

const prezzoBackend = 20.50;
const prezzoFrontend = 15.30;
const prezzoAnalisi = 33.60;

const prezzoFinaleElement = document.getElementById('prezzoFinale');

const buttonElement = document.getElementById('submit');
buttonElement.addEventListener('click', function () {
    let costo = 0;

    // CONTROLLI TIPO LAVORO
    const tipoLavoro = inputTipoLavoro.value;
    if (tipoLavoro === 'Backed_Development') {
        console.log('back');
        costo = 10 * prezzoBackend;
    } else if (tipoLavoro === 'Frontend_Development') {
        console.log('front');
        costo = 10 * prezzoFrontend;
    } else if (tipoLavoro === 'Project_Analysis') {
        console.log('proj');
        costo = 10 * prezzoAnalisi;
    }

    // CONTROLLO CODICE PROMOZIONALE
    const codicePromozionale = inputCodicePromozionale.value;
    let sconto = 0;
    if (codicePromozionale === 'YHDNU32' || codicePromozionale === 'JANJC63' || codicePromozionale === 'PWKCN25' || codicePromozionale === 'SJDPO96' || codicePromozionale === 'POCIE24') {
        console.log('Codice promoziopnale funziona')
        sconto = costo * 0.25
    }
    else {
        console.log('codice non valido');
    }

    // CALCOLO PREZZO FINALE
    costo = costo - sconto;
    console.log(costo.toFixed(2));

    prezzoFinaleElement.innerHTML = "€" + costo.toFixed(2);
})