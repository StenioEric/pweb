import Link from "next/link";

export default function Page() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Receitas Incríveis</h1>
      <p>Escolha uma receita para explorar:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {Array.from({ length: 12 }, (_, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            <Link
              href={`./Receita${index + 1}/layout.tsx`}
              style={{
                textDecoration: "none",
                color: "#0070f3",
                fontSize: "18px",
              }}
            >
              Receita{index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
