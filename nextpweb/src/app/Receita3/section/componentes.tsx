export function CarrosInfo() {
  const carros = [
    { modelo: "Civic", marca: "Honda", ano: 2022 },
    { modelo: "Corolla", marca: "Toyota", ano: 2023 },
    { modelo: "Model 3", marca: "Tesla", ano: 2021 },
  ];

  return (
    <div style={{padding: "20px", fontFamily: "Arial, sans-serif", marginTop:"190px" }}>
      <h2 style={{display:"flex", justifyContent:"center", fontSize:"30px"}}>Informações de Carros</h2>
      <table
        style={{
          width: "100%",
          margin: "0 auto",
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
