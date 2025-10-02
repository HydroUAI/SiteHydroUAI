import { Card, CardContent } from "@/components/ui/card"

const coordenacao = [
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
]

const hidrologia = [
  {
    name: "Anna Flávia Almeida Perini",
    photo: "AnnaPerini.jpg",
    description:
      "Doutoranda em Recursos Hídricos, com atuação em hidrologia, desenvolvendo pesquisas relacionadas aos impactos e à dinâmica dos eventos de seca",
    initials: "AP",
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
    initials: "DO",
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
]

export default function About() {
  const renderMember = (member: any) => (
    <Card
      key={member.name}
      className="w-56 h-72 flex flex-col items-center justify-center m-4 shadow-lg"
    >
      <CardContent className="flex flex-col items-center justify-center p-2">
        {member.photo ? (
          <img
            src={`/team/${member.photo}`}
            alt={member.name}
            className="w-40 h-40 rounded-full object-cover mb-2"
          />
        ) : (
          <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-white mb-2">
            {member.initials}
          </div>
        )}
        <h3 className="text-center font-semibold">{member.name}</h3>
        <p className="text-center text-sm text-gray-600">{member.description}</p>
      </CardContent>
    </Card>
  )

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Nossa Equipe</h1>

      <h2 className="text-2xl font-semibold mb-4">Coordenação</h2>
      <div className="flex flex-wrap justify-center">
        {coordenacao.map(renderMember)}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Hidrologia</h2>
      <div className="flex flex-wrap justify-center">
        {hidrologia.map(renderMember)}
      </div>
    </div>
  )
}
