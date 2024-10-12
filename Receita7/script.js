let cervejas = []

//cs é um array de cervejas

const carregarDiv = (cs, id = "cervejasDiv", headers = ["Nome", "Álcool", "Blg", "Hop", "Ibu", "Style", "Malts",], properties = ["name", "alcohol", "blg", "hop", "ibu", "style", "malts"]) => {
    const div = document.getElementById(id);
    
    // Cria o cabeçalho da tabela
    let tabelaHtml = `
        <table border="1">
            <thead>
                <tr>
                    ${headers.map(header => `
                        <th>${header}</th> <!-- Cabeçalhos -->
                    `).join('')}
                </tr>
            </thead>
            <tbody>
                ${cs.map(item => `
                    <tr>
                        ${properties.map(prop => `
                            <td>${item[prop]}</td> <!-- Acesso dinâmico aos dados -->
                        `).join('')}
                    </tr>
                `).join('')}
            </tbody>
        </table>
        `;

    div.innerHTML = tabelaHtml; // Insere a tabela no div
}

async function carregarCervejas() {

    try {

        let res = await fetch("https://random-data-api.com/api/v2/beers?size=3")

        cervejas = await res.json()

        carregarDiv(cervejas)

    } catch (err) {

        document.getElementById("cervejasDiv").innerHTML = "Fudeu..."

    }
}


let botao = document.getElementById("botaoCarregar")

botao.addEventListener("click", () => carregarCervejas())