"use client";

import { useState } from "react";

export default function Home() {
  const [resultMovies, setResultMovies] = useState([]);
  const [titleSearchKey, setTitleSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleAction(formData: FormData) {
    const title = formData.get("titleSearchKey") as string;

    setIsLoading(true);
    const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${title}`);
    const jsonRes = await httpRes.json();

    setResultMovies(jsonRes.Search || []);
    setTitleSearchKey(title);
    setIsLoading(false);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    handleAction(formData);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Busca de Filmes</h1>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4 mb-6"
      >
        <input
          name="titleSearchKey"
          defaultValue={titleSearchKey}
          placeholder="Digite o título do filme"
          className="border rounded p-2 flex-1"
          required
        />
        <button
          type="submit"
          className={`px-4 py-2 rounded text-white ${
            isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Pesquisando..." : "Pesquisar"}
        </button>
      </form>

      {/* Resultados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resultMovies.map((movie: any) => (
          <div
            key={movie.imdbID}
            className="border rounded-lg overflow-hidden shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
              alt={`${movie.Title} Poster`}
              className="w-full h-64 object-cover mb-4"
            />
            <h2 className="text-lg font-bold mb-2 text-center">{movie.Title}</h2>
            <p className="text-gray-600">{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
