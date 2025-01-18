"use client";

import { useRouter } from "next/navigation";

export default function ReceitaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <html>
      <body>
        <div
          style={{
            fontFamily: "Verdana, sans-serif",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <button
            onClick={() => router.push("/")}
            style={{
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              marginBottom: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            Voltar
          </button>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
