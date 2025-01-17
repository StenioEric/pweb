import { Header, CarrosInfo, Footer } from "../componentes/componentes";

export const metadata = {
  title: "Página Web Modular",
  description: "Exemplo de layout importando componentes.",
};

export default function Layout() {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header subtopico="Bem-vindo ao nosso site de carros incríveis!" />
          <main style={{ flex: 1 }}>
            <CarrosInfo />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
