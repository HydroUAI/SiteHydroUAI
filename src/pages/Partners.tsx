import { Card, CardContent } from "@/components/ui/card";

const partnerLogoSrc = (file?: string) => (file ? import.meta.env.BASE_URL + "partners/" + file : undefined);

const Partners = () => {
  const companies = [
  {
    "name": "Petrobras",
    "url": null,
    "logo": null
  },
  {
    "name": "Vale",
    "url": null,
    "logo": null
  },
  {
    "name": "Deltares",
    "url": "https://www.deltares.nl/en",
    "logo": null
  }
];

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">
          Nossos Parceiros
        </h1>
        <Card className="shadow-elegant border-0">
          <CardContent>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
              {companies.map((partner, index) => (
                <li key={index} className="flex items-center gap-2">
                  {partner.logo && (
                    <img
                      src={partnerLogoSrc(partner.logo)}
                      alt={partner.name}
                      className="h-6 w-auto"
                    />
                  )}
                  {partner.url ? (
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {partner.name}
                    </a>
                  ) : (
                    <span>{partner.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Partners;
