"use client";

import { useState, FormEvent } from "react";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
}

export default function Home() {
  const [resultMovies, setResultMovies] = useState<Movie[]>([]); // Estado para armazenar os resultados da pesquisa

  async function handleAction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Impede o recarregamento da página

    const formData = new FormData(event.currentTarget);
    const titleSearchKey = formData.get("titleSearchKey") as string;

    const res = await fetch(`/api/movies?titleSearchKey=${titleSearchKey}`);
    const data = await res.json();

    setResultMovies(data || []); // Atualiza os resultados no estado
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <MovieForm actionHandler={handleAction} />
      <MovieTable movies={resultMovies} />
    </div>
  );
}

export function MovieForm({ actionHandler }: { actionHandler: (e: FormEvent<HTMLFormElement>) => void }) {
  return (
    <form
      onSubmit={actionHandler}
      style={{
        display: "grid",
        justifyContent: "center",
        gap: "10px",
        fontSize: "20px",
        marginBottom: "20px",
      }}
    >
      <label htmlFor="idTitleSearchKey">Título</label>
      <input id="idTitleSearchKey" name="titleSearchKey" />

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Pesquisar
      </button>
    </form>
  );
}

export function MovieTable({ movies }: { movies: Movie[] }) {
  return (
    <div>
      {movies.length > 0 ? (
        <div style={{ display: "grid", justifyContent: "center", gap: "10px" }}>
          {movies.map((m) => (
            <div
              key={m.imdbID}
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: "#f9f9f9",
                textAlign: "left",
                width: "300px",
                margin: "auto",
              }}
            >
              <strong>{m.Title}</strong> ({m.Year})
            </div>
          ))}
        </div>
      ) : (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>Nenhum resultado encontrado</p>
      )}
    </div>
  );
}
