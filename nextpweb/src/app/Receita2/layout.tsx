import { Header,CarrosInfo,Footer } from "../componentes/componentes"

export default function Receita2() {
  return (
      <div className="bg-gray-900 w-full h-screen text-white flex flex-col justify-center items-center gap-2">
          <h1>Receita 2</h1>

          <Header subtopico='Stênio Éric'/>
          <CarrosInfo />
          <Footer/>
      </div>
  );
} 

