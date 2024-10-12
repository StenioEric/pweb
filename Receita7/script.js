let cervejas = []

//cs é um array de cervejas
const carregarDiv = (data, id = "cervejasDiv", headers = [], properties = []) => {
    const div = document.getElementById(id);

    if (!data || data.length === 0 || headers.length !== properties.length) {
        div.innerHTML = "Nenhum dado disponível ou parâmetros incorretos";
        return;
    }

    let tabelaHtml = `
        <table border="1">
            <thead>
                <tr>
                    ${headers.map(header => `<th>${header}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${data.map(item => `
                    <tr>
                        ${properties.map(prop => `<td>${item[prop]}</td>`).join('')}
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    div.innerHTML = tabelaHtml;
}

async function carregarCervejas() {

    try {
        let res = await fetch("https://random-data-api.com/api/v2/beers?size=3");

        cervejas = await res.json();

        const headers = ["Nome", "Álcool", "Blg", "Hop", "Ibu", "Style", "Malts"];
        const properties = ["name", "alcohol", "blg", "hop", "ibu", "style", "malts"];

        carregarDiv(cervejas, "cervejasDiv", headers, properties);

    } catch (error) {
        document.getElementById("cervejasDiv").innerHTML = "Erro ao carregar dados.";
        console.error("Erro ao carregar dados da API:", error);
    }
}


let botao = document.getElementById("botaoCarregar")

botao.addEventListener("click", () => carregarCervejas())