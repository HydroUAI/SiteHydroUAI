import { Card, CardContent } from "@/components/ui/card";

const partnerLogoSrc = (file?: string) =>
  (file ? import.meta.env.BASE_URL + "partners/" + file : undefined);

type Partner = { name: string; url: string | null; logo: string | null };

const partners: Partner[] = [
  {
    "name": "Petrobras",
    "url": null,
    "logo": "Petrobras.png"
  },
  {
    "name": "Vale",
    "url": null,
    "logo": "Vale.png"
  },
  {
    "name": "Deltares",
    "url": "https://www.deltares.nl/en",
    "logo": "deltares.png"
  },
  {
    "name": "Stattus4",
    "url": "https://stattus4.com/",
    "logo": "stattus4.webp"
  },
  {
    "name": "AIAQUA",
    "url": "https://www.aiaqua.com/",
    "logo": "AIAQUA.jpg"
  },
  {
    "name": "EConumérica",
    "url": "https://www.econumerica.com/",
    "logo": "EConumerica.png"
  },
  {
    "name": "Simoa",
    "url": "https://simoa.eng.ufmg.br/",
    "logo": "SIMOA.png"
  },
  {
    "name": "Newcastle University",
    "url": "https://www.ncl.ac.uk/",
    "logo": "newcastle.jpg"
  },
  {
    "name": "Eurac Research",
    "url": "https://www.eurac.edu/en",
    "logo": "Eurac_Research_-_logo.png"
  },
  {
    "name": "University of Innsbruck",
    "url": "https://www.uibk.ac.at/en/",
    "logo": "innsbruck.png"
  },
  {
    "name": "Instituto Superior Técnico de Lisboa",
    "url": "https://tecnico.ulisboa.pt/pt/",
    "logo": "tecnico_lisboa.jpg"
  },
  {
    "name": "Universitat Politècnica de València",
    "url": "https://www.upv.es/",
    "logo": "valencia.png"
  },
  {
    "name": "California State University",
    "url": "https://www.calstate.edu/",
    "logo": "california.png"
  },
  {
    "name": "University of Ferrara",
    "url": "https://www.unife.it/en",
    "logo": "Ferrara.png"
  },
  {
    "name": "TU Delft",
    "url": "https://www.tudelft.nl/en/",
    "logo": "TUDelft.png"
  },
  {
    "name": "University of Exeter",
    "url": "https://www.exeter.ac.uk/",
    "logo": "Exeter.png"
  },
  {
    "name": "University of Sheffield",
    "url": "https://sheffield.ac.uk/",
    "logo": "Sheelfied.png"
  },
  {
    "name": "Queen’s University",
    "url": "https://www.queensu.ca/",
    "logo": "QueensU_Wordmark.png"
  },
  {
    "name": "Sichuan University",
    "url": "https://en.scu.edu.cn/",
    "logo": "Sichuan_University_logo_(seal).svg.png"
  },
  {
    "name": "Universidad de Guanajuato",
    "url": "https://www.ugto.mx/",
    "logo": "escudo-universidad-de-guanajuato.png"
  },
  {
    "name": "Universidad del Rosario",
    "url": "https://urosario.edu.co/",
    "logo": "rosario.png"
  },
  {
    "name": "Universidad de Pamplona",
    "url": "https://www.unipamplona.edu.co/",
    "logo": "Pamplona.png"
  },
  {
    "name": "Universidade Federal de Lavras - UFLA",
    "url": null,
    "logo": "ufla.jpg"
  },
  {
    "name": "Universidade Estadual de Campinas - UNICAMP",
    "url": null,
    "logo": "unicamp.jpg"
  },
  {
    "name": "Universidade Federal de Pelotas – UFPel",
    "url": null,
    "logo": "ufpel.png"
  },
  {
    "name": "Universidade Federal do Tocantins",
    "url": null,
    "logo": "UFT.webp"
  },
  {
    "name": "Universidade Federal do Ceará",
    "url": null,
    "logo": "UFC.png"
  },
  {
    "name": "Universidade de Brasília - UnB",
    "url": null,
    "logo": "UNB.jpg"
  },
  {
    "name": "Universidade Federal do Paraná",
    "url": null,
    "logo": "UFParana.svg"
  }
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">Nossos Parceiros</h1>
        <Card className="shadow-elegant border-0">
          <CardContent>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 py-6 place-items-center">
              {partners.map((p, i) => (
                <li key={i} title={p.name} className="flex items-center justify-center">
                  {p.logo ? (
                    <a
                      href={p.url ?? "#"}
                      target={p.url ? "_blank" : undefined}
                      rel={p.url ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      <img
                        src={partnerLogoSrc(p.logo)}
                        alt={p.name}
                        className="max-h-24 md:max-h-28 object-contain"
                      />
                    </a>
                  ) : (
                    <div className="h-24 w-40 md:h-28 md:w-44 bg-muted rounded-md" />
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
