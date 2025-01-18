"use client";

import { useState, FormEvent } from "react";

interface Movie {
  id: string;
  title: string;
  year: string;
  poster: string;
}

export default function MovieSearch() {
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const titleSearchKey = formData.get("titleSearchKey") as string;

    const res = await fetch(`/api/movies?titleSearchKey=${titleSearchKey}`);
    const data = await res.json();

    setResults(data || []);
    setLoading(false);
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", justifyContent: "center", gap: "10px", fontSize: "20px" }}
      >
        <label htmlFor="idTitleSearchKey">Título</label>
        <input id="idTitleSearchKey" name="titleSearchKey" />

        <button
          type="submit"
          style={{ padding: "10px 20px", fontSize: "16px" }}
          disabled={loading}
        >
          {loading ? "Carregando..." : "Pesquisar"}
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {results.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {results.map((movie) => (
              <li key={movie.id} style={{ margin: "10px 0" }}>
                <strong>{movie.title}</strong> ({movie.year})
                <div>
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    style={{ width: "150px", borderRadius: "8px" }}
                  />
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
