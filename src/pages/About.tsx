import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";

// constrói URL correta considerando base do GitHub Pages
const teamSrc = (file?: string) =>
  file ? `${import.meta.env.BASE_URL}team/${file}` : undefined;

type Member = {
  name: string;
  description: string;
  initials: string;
  photo?: string;
};

const About = () => {
  const { t } = useLanguage?.() ?? { t: (s: string) => s };

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
      initials: "GM",
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
    },
    {
      name: "David Jimenez Osorio",
      description:
        "Especialista em modelagem hidrológica em contextos de mudanças climáticas e modelagem hidrodinâmica",
      initials: "DJ",
    },
    {
      name: "Ernesto José Garcia Canellas",
      description:
        "Graduando em Engenharia Ambiental com iniciação científica em modelagem hidrológica aplicada no Rio Grande do Sul",
      initials: "EC",
      photo: "Ernesto.jpg",
    },
    {
      name: "Gabriel Rodrigues Pereira",
      description:
        "Modelagem hidrológica de eventos extremos, previsão de vazões e estudo de Soluções Baseadas na Natureza (SBNs)",
      initials: "GP",
    },
    {
      name: "Gabriela Modesto Azevedo",
      description:
        "Modelagem hidrológica com uso de redes neurais aplicada à bacia do Rio Negro, na Amazônia",
      initials: "GA",
      photo: "Gabriela.jpg",
    },
    {
      name: "Isabela Zini de Oliveira",
      description:
        "Pesquisa científica focada em sistemas de previsão de inundação com utilização de redes neurais",
      initials: "IO",
    },
    {
      name: "Júlia Camarano Lüdtke",
      description:
        "Estudos de extremos hidrológicos na bacia do Rio Madeira, com ênfase na ocorrência de secas",
      initials: "JL",
    },
    {
      name: "Lorena Grochowski Sabino dos Santos",
      description: "Iniciação científica na área de hidrogeologia",
      initials: "LS",
      photo: "Lorena.jpg",
    },
    {
      name: "Marina Marcela de Paula Kolanski",
      description:
        "Engenheira ambiental, mestranda pelo programa SMARH da UFMG, com foco em eventos extremos e modelagem hidrológica",
      initials: "MK",
      photo: "Marina Kolanski.jpg",
    },
    {
      name: "Pedro Henrique Bernardes Solha",
      description:
        "Modelagem hidrológica com redes neurais artificiais, previsão de inundações, inteligência artificial explicável",
      initials: "PS",
      photo: "Pedro Solha.jpg",
    },
    {
      name: "Taís Fonte Boa de Campos Maia",
      description:
        "Engenheira ambiental, mestranda em hidrologia com ênfase em IA e aprendizado de máquina para modelagem hidrológica",
      initials: "TM",
      photo: "Taís Fonte Boa.jpg",
    },
  ];

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
      name: "Filipe Augusto Resende Mota",
      description: "Pesquisa em transitórios hidráulicos e detecção de vazamentos",
      initials: "FM",
    },
    {
      name: "Henrique Di Bernardo Dantas",
      description:
        "Graduando em Engenharia Civil, iniciação científica em hidráulica de sistemas de abastecimento de água",
      initials: "HD",
    },
    {
      name: "Jéssica Soares Pereira Gonçalves",
      description:
        "Graduanda em Engenharia Ambiental com iniciação científica em hidráulica de sistemas de abastecimento",
      initials: "JG",
    },
    {
      name: "Jordana Madeira Alaggio Ribeiro",
      description:
        "Pesquisa em modelagem hidráulica com ênfase em métodos computacionais e técnicas de IA",
      initials: "JR",
      photo: "Jordana Madeira.jpg",
    },
    {
      name: "Leandro Alves Evangelista",
      description:
        "Modelagem hidráulica e otimização de sistemas de abastecimento de água",
      initials: "LE",
    },
    {
      name: "Marina Vilaça Mendonça",
      description:
        "Graduanda em Engenharia Ambiental, iniciação científica em sistemas de abastecimento de água e hidráulica",
      initials: "MV",
      photo: "Marina.jpg",
    },
    {
      name: "Pedro Vasconcellos Diaz",
      description:
        "Graduando em Engenharia Civil, iniciação científica em monitoramento de redes de distribuição com IA",
      initials: "PD",
      photo: "Pedro Dias.jpg",
    },
    {
      name: "Rafael Barreto Ferreira",
      description:
        "Pesquisa no uso de machine learning para previsão de estado de funcionamento de redes de abastecimento",
      initials: "RF",
      photo: "Rafael Barreto.jpg",
    },
    {
      name: "Rui Gabriel Modesto de Souza",
      description:
        "Otimização e modelagem hidráulica em sistemas de abastecimento de água",
      initials: "RG",
    },
    {
      name: "Talles Luca Silva Matos",
      description:
        "Pesquisador em Engenharia Civil, iniciação científica aplicando IA e técnicas de otimização em redes de água",
      initials: "TL",
      photo: "Talles.jpg",
    },
    {
      name: "Thiago Henrique da Silva Lima",
      description:
        "Estudante de Engenharia Civil, pesquisa aplicação de IA e ML para previsão de inundações",
      initials: "TH",
    },
    {
      name: "Thomaz Felipe de Freitas Anchieta",
      description:
        "Otimização e modelagem matemático-computacional de redes de distribuição de água",
      initials: "TF",
    },
  ];

  // render genérico com Avatar; sem altura fixa para evitar clipping/corte
  const renderMember = (m: Member, avatarSize: "lg" | "md" = "md") => {
    const size = avatarSize === "lg" ? "w-24 h-24" : "w-20 h-20";
    return (
      <Card key={m.name} className="shadow-lg">
        <CardContent className="p-4 flex flex-col items-center text-center gap-3">
          <Avatar className={`${size}`}>
            <AvatarImage
              src={teamSrc(m.photo)}
              alt={m.name}
              onError={(e) => {
                // esconde imagem quebrada para mostrar fallback
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <AvatarFallback className="bg-primary text-primary-foreground text-lg">
              {m.initials}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="font-semibold leading-snug">{m.name}</h3>
            <p className="text-sm text-muted-foreground">{m.description}</p>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="py-10">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-10">Nossa Equipe</h1>

          <h2 className="text-2xl font-semibold mb-4">Coordenação</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {coordenacao.map((m) => renderMember(m, "lg"))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Hidrologia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {hidrologia.map((m) => renderMember(m, "md"))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Hidráulica</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hidraulica.map((m) => renderMember(m, "md"))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
