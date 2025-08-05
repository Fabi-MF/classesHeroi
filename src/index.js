
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "SHURIKEN";
    }

    return `O ${this.tipo} atacou usando ${ataque}!`;
  }
}

document.getElementById("formHeroi").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const tipo = document.getElementById("tipo").value;

  const heroi = new Heroi(nome, idade, tipo);
  document.getElementById("resultado").innerText = heroi.atacar();
});

