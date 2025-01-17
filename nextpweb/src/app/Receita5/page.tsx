"use client"; // Importante para habilitar o uso de estado no lado do cliente

import { useState } from "react";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export default function MovieForm() {
  const [searchParams, setSearchParams] = useState({ title: "bagdad", type: "" });
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o recarregamento completo da página

    const formData = new FormData(event.currentTarget);
    const title = formData.get("titleSearchKey")?.toString() || "";
    const type = formData.get("typeSearchKey")?.toString() || "";

    setSearchParams({ title, type });
    setLoading(true);

    const query = new URLSearchParams({
      apikey: "f1cbc41e",
      s: title,
      ...(type && { type }),
    });

    const res = await fetch(`http://www.omdbapi.com/?${query}`);
    const data = await res.json();

    setMovies(data.Search || []);
    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Pesquisar Filmes</h1>
      <form
        onSubmit={handleSearch}
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div>
          <label htmlFor="idTitleSearchKey" style={{ marginRight: "5px" }}>
            Título:
          </label>
          <input
            id="idTitleSearchKey"
            name="titleSearchKey"
            type="text"
            defaultValue={searchParams.title}
            style={{ padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label htmlFor="idTypeSearchKey" style={{ marginRight: "5px" }}>
            Tipo:
          </label>
          <select
            id="idTypeSearchKey"
            name="typeSearchKey"
            style={{ padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
          >
            <option value="">Todos</option>
            <option value="movie">Filme</option>
            <option value="series">Série</option>
            <option value="episode">Episódio</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            padding: "5px 10px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Pesquisar
        </button>
      </form>
      {loading && <p>Carregando...</p>}
      {!loading && movies.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                width: "200px",
                textAlign: "center",
              }}
            >
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
                  alt={`${movie.Title} Poster`}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <h3 style={{ fontSize: "18px", margin: "10px 0" }}>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </div>
          ))}
        </div>
      )}
      {!loading && movies.length === 0 && <p>Nenhum resultado encontrado.</p>}
    </div>
  );
}
