import React from "react";

type Member = {
  name: string;
  description: string;
  initials: string;
  photo?: string; // nome do arquivo dentro de /public/team
};

/**
 * PersonCard unificado
 * - Mantém o mesmo tamanho (com e sem foto)
 * - Constrói o caminho da imagem usando BASE_URL do Vite (necessário no GitHub Pages)
 * - Faz encodeURI para nomes com espaços/acentos
 * - Fallback automático para iniciais quando a imagem falhar
 */
function buildImageSrc(photo?: string): string | undefined {
  if (!photo) return undefined;
  if (photo.startsWith("http") || photo.startsWith("data:")) return photo;

  // BASE_URL é crítico quando o site está em /<org>/<repo>/ (GitHub Pages de projeto)
  const base = (import.meta as any).env?.BASE_URL || "/";

  // remove barras iniciais para evitar // e normaliza para 'team/...'
  const clean = photo.replace(/^\/+/, "");
  const rel = clean.startsWith("team/") ? clean : `team/${clean}`;

  // junta com BASE_URL garantindo que tenha exatamente uma barra
  const joined = (base.endsWith("/") ? base : base + "/") + rel;

  return encodeURI(joined);
}

function PersonCard({ m }: { m: Member }) {
  const [broken, setBroken] = React.useState(false);

  const photoSrc = buildImageSrc(m.photo);
  const showAvatar = Boolean(photoSrc && !broken);

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition flex flex-col items-center justify-start min-h-[300px]">
      {showAvatar ? (
        <img
          src={photoSrc}
          alt={m.name}
          className="h-24 w-24 rounded-full object-cover mb-4"
          loading="lazy"
          onError={() => setBroken(true)}
        />
      ) : (
        <div className="h-24 w-24 mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-semibold">
          {m.initials}
        </div>
      )}

      <h3 className="text-center font-semibold leading-tight">{m.name}</h3>
      <p className="mt-2 text-center text-sm text-muted-foreground leading-snug">
        {m.description}
      </p>
    </div>
  );
}

/* ===================== LISTAS (verifique nomes exatamente como nos arquivos) ===================== */
/* Coordenação */
const coordenacao: Member[] = [
  {
    name: "Bruno Melo Brentan",
    description:
      "Especialista em Hidroinformática, com experiência em análise de sistemas de abastecimento de água. Aplica IA e otimização em diversos sistemas de recursos hídricos",
    initials: "BB",
    photo: "Bruno Brentan.jpg",
  },
  {
    name: "Gustavo Meirelles Lima",
    description:
      "Otimização e modelagem hidráulica em sistemas de abastecimento de água e usinas hidrelétricas",
    initials: "GL",
    photo: "Gustavo.jpg",
  },
  {
    name: "André Ferreira Rodrigues",
    description:
      "Doutor em Recursos Hídricos com atuação em hidrologia, modelagem de eventos extremos e aplicação de IA em hidrologia",
    initials: "AR",
    photo: "Andre.jpg",
  },
  {
    name: "Rodrigo Perdigão Gomes Bezerra",
    description:
      "Sistemas de previsão de inundação com utilização de redes neurais e modelagem hidrodinâmica de rápido processamento",
    initials: "RB",
    photo: "Rodrigo.jpg",
  },
];

/* Hidrologia */
const hidrologia: Member[] = [
  {
    name: "Anna Flávia Almeida Perini",
    description:
      "Doutoranda em Recursos Hídricos, com atuação em hidrologia, desenvolvendo pesquisas relacionadas aos impactos e à dinâmica dos eventos de seca",
    initials: "AP",
    photo: "AnnaPerini.jpg",
  },
  {
    name: "Bibiana Niederauer Soares",
    description:
      "Engenheira civil com ampla experiência em projetos de recursos hídricos, como drenagem superficial, reservatórios e modelagem hidráulica",
    initials: "BS",
    photo: "Bibiana.jpg",
  },
  {
    name: "David Jimenez Osorio",
    description:
      "Especialista em modelagem hidrológica em contextos de mudanças climáticas e modelagem hidrodinâmica",
    initials: "DJ",
    photo: "David.jpg",
  },
  {
    name: "Ernesto José Garcia Canellas",
    description:
      "Graduando em Engenharia Ambiental com iniciação científica em modelagem hidrológica aplicada no Rio Grande do Sul",
    initials: "EC",
    photo: "Ernesto.jpg",
  },
  {
    name: "Rafael Barreto",
    description:
      "Pesquisador na área de hidrologia e hidráulica, com foco em modelagem matemática de escoamento e previsão de cheias",
    initials: "RB",
    photo: "Rafael Barreto.jpg",
  },
  {
    name: "Marina Vilaça Mendonça",
    description:
      "Doutoranda em Engenharia de Recursos Hídricos, com foco em hidrologia estatística e séries temporais",
    initials: "MV",
    photo: "Marina.jpg",
  },
];

