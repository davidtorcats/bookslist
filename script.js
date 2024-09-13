class Libro {
  constructor(titulo, autor, agno, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.agno = agno;
    this.genero = genero;
  }
}

const libros = [
  new Libro(
    "Harry Potter y la Piedra Filosofal",
    "J.K. Rowling",
    1997,
    "Fantasía"
  ),
  new Libro("El Señor de los Anillos", "J.R.R. Tolkien", 1954, "Fantasía"),
  new Libro("Las Crónicas de Narnia", "C.S. Lewis", 1950, "Fantasía"),
  new Libro("El Hobbit", "J.R.R. Tolkien", 1937, "Fantasía"),
  new Libro("La Madriguera Del Zorro (Oce)", "Sakavic", 2022, "Juvenil"),
  new Libro("Papelucho", "Marcela Paz", 2017, "Ficción"),
];

const mostrarLibros = (libros) => {
  const lista = document.getElementById("listaDeLibros");
  const mensajeNoResultados = document.getElementById("mensajeNoResultados");
  lista.innerHTML = "";
  lista.innerHTML = libros
    .map(
      (libro) =>
        `<li>${libro.titulo} - ${libro.autor} - ${libro.agno} - ${libro.genero}</li>`
    )
    .join("");

  if (libros.length > 0) {
    lista.innerHTML = libros
      .map(
        (libro) => `
          <li>${libro.titulo} - ${libro.autor} - ${libro.agno} - ${libro.genero}</li>
        `
      )
      .join("");
    mensajeNoResultados.style.display = "none";
  } else {
    mensajeNoResultados.style.display = "block";
  }
};

const buscarLibros = () => {
  const buscar = document.getElementById("buscar").value.toUpperCase();
  const filtro = libros.filter((libro) => {
    const agnoComoTexto = libro.agno.toString();
    return (
      libro.titulo.toUpperCase().includes(buscar) ||
      libro.genero.toUpperCase().includes(buscar) ||
      libro.autor.toUpperCase().includes(buscar) ||
      agnoComoTexto.includes(buscar)
    );
  });
  mostrarLibros(filtro);
};

document.addEventListener("DOMContentLoaded", () => {
  mostrarLibros(libros);
  document.getElementById("buscar").addEventListener("input", buscarLibros);
});
