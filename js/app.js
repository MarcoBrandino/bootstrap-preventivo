console.log("funziona");

const inputTipoLavoro = document.getElementById('tipo_lavoro');
const inputCodicePromozionale = document.getElementById('codice_promozionale');
const inputNome = document.getElementById('Nome');
const inputCognome = document.getElementById('Cognome');
const inputEmail = document.getElementById('Email');
console.log(inputCodicePromozionale, inputTipoLavoro);

const prezzoBackend = 20.50;
const prezzoFrontend = 15.30;
const prezzoAnalisi = 33.60;
var boolTipLavoro = false;
const prezzoFinaleElement = document.getElementById('prezzoFinale');

const buttonElement = document.getElementById('submit');

buttonElement.addEventListener('click', function () {
    let costo = 0;
    // CONTROLLI POLICY PRIVACY


    // CONTROLLI NOME
    const Nome = inputNome.value;
    if (Nome !== "") {
        // CONTROLLI COGNOME
        const Cognome = inputCognome.value;
        if (Cognome !== "") {
            // CONTROLLI EMAIL
            const Email = inputEmail.value;
            if (Email !== "") {
                // CONTROLLI TIPO LAVORO
                const tipoLavoro = inputTipoLavoro.value;
                if (tipoLavoro === "Nullo") {
                    alert("Devi inserire un tipo di lavoro");
                }
                else if (tipoLavoro === 'Backed_Development') {
                    console.log('back');
                    costo = 10 * prezzoBackend;
                    boolTipLavoro = true;
                } else if (tipoLavoro === 'Frontend_Development') {
                    console.log('front');
                    costo = 10 * prezzoFrontend;
                    boolTipLavoro = true;
                } else if (tipoLavoro === 'Project_Analysis') {
                    console.log('proj');
                    costo = 10 * prezzoAnalisi;
                    boolTipLavoro = true;
                }

                // CONTROLLO CODICE PROMOZIONALE
                const codicePromozionale = inputCodicePromozionale.value;
                let sconto = 0;
                if (codicePromozionale === 'YHDNU32' || codicePromozionale === 'JANJC63' || codicePromozionale === 'PWKCN25' || codicePromozionale === 'SJDPO96' || codicePromozionale === 'POCIE24') {
                    console.log('Codice promozionale funziona')
                    sconto = costo * 0.25
                }
                else if (codicePromozionale !== "") {
                    alert("Il codice promozionale inserito non è valido");
                }
                else {
                    console.log('codice non inserito');
                }

                // CALCOLO PREZZO FINALE
                if (boolTipLavoro === true) {
                    costo = costo - sconto;
                    console.log(costo.toFixed(2));

                    prezzoFinaleElement.innerHTML = "€" + costo.toFixed(2);
                }
            } else {
                alert("Inserisci un email");
            }
        } else {
            alert("Inserisci un cognome")
        }
    } else {
        alert("Inserisci un nome");
    }

})