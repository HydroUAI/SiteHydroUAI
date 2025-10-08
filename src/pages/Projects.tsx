import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const gustavoProjects = [
    {
      title: "Recuperação de Energia em Sistemas de Drenagem Urbana",
      period: "2025-Atual",
      funding: "CNPq",
      role: "Coordenador",
      status: "Em andamento"
    },
    {
      title: "Detecção de vazamentos através da análise de transientes hidráulicos decorrentes de manobras controladas",
      period: "2023-2025",
      funding: "Fapemig",
      role: "Coordenador",
      status: "Em andamento"
    },
    {
      title: "Gestão, Operação e Manutenção Otimizada de Redes de Distribuição de Água",
      period: "2022-2025",
      funding: "CNPq",
      role: "Coordenador",
      status: "Em andamento"
    },
    {
      title: "Avaliação de potencial de recuperação de energia em sistemas de condutos forçados",
      period: "2022-2022",
      funding: "Aquapower",
      role: "Coordenador",
      status: "Concluído"
    },
    {
      title: "O conceito de Internet das Coisas aplicado na Supervisão e Controle de Sistemas de Abastecimento de Água - IoT.H2O",
      period: "2019-2023",
      funding: "Fapemig",
      role: "Colaborador",
      status: "Concluído"
    },
    {
      title: "Operação otimizada de sistemas de bombeamento em paralelo com múltiplos reservatórios",
      period: "2019-2023",
      funding: "Copasa",
      role: "Coordenador",
      status: "Concluído"
    }
  ];

  const brunoProjects = [
    {
      title: "Escola de Inverno/Verão em Inteligência Artificial aplicada aos Recursos Hídricos",
      period: "2025-Atual",
      funding: "UFMG",
      role: "Coordenador",
      status: "Em andamento"
    },
    {
      title: "Do aprendizado de máquinas aos modelos explicáveis: avaliação do impacto de eventos extremos em sistemas de recursos hídricos via inteligência artificial",
      period: "2025-Atual",
      funding: "CNPq",
      role: "Coordenador",
      status: "Em andamento"
    },
    {
      title: "Investigation of the Formation and Development of Biofilm Communities in Drinking Water Pipe Systems via Complex Network Theory",
      period: "2024-Atual",
      funding: "Internacional",
      role: "Coordenador",
      status: "Em andamento"
    },
    {
      title: "Sistema Inteligente para Operação de sistemas de Distribuição de Água",
      period: "2022-2025",
      funding: "CNPq",
      role: "Coordenador",
      status: "Em andamento"
    },
    {
      title: "Desenvolvimento de plataforma online para análise e monitoramento de sistemas de abastecimento de água",
      period: "2023-2025",
      funding: "Parceria",
      role: "Coordenador",
      status: "Em andamento"
    },
    {
      title: "Análise de sinais de emissão acústica para detecção e caracterização de vazamentos em sistemas de abastecimento de água",
      period: "2022-2024",
      funding: "Fapemig",
      role: "Coordenador",
      status: "Concluído"
    },
    {
      title: "Smarter Water Distribution Systems",
      period: "2021-2024",
      funding: "Internacional",
      role: "Coordenador",
      status: "Concluído"
    },
    {
      title: "Programming the EPANET Toolkit in C & visualizing results in the user interface of WATERing",
      period: "2021-2021",
      funding: "Parceria",
      role: "Coordenador",
      status: "Concluído"
    },
    {
      title: "Detecção de eventos anômalos em sistemas de abastecimento de água: uma abordagem a partir da teoria de grafos",
      period: "2021-2021",
      funding: "UFMG",
      role: "Coordenador",
      status: "Concluído"
    }
  ];

  const andreProjects = [
    {
      title: "Serviços ecossistêmicos no ambiente Mata Atlântica-Oxisol: modelagem do balanço hídrico como ferramenta para gestão ambiental sustentável",
      period: "2024-Atual",
      funding: "CNPq",
      role: "Colaborador",
      status: "Em andamento"
    },
    {
      title: "PD ANP/PETROB- AQUASMART - Estratégias Inovadoras para Manejo e Recuperação de Ecossistemas Aquáticos para Abastecimento da Indústria de Óleo e Gás",
      period: "2024-Atual",
      funding: "Petrobrás",
      role: "Colaborador",
      status: "Em andamento"
    },
    {
      title: "Urbanização e mudanças climáticas: avaliação de impactos e estratégias de adaptação para bacias e reservatórios urbanos",
      period: "2022-Atual",
      funding: "CNPq",
      role: "Colaborador",
      status: "Em andamento"
    },
    {
      title: "Apoio na Execução de projeto de pesquisa, capacitação, ciência de dados e inovação para a implementação de novas tecnologias voltadas para geologia e recursos minerais, gestão territorial, hidrologia e hidrogeologia",
      period: "2022-2024",
      funding: "CPRM",
      role: "Colaborador",
      status: "Concluído"
    },
    {
      title: "Hidrologia de um remanescente da Mata Atlântica brasileira: avanços no entendimento da interceptação da precipitação pelo dossel e no armazenamento de água e de carbono no solo",
      period: "2021-2022",
      funding: "CNPq",
      role: "Colaborador",
      status: "Concluído"
    },
    {
      title: "Balanço hídrico e umidade do solo em um remanescente típico da Mata Atlântica brasileira: observação, modelagem e impactos de mudanças climáticas",
      period: "2017-2021",
      funding: "CNPq",
      role: "Colaborador",
      status: "Concluído"
    }
  ];

  const rodrigoProjects = [
    {
      title: "PD ANP/PETROB- AQUASMART - Estratégias Inovadoras para Manejo e Recuperação de Ecossistemas Aquáticos para Abastecimento da Indústria de Óleo e Gás",
      period: "2024-Atual",
      funding: "Petrobrás",
      role: "Colaborador",
      status: "Em andamento"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em andamento":
        return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800";
      case "Concluído":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700";
    }
  };

  const renderProjectsList = (projects: typeof gustavoProjects) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Card key={index} className="shadow-elegant hover:shadow-lg transition-smooth">
          <CardHeader>
            <div className="flex justify-between items-start mb-3 gap-2">
              <Badge className={getStatusColor(project.status)}>
                {project.status}
              </Badge>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs text-muted-foreground font-medium">
                  {project.funding}
                </span>
                <span className="text-xs text-muted-foreground">
                  {project.role}
                </span>
              </div>
            </div>
            <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              {project.period}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Projetos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os projetos de pesquisa em desenvolvimento e concluídos pelo nosso grupo, 
            suas aplicações e impacto na comunidade científica.
          </p>
        </div>

        {/* All Projects */}
        <div className="mb-12">
          {renderProjectsList([...gustavoProjects, ...brunoProjects, ...andreProjects, ...rodrigoProjects])}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Interessado em Colaborar?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estamos sempre abertos a parcerias e colaborações em pesquisa. 
              Entre em contato para discutir oportunidades de trabalho conjunto.
            </p>
            <Link to="/contact"><Button className="bg-primary hover:bg-primary-dark">Fale Conosco</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
