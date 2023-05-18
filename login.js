
function verify() {
    var nome = document.getElementById("Nome").value;
    var password = document.getElementById("Password").value;

    if(nome === "nome" && password === "password") {
        //var condizione = true;
        //if (condizione) {
            window.location.href = "quizz.html";
          //}
        //alert("Sei entrato con successo!");
        // const contenitore = document.getElementById("corpo");
        // const titolo = document.getElementById("Tit");
        // document.addEventListener("click", function(event) {
        //     contenitore.style.display = "none";
        //     titolo.innerHTML = "Gabriel";
        // });

    }
    else {
        alert("Nome utenti o password sbagliato!");
        console.log(nome);
    }

}