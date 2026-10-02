let botaoSimples = document.getElementById("simples");
var meuTitulo = document.getElementById("Corpo");

let modoEscuroAtivado = false;

botaoSimples.onclick = trocaClasse

function trocaClasse() {
    if(modoEscuroAtivado == true) {
        meuTitulo.classList.remove("modoEscuro");
        meuTitulo.classList.add("modoClaro");

        modoEscuroAtivado = false;
    } else {
        meuTitulo.classList.remove("modoClaro");
        meuTitulo.classList.add("modoEscuro");

        modoEscuroAtivado = true;
    }
}
 