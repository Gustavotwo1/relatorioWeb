function enviarRelato(){
    const name = document.getElementById('nome').value.trim();
    const text = document.getElementById('Relato').value.trim();
    const carta = document.getElementById('cartaFinal');

    if (!name||!text){
        alert("Por favor, coloque seu nome e o relatorio");
        return;

    }

    const data = new Date().toLocaleDateString("Pt-br", {
        day: "2-digit",
        month: "long",
        year: "numeric"

    });
    
    const conteudo = `${text}\n\n Com carinho, \n${name}`;
    localStorage.setItem("relatorioFerias", conteudo);
    localStorage.setItem("dataRelatorio", data);
    localStorage.setItem("nomePessoa", nome);

    carta.innerText = conteudo + ``

}
