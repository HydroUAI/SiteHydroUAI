import React from "react";

// Ajuste o caminho se você usa i18n (ex.: import { useTranslation } from "react-i18next")
// e aplique t('...') nos textos necessários, se quiser.
// Aqui deixei textos estáticos para evitar dependências.

type Member = {
  name: string;
  description: string;
  initials: string;
  photo?: string; // caminho relativo em /public/team
};

/**
 * PersonCard
 * - Mantém exatamente o MESMO tamanho visual para cartões com e sem foto.
 * - Para quem NÃO tem foto, exibe as iniciais dentro de um avatar do MESMO tamanho (h-24 w-24).
 * - Use este card em TODAS as seções para padronizar.
 */
function PersonCard({ m }: { m: Member }) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition flex flex-col items-center justify-start min-h-[300px]">
      {m.photo ? (
        <img
          src={m.photo.startsWith("/") ? m.photo : `/team/${m.photo}`}
          alt={m.name}
          className="h-24 w-24 rounded-full object-cover mb-4"
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

/* ================ Exemplo de listas (ajuste para as suas atuais) ================ */
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
    photo: "UNB.jpg", // ajuste se você tiver a foto do Rodrigo
  },
];

/* Hidrologia (exemplo reduzido; mantenha os seus itens atuais se já tem) */
const hidrologia: Member[] = [
  {
    name: "Anna Flávia Almeida Perini",
    description:
      "Doutoranda em Recursos Hídricos, com atuação em hidrologia, desenvolvendo pesquisas relacionadas aos impactos e à dinâmica dos eventos de seca",
    initials: "AP",
    photo: "AnnaPerini.jpg",
  },
  {
    name: "David Jimenez Osorio",
    description:
      "Especialista em modelagem hidrológica em contextos de mudanças climáticas e modelagem hidrodinâmica",
    initials: "DJ",
    // sem foto -> iniciais
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
    initials: "MM",
    photo: "Marina.jpg",
  },
];

/* Hidráulica (exemplo reduzido; ajuste conforme suas listas) */
const hidraulica: Member[] = [
  {
    name: "Gabriel Rodrigues Pereira",
    description:
      "Atuação em hidráulica computacional aplicada a simulação de escoamentos",
    initials: "GP",
    // sem foto
  },
  {
    name: "Isabela Zini de Oliveira",
    description:
      "Atuação em hidráulica e hidrodinâmica de canais e redes",
    initials: "IO",
    // sem foto
  },
];

/* ================ NOVA SEÇÃO: Professores Parceiros (SEM FOTO) ================ */
const professoresParceiros: Member[] = [
  {
    name: "Andrea Menapace",
    description: "Especialista em hidroinformática",
    initials: "AM",
  },
  {
    name: "Carlos Rogério",
    description:
      "Ampla atuação na área de hidrologia, hidrologia florestal e solos",
    initials: "CR",
  },
  {
    name: "Edevar Luvizotto",
    description: "Especialista em hidráulica de condutos forçados",
    initials: "EL",
  },
  {
    name: "Hugo Fagundes",
    description:
      "Atuação em modelagem hidrológica e transporte de sedimentos",
    initials: "HF",
  },
  {
    name: "Iran Lima",
    description: "Atuação em qualidade de água e drenagem",
    initials: "IL",
  },
  {
    name: "Julian Eleutério",
    description:
      "Atuação em modelagem de inundações e rompimentos de barragens",
    initials: "JE",
  },
  {
    name: "Manuel Herrera",
    description: "Especialista em hidroinformática",
    initials: "MH",
  },
  {
    name: "Samuel Belskow",
    description: "Atuação em modelagem de inundações",
    initials: "SB",
  },
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

      {/* Professores Parceiros (sem foto) — mesmo tamanho dos outros cartões */}
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
