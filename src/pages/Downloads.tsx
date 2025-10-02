import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, Code, Database, BookOpen, Calendar, HardDrive, Users } from "lucide-react";

const Downloads = () => {
  const datasets = [
    {
      name: "Healthcare Analytics Dataset",
      description: "Conjunto de dados anonimizados para análise de padrões em diagnósticos médicos",
      size: "2.3 GB",
      format: "CSV, JSON",
      updated: "2023-11-15",
      downloads: 1250,
      category: "Medicina"
    },
    {
      name: "Distributed Systems Performance Metrics",
      description: "Métricas de performance coletadas de sistemas distribuídos em diferentes cenários",
      size: "856 MB",
      format: "CSV, XML",
      updated: "2023-10-20",
      downloads: 890,
      category: "Sistemas"
    },
    {
      name: "AI Model Training Data",
      description: "Dataset preprocessado para treinamento de modelos de machine learning",
      size: "1.7 GB",
      format: "TensorFlow, PyTorch",
      updated: "2023-12-01",
      downloads: 2150,
      category: "IA"
    }
  ];

  const software = [
    {
      name: "DataAnalyzer Pro",
      description: "Ferramenta para análise automatizada de grandes volumes de dados científicos",
      version: "v2.4.1",
      platform: "Windows, Linux, macOS",
      updated: "2023-11-30",
      downloads: 5600,
      license: "MIT"
    },
    {
      name: "MLOptimizer",
      description: "Biblioteca para otimização de hiperparâmetros em modelos de machine learning",
      version: "v1.8.3",
      platform: "Python Package",
      updated: "2023-12-05",
      downloads: 3200,
      license: "Apache 2.0"
    },
    {
      name: "DistributedBench",
      description: "Suite de benchmarking para sistemas distribuídos e algoritmos paralelos",
      version: "v3.1.0",
      platform: "Docker, Kubernetes",
      updated: "2023-11-18",
      downloads: 1800,
      license: "GPL v3"
    }
  ];

  const papers = [
    {
      title: "Guia Prático de Machine Learning",
      description: "Manual completo com implementações e estudos de caso em ML",
      pages: 156,
      format: "PDF",
      updated: "2023-09-15",
      downloads: 8900,
      language: "Português"
    },
    {
      title: "Research Methodology in Computer Science",
      description: "Metodologia de pesquisa aplicada à ciência da computação",
      pages: 89,
      format: "PDF, EPUB",
      updated: "2023-10-30",
      downloads: 4500,
      language: "English"
    },
    {
      title: "Blockchain Fundamentals Whitepaper",
      description: "Fundamentos técnicos e aplicações práticas de blockchain",
      pages: 42,
      format: "PDF",
      updated: "2023-11-08",
      downloads: 3200,
      language: "Português"
    }
  ];

  const DownloadCard = ({ item, type }: { item: any; type: string }) => (
    <Card className="shadow-elegant hover:shadow-lg transition-smooth">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline">
            {type === 'datasets' ? item.category : 
             type === 'software' ? item.license : 
             item.language}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Download className="w-3 h-3 mr-1" />
            {item.downloads?.toLocaleString() || 'N/A'}
          </div>
        </div>
        <CardTitle className="text-lg leading-tight">
          {item.name || item.title}
        </CardTitle>
        <CardDescription className="leading-relaxed">
          {item.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Metadata */}
          <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
            {type === 'datasets' && (
              <>
                <div className="flex items-center">
                  <HardDrive className="w-3 h-3 mr-1" />
                  {item.size}
                </div>
                <div className="flex items-center">
                  <FileText className="w-3 h-3 mr-1" />
                  {item.format}
                </div>
              </>
            )}
            {type === 'software' && (
              <>
                <div className="flex items-center">
                  <Code className="w-3 h-3 mr-1" />
                  {item.version}
                </div>
                <div className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  {item.platform}
                </div>
              </>
            )}
            {type === 'papers' && (
              <>
                <div className="flex items-center">
                  <BookOpen className="w-3 h-3 mr-1" />
                  {item.pages} páginas
                </div>
                <div className="flex items-center">
                  <FileText className="w-3 h-3 mr-1" />
                  {item.format}
                </div>
              </>
            )}
            <div className="flex items-center col-span-2">
              <Calendar className="w-3 h-3 mr-1" />
              Atualizado: {new Date(item.updated).toLocaleDateString('pt-BR')}
            </div>
          </div>

          {/* Download Button */}
          <Button className="w-full bg-primary hover:bg-primary-dark">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
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
            Downloads
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acesse datasets, ferramentas, papers e outros recursos desenvolvidos 
            pelo nosso grupo de pesquisa. Todos os recursos estão disponíveis gratuitamente.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15</div>
            <div className="text-muted-foreground">Datasets</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8</div>
            <div className="text-muted-foreground">Ferramentas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25</div>
            <div className="text-muted-foreground">Papers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Downloads</div>
          </div>
        </div>

        {/* Downloads Tabs */}
        <Tabs defaultValue="datasets" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="datasets" className="flex items-center">
              <Database className="w-4 h-4 mr-2" />
              Datasets
            </TabsTrigger>
            <TabsTrigger value="software" className="flex items-center">
              <Code className="w-4 h-4 mr-2" />
              Software
            </TabsTrigger>
            <TabsTrigger value="papers" className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Papers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="datasets" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {datasets.map((dataset, index) => (
                <DownloadCard key={index} item={dataset} type="datasets" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="software" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {software.map((tool, index) => (
                <DownloadCard key={index} item={tool} type="software" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="papers" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {papers.map((paper, index) => (
                <DownloadCard key={index} item={paper} type="papers" />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Usage Guidelines */}
        <div className="mt-16">
          <Card className="bg-secondary border-none">
            <CardHeader>
              <CardTitle className="text-center">Diretrizes de Uso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Uso Acadêmico</h4>
                  <p className="text-sm text-muted-foreground">
                    Todos os recursos são livres para uso em pesquisa e educação
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Citação Requerida</h4>
                  <p className="text-sm text-muted-foreground">
                    Por favor, cite nosso trabalho ao usar nossos recursos
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Suporte Disponível</h4>
                  <p className="text-sm text-muted-foreground">
                    Entre em contato para suporte técnico ou dúvidas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Downloads;