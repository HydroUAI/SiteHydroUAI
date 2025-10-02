import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, BookOpen, GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const teamSrc = (file?: string) => (file ? `/team/${file}` : undefined);
const About = () => {
  const { t } = useLanguage();
  
  const researchAreas = [
    t('about.research.hydraulics'),
    t('about.research.hydrology'),
    t('about.research.ai'),
    t('about.research.modeling'),
    t('about.research.optimization'),
    t('about.research.prediction'),
    t('about.research.management'),
    t('about.research.sustainability')
  ];

  const coordenacao = [
    {
      name: "Bruno Melo Brentan",
      description: "Especialista em Hidroinformática, com experiência em análise de sistemas de abastecimento de água. Aplica IA e otimização em diversos sistemas de recursos hídricos",
      initials: "BB",
      photo: "Bruno Brentan.jpg"},
    {
      name: "Gustavo Meirelles Lima", 
      description: "Otimização e modelagem hidráulica em sistemas de abastecimento de água e usinas hidrelétricas",
      initials: "GM" },
    {
      name: "André Ferreira Rodrigues",
      description: "Doutor em Recursos Hídricos com atuação em hidrologia, modelagem de eventos extremos e aplicação de IA em hidrologia",
      initials: "AR" },
    {
      name: "Rodrigo Perdigão Gomes Bezerra",
      description: "Sistemas de previsão de inundação com utilização de redes neurais e modelagem hidrodinâmica de rápido processamento",
      initials: "RP" }
  ];

  const hidrologia = [
    {
      name: "Anna Flávia Almeida Perini",
      description: "Doutoranda em Recursos Hídricos, com atuação em hidrologia, desenvolvendo pesquisas relacionadas aos impactos e à dinâmica dos eventos de seca",
      initials: "AP"
    },
    {
      name: "Bibiana Niederauer Soares",
      description: "Engenheira civil com ampla experiência em projetos de recursos hídricos, como drenagem superficial, reservatórios e modelagem hidráulica",
      initials: "BS"
    },
    {
      name: "David Jimenez Osorio",
      description: "Especialista em modelagem hidrológica em contextos de mudanças climáticas e modelagem hidrodinâmica",
      initials: "DJ"
    },
    {
      name: "Ernesto José Garcia Canellas",
      description: "Graduando em Engenharia Ambiental com iniciação científica em modelagem hidrológica aplicada no Rio Grande do Sul",
      initials: "EC"
    },
    {
      name: "Felipe Emanuel Domiciano Ribeiro",
      description: "Engenheiro e Desenvolvedor de software com foco na automatização de processos e computação de alto desempenho",
      initials: "FD"
    },
    {
      name: "Gabriel Rodrigues Pereira",
      description: "Modelagem hidrológica de eventos extremos, previsão de vazões e estudo de Soluções Baseadas na Natureza (SBNs)",
      initials: "GP"
    },
    {
      name: "Gabriela Modesto Azevedo",
      description: "Modelagem hidrológica com uso de redes neurais aplicada à bacia do Rio Negro, na Amazônia",
      initials: "GA" },
    {
      name: "Isabela Zini de Oliveira",
      description: "Pesquisa científica focada em sistemas de previsão de inundação com utilização de redes neurais",
      initials: "IO"
    },
    {
      name: "Júlia Camarano Lüdtke",
      description: "Estudos de extremos hidrológicos na bacia do Rio Madeira, com ênfase na ocorrência de secas",
      initials: "JL"
    },
    {
      name: "Lorena Grochowski Sabino dos Santos",
      description: "Iniciação científica na área de hidrogeologia",
      initials: "LS" },
    {
      name: "Marina Marcela de Paula Kolanski",
      description: "Engenheira ambiental, mestranda pelo programa SMARH da UFMG, com foco em eventos extremos e modelagem hidrológica",
      initials: "MK"
    },
    {
      name: "Pedro Henrique Bernardes Solha",
      description: "Modelagem hidrológica com redes neurais artificiais, previsão de inundações, inteligência artificial explicável",
      initials: "PS"
    },
    {
      name: "Taís Fonte Boa de Campos Maia",
      description: "Engenheira ambiental, mestranda em hidrologia com ênfase em IA e aprendizado de máquina para modelagem hidrológica",
      initials: "TM"
    }
  ];

  const hidraulica = [
    {
      name: "Carlos Eduardo Abranches Pacheco",
      description: "Aluno de graduação de engenharia civil com iniciação científica em modelagem com uso de IA para sistemas e redes hidráulicas",
      initials: "CP"
    },
    {
      name: "Daniel Bezerra Barros",
      description: "Modelagem computacional de redes de distribuição de água, detecção e localização de anomalias e vazamentos",
      initials: "DB"
    },
    {
      name: "Débora Salomé Móller",
      description: "Modelagem hidráulica de redes e adutoras de água, otimização no dimensionamento de sistemas de abastecimento",
      initials: "DM"
    },
    {
      name: "Filipe Augusto Resende Mota",
      description: "Pesquisa em transitórios hidráulicos e detecção de vazamentos",
      initials: "FM"
    },
    {
      name: "Henrique Di Bernardo Dantas",
      description: "Graduando em Engenharia Civil, iniciação científica em hidráulica de sistemas de abastecimento de água",
      initials: "HD"
    },
    {
      name: "Jéssica Soares Pereira Gonçalves",
      description: "Graduanda em Engenharia Ambiental com iniciação científica em hidráulica de sistemas de abastecimento",
      initials: "JG"
    },
    {
      name: "Jordana Madeira Alaggio Ribeiro",
      description: "Pesquisa em modelagem hidráulica com ênfase em métodos computacionais e técnicas de IA",
      initials: "JR" },
    {
      name: "Leandro Alves Evangelista",
      description: "Modelagem hidráulica e otimização de sistemas de abastecimento de água",
      initials: "LE"
    },
    {
      name: "Marina Vilaça Mendonça",
      description: "Graduanda em Engenharia Ambiental, iniciação científica em sistemas de abastecimento de água e hidráulica",
      initials: "MV"
    },
    {
      name: "Pedro Orsini Cotta",
      description: "Graduando em Engenharia Civil, pesquisa aplicação de IA em redes de distribuição para detecção de vazamentos",
      initials: "PC" },
    {
      name: "Pedro Vasconcellos Diaz",
      description: "Graduando em Engenharia Civil, iniciação científica em monitoramento de redes de distribuição com IA",
      initials: "PD" },
    {
      name: "Rafael Barreto Ferreira",
      description: "Pesquisa no uso de machine learning para previsão de estado de funcionamento de redes de abastecimento",
      initials: "RF",
      photo: "Rafael Barreto.heic"},
    {
      name: "Rui Gabriel Modesto de Souza",
      description: "Otimização e modelagem hidráulica em sistemas de abastecimento de água",
      initials: "RG"
    },
    {
      name: "Talles Luca Silva Matos",
      description: "Pesquisador em Engenharia Civil, iniciação científica aplicando IA e técnicas de otimização em redes de água",
      initials: "TL"
    },
    {
      name: "Thiago Henrique da Silva Lima",
      description: "Estudante de Engenharia Civil, pesquisa aplicação de IA e ML para previsão de inundações",
      initials: "TH"
    },
    {
      name: "Thomaz Felipe de Freitas Anchieta",
      description: "Otimização e modelagem matemático-computacional de redes de distribuição de água",
      initials: "TF"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl text-primary-foreground/90">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{t('about.mission.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.mission.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{t('about.vision.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.vision.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Research Areas */}
          <Card className="shadow-elegant border-0 mb-16">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-primary">{t('about.research.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {researchAreas.map((area, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">{t('about.team.title')}</h2>
            
            {/* Coordenação */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Coordenação</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coordenacao.map((member, index) => (
                  <Card key={index} className="shadow-elegant border-0 hover:shadow-lg transition-smooth">
                    <CardContent className="p-6 text-center">
                       <Avatar className="w-16 h-16 mx-auto mb-4">
                         <AvatarImage src={member.photo ? teamSrc(member.photo) : undefined} />
                         <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                           {member.initials}
                         </AvatarFallback>
                       </Avatar>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{member.name}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Hidrologia */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Hidrologia</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {hidrologia.map((member, index) => (
                  <Card key={index} className="shadow-elegant border-0 hover:shadow-lg transition-smooth">
                    <CardContent className="p-5 text-center">
                      <Avatar className="w-14 h-14 mx-auto mb-3">
                        <AvatarImage src={member.photo ? teamSrc(member.photo) : undefined} />
                        <AvatarFallback className="bg-secondary text-secondary-foreground text-sm font-semibold">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="text-base font-semibold text-foreground mb-2">{member.name}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{member.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Hidráulica */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Hidráulica</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {hidraulica.map((member, index) => (
                  <Card key={index} className="shadow-elegant border-0 hover:shadow-lg transition-smooth">
                    <CardContent className="p-5 text-center">
                      <Avatar className="w-14 h-14 mx-auto mb-3">
                        <AvatarImage src={member.photo ? teamSrc(member.photo) : undefined} />
                        <AvatarFallback className="bg-accent text-accent-foreground text-sm font-semibold">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="text-base font-semibold text-foreground mb-2">{member.name}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{member.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">{t('about.stats.projects')}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">{t('about.stats.publications')}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">{t('about.stats.students')}</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">{t('about.stats.years')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;