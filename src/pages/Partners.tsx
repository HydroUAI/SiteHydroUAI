import { Card, CardContent } from "@/components/ui/card";
const partnerLogoSrc = (file?: string) => (file ? `/partners/${file}` : undefined);

const Partners = () => {
  const internationalUniversities = [
    { name: "Newcastle University", url: "https://www.ncl.ac.uk/" },
    { name: "Eurac Research", url: "https://www.eurac.edu/en" },
    { name: "University of Innsbruck", url: "https://www.uibk.ac.at/en/" },
    { name: "Instituto Superior Técnico de Lisboa", url: "https://tecnico.ulisboa.pt/pt/" },
    { name: "Universitat Politècnica de València", url: "https://www.upv.es/" },
    { name: "California State University", url: "https://www.calstate.edu/" },
    { name: "University of Ferrara", url: "https://www.unife.it/en" },
    { name: "TU Delft", url: "https://www.tudelft.nl/en/" },
    { name: "University of Exeter", url: "https://www.exeter.ac.uk/" },
    { name: "University of Sheffield", url: "https://sheffield.ac.uk/" },
    { name: "Queen's University", url: "https://www.queensu.ca/" },
    { name: "Sichuan University", url: "https://en.scu.edu.cn/" , logo: "Sichuan_University_logo_(seal).svg.png"},
    { name: "Universidad de Guanajuato", url: "https://www.ugto.mx/" },
    { name: "Universidad del Rosario", url: "https://urosario.edu.co/" },
    { name: "Universidad de Pamplona", url: "https://www.unipamplona.edu.co/" }
  ];

  const nationalUniversities = [
    "Universidade Federal de Lavras - UFLA",
    "Universidade Estadual de Campinas - UNICAMP",
    "Universidade Federal de Pelotas – UFPel",
    "Universidade Federal do Tocantins",
    "Universidade Federal do Ceará",
    "Universidade Nacional de Brasília",
    "Universidade Federal do Paraná"
  ];

  const researchGroups = [
    { name: "Simoa", url: "https://simoa.eng.ufmg.br/" }
  ];

  const companies = [
    { name: "Petrobras", url: null, logo: "petrobras.png" },
    { name: "Vale", url: null, logo: "vale.png" },
    { name: "Deltares", url: "https://www.deltares.nl/en", logo: "deltares.png" },
    { name: "Stattus4", url: "https://stattus4.com/" },
    { name: "AIAQUA", url: null , logo: "AIAQUA.webp"},
    { name: "Econumérica", url: null , logo: "EConumerica.png"}
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Parceiros
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Colaboramos com instituições de ensino, grupos de pesquisa e empresas nacionais e internacionais
            para desenvolver soluções inovadoras em recursos hídricos.
          </p>
        </div>

        {/* All Partners Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {/* International Universities */}
            {internationalUniversities.map((university, index) => (
              <Card key={`int-${index}`} className="shadow-elegant hover:shadow-lg transition-smooth p-4 flex items-center justify-center min-h-[120px]">
                <CardContent className="p-0 w-full">
                  <a
                    href={university.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center group h-full"
                  >
                    <img 
                      src={`https://logo.clearbit.com/${new URL(university.url).hostname}`}
                      alt={`${university.name} logo`}
                      className="max-h-16 w-auto object-contain group-hover:scale-105 transition-smooth"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-foreground font-medium text-center text-sm">${university.name}</span>`;
                        }
                      }}
                    />
                  </a>
                </CardContent>
              </Card>
            ))}
            
            {/* National Universities */}
            {nationalUniversities.map((university, index) => (
              <Card key={`nat-${index}`} className="shadow-elegant hover:shadow-lg transition-smooth p-4 flex items-center justify-center min-h-[120px]">
                <CardContent className="p-0">
                  <span className="text-foreground font-medium text-center text-sm block">{university}</span>
                </CardContent>
              </Card>
            ))}
            
            {/* Research Groups */}
            {researchGroups.map((group, index) => (
              <Card key={`group-${index}`} className="shadow-elegant hover:shadow-lg transition-smooth p-4 flex items-center justify-center min-h-[120px]">
                <CardContent className="p-0 w-full">
                  <a
                    href={group.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center group h-full"
                  >
                    <img 
                      src={`https://logo.clearbit.com/${new URL(group.url).hostname}`}
                      alt={`${group.name} logo`}
                      className="max-h-16 w-auto object-contain group-hover:scale-105 transition-smooth"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-foreground font-medium text-center text-sm">${group.name}</span>`;
                        }
                      }}
                    />
                  </a>
                </CardContent>
              </Card>
            ))}
            
            {/* Companies */}
            {companies.map((company, index) => (
              <Card key={`comp-${index}`} className="shadow-elegant hover:shadow-lg transition-smooth p-4 flex items-center justify-center min-h-[120px]">
                <CardContent className="p-0 w-full">
                  {company.url ? (
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center group h-full"
                    >
                      <img 
                        src={`https://logo.clearbit.com/${new URL(company.url).hostname}`}
                        alt={`${company.name} logo`}
                        className="max-h-16 w-auto object-contain group-hover:scale-105 transition-smooth"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="text-foreground font-medium text-center text-sm">${company.name}</span>`;
                          }
                        }}
                      />
                    </a>
                  ) : (
                    <span className="text-foreground font-medium text-center text-sm block">{company.name}</span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Interessado em se tornar um Parceiro?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estamos sempre abertos a novas parcerias e colaborações.
              Entre em contato para discutir como podemos trabalhar juntos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
