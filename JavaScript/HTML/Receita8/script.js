let cervejas = [];

//cs é um array de cervejas

const carregarDiv = (tamnh, id = "cervejasDiv", headers = [], properties = []) => {
    const div = document.getElementById(id);

    if (!tamnh || tamnh.length === 0 || headers.length !== properties.length) {
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
                ${tamnh.map(item => `
                    <tr>
                        ${properties.map(prop => `<td>${item[prop]}</td>`).join('')}
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    div.innerHTML = tabelaHtml;
}

// async function carregarCervejas() {
//   try {
//     let res = await fetch("https://random-data-api.com/api/v2/beers?size=3");

//     cervejas = await res.json();

//     carregarDiv(cervejas);
//   } catch (err) {
//     document.getElementById("cervejasDiv").innerHTML = "Fudeu...";
//   }
// }

function carregarCervejas2() {
    const headers = ["Nome", "Álcool", "Blg", "Hop", "Ibu", "Style", "Malts"];
    const properties = ["name", "alcohol", "blg", "hop", "ibu", "style", "malts"];

    fetch("https://random-data-api.com/api/v2/beers?size=3")
        .then((res) => res.json())
        .then((json) => {
            cervejas = json; // Aqui, você preenche o array cervejas com os dados da API
            carregarDiv(cervejas, "cervejasDiv", headers, properties); // Passa os dados para carregarDiv
        })
        .catch(
        (err) =>
            (document.getElementById("cervejasDiv").innerHTML = `Fudeu... ${err}`)
        );

    document.getElementById("cervejasDiv").innerHTML = `Fazendo requisição`;
}


let botao = document.getElementById("botaoCarregar");

botao.addEventListener("click", () => carregarCervejas2());
