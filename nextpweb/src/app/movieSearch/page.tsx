"use client";

import { useState, FormEvent } from "react";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster:string;
}

export default function MovieForm() {
  const [results, setResults] = useState<Movie[]>([]); // Estado para armazenar os resultados da pesquisa

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Impede o recarregamento da página

    const formData = new FormData(event.currentTarget);
    const titleSearchKey = formData.get("titleSearchKey") as string;
    const yearSearchKey = formData.get("idYearSearchKey") as string;

    const res = await fetch(
      `http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}&y=${yearSearchKey}`
    );
    const data = await res.json();

    setResults(data.Search || []); // Atualiza os resultados no estado
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", justifyContent: "center", gap: "10px", fontSize: "20px" }}
      >
        <label htmlFor="idTitleSearchKey">Título</label>
        <input id="idTitleSearchKey" name="titleSearchKey" />

        <label htmlFor="idYearSearchKey">Ano</label>
        <input id="idYearSearchKey" name="idYearSearchKey" />

        <button type="submit" style={{ padding: "10px 20px", fontSize: "16px" }}>
          Pesquisar
        </button>
      </form>

      {/* Exibição dos Resultados */}
      <div style={{ marginTop: "20px" }}>
        {results.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {results.map((movie) => (
              <li key={movie.imdbID} style={{ margin: "10px 0" }}>
                <strong>{movie.Title}</strong> ({movie.Year})
                <div>
                  <img src={movie.Poster} alt="" />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum resultado encontrado</p>
        )}
      </div>
    </div>
  );
}
