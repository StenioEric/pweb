import React from "react";

export function Header({ subtopico }: { subtopico: string }) {
  return (
    <header
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>Carros Incríveis</h1>
      <p>Encontre informações sobre os melhores carros!</p>
      <p>{subtopico}</p>
    </header>
  );
}

export function CarrosInfo() {
  const carros = [
    { modelo: "Civic", marca: "Honda", ano: 2022 },
    { modelo: "Corolla", marca: "Toyota", ano: 2023 },
    { modelo: "Model 3", marca: "Tesla", ano: 2021 },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>Informações de Carros</h2>
      <table
        style={{
          width: "100%",
          margin: "20px auto",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
        // border="1"
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Ano</th>
          </tr>
        </thead>
        <tbody>
          {carros.map((carro, index) => (
            <tr key={index}>
              <td>{carro.modelo}</td>
              <td>{carro.marca}</td>
              <td>{carro.ano}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <p>&copy; {new Date().getFullYear()} Carros Incríveis. Todos os direitos reservados.</p>
    </footer>
  );
}
