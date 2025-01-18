import Link from "next/link";

export default function Page() {
  return (
    <div
      style={{
        fontFamily: "Verdana, sans-serif",
        textAlign: "center",
        // backgroundColor: "#f4f4f4",
        padding: "40px 20px",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Receitas da disciplina de Programação Web
      </h1>
      <p
        style={{
          fontSize: "20px",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        Escolha uma receita para explorar:
      </p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {Array.from({ length: 12 }, (_, index) => (
          <li key={index}>
            <Link
              href={`/Receita${index + 1}`}
              style={{ textDecoration: "none", color: "#0070f3" }}
            >
              <button
                style={{
                  backgroundColor: "#0070f3",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "15px 20px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  width: "100%",
                }}
              >
                Receita {index + 1}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
