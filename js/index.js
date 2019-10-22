const apiUrl = "http://dev.ftd.team/mockdata/book";
const capa = document.getElementById("capa");
const titulo = document.getElementById("titulo");
const id = "1";
const title = "360° Literatura";
const cover = "https://s3-us-west-2.amazonaws.com/catalogo.ftd.com.br/files/uploads/11603117CJ_resized_596x800.jpg";

let biblioteca = new XMLHttpRequest();
biblioteca.open('json',apiUrl);
biblioteca.responseType = 'json';
biblioteca.send();

biblioteca.onload = function() {
  let livro = biblioteca.response;
  title = livro["title"];
  cover = livro["cover"];
};


