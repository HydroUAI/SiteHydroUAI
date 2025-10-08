import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, FileText, Calendar, Users } from "lucide-react";

const Publications = () => {
  const articles = [
    {
      title: "Advanced risk management software for multi-criteria decision-making in uncertain scenarios",
      journal: "Computational and Applied Mathematics",
      year: "2025",
      doi: "https://doi.org/10.1007/s40314-025-02917-1",
      type: "Artigo"
    },
    {
      title: "Sustainable AI infrastructure: A scenario-based forecast of water footprint under uncertainty",
      journal: "Journal of Cleaner Production",
      year: "2025",
      doi: "https://doi.org/10.1016/j.jclepro.2025.146528",
      type: "Artigo"
    },
    {
      title: "Battle of Water Demand Forecasting",
      journal: "Journal of Water Resources Planning and Management",
      year: "2025",
      doi: "https://doi.org/10.1061/JWRMD5.WRENG-5867",
      type: "Artigo"
    },
    {
      title: "Sensors prioritisation for hydrological forecasting based on interpretable machine learning",
      journal: "Journal of Hydrology",
      year: "2025",
      doi: "https://doi.org/10.1016/j.jhydrol.2025.134015",
      type: "Artigo"
    },
    {
      title: "Methodology for Optimized Location of Boosters in Water Distribution Networks",
      journal: "Journal of Water Resources Planning and Management",
      year: "2025",
      doi: "https://doi.org/10.1061/JWRMD5.WRENG-5864",
      type: "Artigo"
    },
    {
      title: "Hydropower Microgeneration in Detention Basins: A Case Study of Santa Lúcia Basin in Brazil",
      journal: "Water",
      year: "2025",
      type: "Artigo"
    },
    {
      title: "Enhancing explainable AI with graph signal processing: Applications in water distribution systems",
      journal: "Water Research",
      year: "2025",
      type: "Artigo"
    },
    {
      title: "Assessing the Impacts of Failures on Monitoring Systems in Real-Time Data-Driven State Estimation Models Using GCN-LSTM for Water Distribution Networks",
      journal: "Water",
      year: "2024",
      type: "Artigo"
    },
    {
      title: "Has unsustainable groundwater use induced low flow regimes in the Urucuia Aquifer System?",
      journal: "Journal of Environmental Management",
      year: "2024",
      doi: "https://doi.org/10.1016/j.jenvman.2024.122979",
      type: "Artigo"
    },
    {
      title: "Signal processing and pattern recognition for leak detection in a water distribution network",
      journal: "Journal of Water Resources Planning and Management",
      year: "2024",
      type: "Artigo"
    },
    {
      title: "Optimal district metered areas design of water distribution systems: A comparative analysis among hybrid algorithms",
      journal: "Journal of Water Process Engineering",
      year: "2024",
      type: "Artigo"
    },
    {
      title: "Optimizing pump operations in water distribution networks: Balancing energy efficiency, water quality and operational constraints",
      journal: "Journal of Water Process Engineering",
      year: "2024",
      type: "Artigo"
    },
    {
      title: "Applications of XGBoost in water resources engineering: A systematic literature review",
      journal: "Environmental Modelling & Software",
      year: "2024",
      type: "Artigo"
    },
    {
      title: "Graph neural networks for sensor placement: A proof of concept towards a digital twin of water distribution systems",
      journal: "Water",
      year: "2024",
      doi: "https://doi.org/10.3390/w16131835",
      type: "Artigo"
    },
    {
      title: "Beyond COP28: Brazil must act to tackle the global climate and biodiversity crisis",
      journal: "npj Biodiversity",
      year: "2024",
      type: "Artigo"
    },
    {
      title: "Shall we always use hydraulic models? A graph neural network metamodel",
      journal: "Water Research",
      year: "2023",
      type: "Artigo"
    },
    {
      title: "Leak detection in water distribution networks based on graph signal processing of pressure data",
      journal: "Journal of Hydroinformatics",
      year: "2023",
      type: "Artigo"
    },
    {
      title: "Estimating pressures and flow-rates with graph neural networks: Towards a digital twin",
      journal: "Water Research",
      year: "2023",
      doi: "https://doi.org/10.1016/j.watres.2023.120264",
      type: "Artigo"
    },
    {
      title: "The water–energy nexus of leakages in water distribution systems",
      journal: "Water",
      year: "2023",
      doi: "https://doi.org/10.3390/w15223950",
      type: "Artigo"
    },
    {
      title: "A review of recent developments on drought characterization, propagation, and influential factors",
      journal: "Science of the Total Environment",
      year: "2023",
      doi: "https://doi.org/10.1016/j.scitotenv.2023.165550",
      type: "Artigo"
    }
  ];

  const conferences = [
    {
      title: "Changes in the frequencies of occurrence of maximum daily precipitation for the metropolitan region of Belo Horizonte–Brazil",
      year: "2025",
      type: "Conferência"
    },
    {
      title: "Multi-criteria analysis applied to ranking rehabilitation strategies of water distribution networks",
      year: "2025",
      type: "Conferência"
    },
    {
      title: "Core-periphery structure for district metered area partitioning in urban water distribution systems",
      year: "2025",
      type: "Conferência"
    }
  ];

  const books = [];

  const PublicationCard = ({ publication }: { publication: any }) => (
    <Card className="shadow-elegant hover:shadow-lg transition-smooth">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline">
            {publication.type}
          </Badge>
          <span className="text-sm text-muted-foreground font-medium">
            {publication.year}
          </span>
        </div>
        <CardTitle className="text-lg leading-tight">{publication.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {publication.journal && (
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Periódico:</span> {publication.journal}
            </p>
          )}
          
          {publication.doi && (
            <div className="pt-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => window.open(publication.doi, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Acessar Publicação
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Publicações
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore nossas contribuições científicas em periódicos renomados, 
            conferências internacionais e publicações acadêmicas.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Artigos Publicados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Conferências</div>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3000+</div>
            <div className="text-muted-foreground">Citações</div>
          </div>
        </div>

        {/* Publications Tabs */}
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-1 mb-8">
            <TabsTrigger value="articles" className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Artigos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <PublicationCard key={index} publication={article} />
              ))}
            </div>
          </TabsContent>
</Tabs>
      </div>
    </div>
  );
};

export default Publications;
