function criartabela(){
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tobdy");
    //cabeçalho
    const tr_nome = document.createElement("tr");
    const td_nome = document.createElement("td");
    td_nome.innerHTML = "NOME";
    td_nome.colSpan = 5;

    const th_B = document.createElement("th");
    th_B.innerHTML = "B";
    const th_I = document.createElement("th");
    th_B.innerHTML = "I";
    const th_N = document.createElement("th");
    th_B.innerHTML = "N";
    const th_G = document.createElement("th");
    th_B.innerHTML = "G";
    const th_O = document.createElement("th");
    th_B.innerHTML = "O";

    tr_nome.appendChild(td_nome);
    thead.appendChild(tr_nome);
    thead.appendChild(th_B);
    thead.appendChild(th_I);
    thead.appendChild(th_N);
    thead.appendChild(th_G);
    thead.appendChild(th_O);

    for(let i = 0; i < 5; i++)[
        const tr = document.createElement("tr");
        for(let j = 0; j < 5; j++)[
            const td = document.createElement("td");
            td.innerHTML = "XX";
            tr.appendChild(td);
        ]
    ]

    //criando a tabela
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    const body = document.querySelector("body");
    body.appendChild(tabela);

}

function pedornomeecriartabela(){
    const nome = prompt("Digite seu nome:");

    if(nome)
}