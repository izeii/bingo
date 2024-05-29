function criartabela(nome){
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    //cabeçalho
    const tr_nome = document.createElement("tr");
    const td_nome = document.createElement("td");
    td_nome.innerHTML = nome;
    td_nome.colSpan = 5;

    const td_B = document.createElement("th");
    td_B.innerHTML = "B";
    const td_I = document.createElement("th");
    td_I.innerHTML = "I";
    const td_N = document.createElement("th");
    td_N.innerHTML = "N";
    const td_G = document.createElement("th");
    td_G.innerHTML = "G";
    const td_O = document.createElement("th");
    td_O.innerHTML = "O";

    thead.appendChild(tr_nome);
    
    thead.appendChild(td_B);
    thead.appendChild(td_I);
    thead.appendChild(td_N);
    thead.appendChild(td_G);
    thead.appendChild(td_O);

    tr_nome.appendChild(td_nome);

    
    for(let i = 0; i < 5; i++){
        const tr = document.createElement("tr");
        for(let j = 0; j < 5; j++){
            const td = document.createElement("td");
            td.innerHTML = "XX";
            tr.appendChild(td);
        }
        tbody.appendChild(tr)
    }

    //criando a tabela
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    const body = document.querySelector("body");
    body.appendChild(tabela);

}

function pedirnomeecriartabela(){
    const nome = prompt("Digite seu nome:");

    if(nome?.length < 5){
        alert("Digite um nome maior que 5 letras")
        return;
    } 
    criartabela(nome);
}