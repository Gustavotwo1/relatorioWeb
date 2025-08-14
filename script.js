function enviarRelato(){
    const name = document.getElementById('nome').value.trim();
    const text = document.getElementById('Relato').value.trim();
    const carta = document.getElementById('cartaFinal');

    if (!name||!text){
        alert("Por favor, coloque seu nome e o relatorio");
        return;

    }

    const data = new Date().toLocaleDateString("pt-br", {
        day: "2-digit",
        month: "long",
        year: "numeric"

    });
    
    const conteudo = `${text}\n\n Com carinho, \n${name}`;
    localStorage.setItem("relatorioFerias", conteudo);
    localStorage.setItem("dataRelatorio", data);
    localStorage.setItem("nomePessoa", name);

    carta.innerText = conteudo + `\n\n ${data}`;
    carta.style.display = "block";

    document.getElementById('nome').value = "";
    document.getElementById('Relato').value = "";

    alert("✅ Relato enviado com sucesso!");

}

function editarRelato() {
  const salvo = localStorage.getItem("relatorioFerias");
  const nome = localStorage.getItem("nomePessoa");

  if (!salvo || !nome) {
    alert("Não há relato salvo para editar.");
    return;
  }

  const textoSemAssinatura = salvo.split("\n\nCom carinho,")[0];
  document.getElementById("Relato").value = textoSemAssinatura;
  document.getElementById("nome").value = nome;
  document.getElementById("Relato").focus();
}

function excluirRelato() {
  if (confirm("Tem certeza que deseja apagar o relato?")) {
    localStorage.removeItem("relatorioFerias");
    localStorage.removeItem("dataRelato");
    localStorage.removeItem("nomePessoa");
    document.getElementById("Relato").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("cartaFinal").style.display = "none";
  }
}

function mudar_tema() {
  document.body.classList.toggle("dark");
  document.getElementById("cartaFinal").classList.toggle("dark");
}

window.onload = () => {
  const salvo = localStorage.getItem("relatorioFerias");
  const data = localStorage.getItem("dataRelato");
  const nome = localStorage.getItem("nomePessoa");

  if (salvo && data && nome) {
    const carta = document.getElementById("cartaFinal");
    carta.innerText = salvo + `\n\n📅 ${data}`;
    carta.style.display = "block";
    document.getElementById("nome").value = nome;
  }
}