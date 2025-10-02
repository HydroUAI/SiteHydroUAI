import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative bg-primary text-white min-h-[70vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-6">HYDRO-UAI</h1>
        <p className="text-xl font-medium mb-8">
          Integrando Hidráulica, Hidrologia e Inteligência Artificial para o Futuro da Gestão de Recursos Hídricos
        </p>
        <p className="mb-10 text-lg">
          Desenvolvemos soluções inovadoras através da integração de conhecimento em hidráulica,
          hidrologia e inteligência artificial para enfrentar os desafios contemporâneos da gestão de recursos hídricos.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 bg-white text-primary font-medium shadow hover:shadow-md"
          >
            Ver Projetos
          </Link>
          <Link
            to="/publications"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 bg-white text-primary font-medium shadow hover:shadow-md"
          >
            Publicações
          </Link>
        </div>
      </div>
    </section>
  );
}
