var i = 0;

function checkAnswer(option) {
    var selectedOption = option.innerText;
    var question = option.previousElementSibling.innerText;
    var ris = document.getElementById("punteggio");
    

    // Esempio di logica di valutazione della risposta
    if (question === "Qual è la capitale dell'Italia?" && selectedOption === "a) Roma") {
        //console.log("Risposta corretta!");
        i++;
        ris.innerText = "Score = " + i;
        //alert("Risposta corretta!" + i);
    } else {
        //console.log("Risposta errata!");
        //ris.innerText = "Score = " + i;
        //alert("Risposta errata!" + z);
    }
}