/* Hidráulica */
const hidraulica: Member[] = [
  {
    name: "Carlos Eduardo Abranches Pacheco",
    description:
      "Aluno de graduação de engenharia civil com iniciação científica em modelagem com uso de IA para sistemas e redes hidráulicas",
    initials: "CP",
  },
  {
    name: "Daniel Bezerra Barros",
    description:
      "Modelagem computacional de redes de distribuição de água, detecção e localização de anomalias e vazamentos",
    initials: "DB",
  },
  {
    name: "Débora Salomé Móller",
    description:
      "Modelagem hidráulica de redes e adutoras de água, otimização no dimensionamento de sistemas de abastecimento",
    initials: "DM",
  },
  {
    name: "Jordana Madeira Alaggio Ribeiro",
    description:
      "Pesquisa em modelagem hidráulica com ênfase em métodos computacionais e técnicas de IA",
    initials: "JR",
    photo: "Jordana Madeira.jpg",
  },
  {
    name: "Pedro Vasconcellos Diaz",
    description:
      "Graduando em Engenharia Civil, iniciação científica em monitoramento de redes de distribuição com IA",
    initials: "PD",
    photo: "Pedro Dias.jpg",
  },
  {
    name: "Talles Luca Silva Matos",
    description:
      "Pesquisador em Engenharia Civil, iniciação científica aplicando IA e técnicas de otimização em redes de água",
    initials: "TL",
    photo: "Talles.jpg",
  },
];

/* Professores Parceiros (SEM FOTO; ordem alfabética) */
const professoresParceiros: Member[] = [
  { name: "Andrea Menapace", description: "Especialista em hidroinformática", initials: "AM" },
  { name: "Carlos Rogério", description: "Ampla atuação na área de hidrologia, hidrologia florestal e solos", initials: "CR" },
  { name: "Edevar Luvizotto", description: "Especialista em hidráulica de condutos forçados", initials: "EL" },
  { name: "Hugo Fagundes", description: "Atuação em modelagem hidrológica e transporte de sedimentos", initials: "HF" },
  { name: "Iran Lima", description: "Atuação em qualidade de água e drenagem", initials: "IL" },
  { name: "Julian Eleutério", description: "Atuação em modelagem de inundações e rompimentos de barragens", initials: "JE" },
  { name: "Manuel Herrera", description: "Especialista em hidroinformática", initials: "MH" },
  { name: "Samuel Beskow", description: "Atuação em modelagem de inundações", initials: "SB" },
];

/* ============================ PÁGINA ============================ */
export default function About() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Nossa Equipe</h1>

      {/* Coordenação */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Coordenação</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coordenacao.map((m) => (
            <PersonCard key={m.name} m={m} />
          ))}
        </div>
      </section>

      {/* Hidrologia */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Hidrologia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {hidrologia.map((m) => (
            <PersonCard key={m.name} m={m} />
          ))}
        </div>
      </section>

      {/* Hidráulica */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Hidráulica</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {hidraulica.map((m) => (
            <PersonCard key={m.name} m={m} />
          ))}
        </div>
      </section>

      {/* Professores Parceiros */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Professores Parceiros</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {professoresParceiros
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((m) => (
              <PersonCard key={m.name} m={m} />
            ))}
        </div>
      </section>
    </div>
  );
}
