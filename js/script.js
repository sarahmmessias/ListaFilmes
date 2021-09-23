function adicionarFilme() {
  var filmeFav = document.getElementById("filme").value;
  if (filmeFav.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFav);
  } else {
    console.error("Endereço de imagem errado!");
  }
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  var elementoFilmeFav = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFav;
}

  