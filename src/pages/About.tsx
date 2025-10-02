import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, BookOpen, GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const teamSrc = (file?: string) => (file ? import.meta.env.BASE_URL + "team/" + file : undefined);

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
    "name": "Bruno Melo Brentan",
    "description": " ",
    "initials": "BB"
  },
  {
    "name": "Gustavo Meirelles Lima",
    "description": " ",
    "initials": "GL"
  },
  {
    "name": "André Ferreira Rodrigues",
    "description": " ",
    "initials": "AR"
  },
  {
    "name": "Rodrigo Perdigão Gomes Bezerra",
    "description": " ",
    "initials": "RB"
  }
];
  const hidrologia = [
  {
    "name": "Anna Flávia Almeida Perini",
    "description": " ",
    "initials": "AP"
  },
  {
    "name": "Bibiana Niederauer Soares",
    "description": " ",
    "initials": "BS"
  },
  {
    "name": "David Jimenez Osorio",
    "description": " ",
    "initials": "DO"
  },
  {
    "name": "Ernesto José Garcia Canellas",
    "description": " ",
    "initials": "EC"
  },
  {
    "name": "Felipe Emanuel Domiciano Ribeiro",
    "description": " ",
    "initials": "FR"
  },
  {
    "name": "Gabriel Rodrigues Pereira",
    "description": " ",
    "initials": "GP"
  },
  {
    "name": "Gabriela Modesto Azevedo",
    "description": " ",
    "initials": "GA"
  },
  {
    "name": "Isabela Zini de Oliveira",
    "description": " ",
    "initials": "IO"
  },
  {
    "name": "Júlia Camarano Lüdtke",
    "description": " ",
    "initials": "JL"
  },
  {
    "name": "Lorena Grochowski Sabino dos Santos",
    "description": " ",
    "initials": "LS"
  },
  {
    "name": "Marina Marcela de Paula Kolanski",
    "description": " ",
    "initials": "MK"
  },
  {
    "name": "Pedro Henrique Bernardes Solha",
    "description": " ",
    "initials": "PS"
  },
  {
    "name": "Taís Fonte Boa de Campos Maia",
    "description": " ",
    "initials": "TM"
  }
];
  const hidraulica = [
  {
    "name": "Carlos Eduardo Abranches Pacheco",
    "description": " ",
    "initials": "CP"
  },
  {
    "name": "Daniel Bezerra Barros",
    "description": " ",
    "initials": "DB"
  },
  {
    "name": "Débora Salomé Móller",
    "description": " ",
    "initials": "DM"
  },
  {
    "name": "Filipe Augusto Resende Mota",
    "description": " ",
    "initials": "FM"
  },
  {
    "name": "Henrique Di Bernardo Dantas",
    "description": " ",
    "initials": "HD"
  },
  {
    "name": "Jéssica Soares Pereira Gonçalves",
    "description": " ",
    "initials": "JG"
  },
  {
    "name": "Jordana Madeira Alaggio Ribeiro",
    "description": " ",
    "initials": "JR"
  },
  {
    "name": "Leandro Alves Evangelista",
    "description": " ",
    "initials": "LE"
  },
  {
    "name": "Marina Vilaça Mendonça",
    "description": " ",
    "initials": "MM"
  },
  {
    "name": "Pedro Orsini Cotta",
    "description": " ",
    "initials": "PC"
  },
  {
    "name": "Pedro Vasconcellos Diaz",
    "description": " ",
    "initials": "PD"
  },
  {
    "name": "Rafael Barreto Ferreira",
    "description": " ",
    "initials": "RF"
  },
  {
    "name": "Rui Gabriel Modesto de Souza",
    "description": " ",
    "initials": "RS"
  },
  {
    "name": "Talles Luca Silva Matos",
    "description": " ",
    "initials": "TM"
  },
  {
    "name": "Thiago Henrique da Silva Lima",
    "description": " ",
    "initials": "TL"
  },
  {
    "name": "Thomaz Felipe de Freitas Anchieta",
    "description": " ",
    "initials": "TA"
  }
];

  return (
    <div className="min-h-screen bg-background">
      <section className="gradient-hero text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl text-primary-foreground/90">{t('about.subtitle')}</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="shadow-elegant border-0 mb-16">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-primary">{t('about.research.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {researchAreas.map((area, i) => (
                  <Badge key={i} variant="secondary" className="px-4 py-2 text-sm">{area}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">{t('about.team.title')}</h2>

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
        </div>
      </section>
    </div>
  );
};

export default About;
