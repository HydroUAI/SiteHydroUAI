import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BookOpen, Award, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-research.jpg";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(33, 66, 149, 0.85) 0%, rgba(33, 66, 149, 0.65) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 font-medium">
            {t('home.hero.subtitle')}
          </p>
          <p className="text-lg mb-10 text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {t('home.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-lg">
              <Link to="/projects">
                {t('home.hero.viewProjects')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/publications">
                <BookOpen className="mr-2 h-5 w-5" />
                {t('home.hero.publications')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-gradient-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              {t('home.overview.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('home.overview.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card shadow-elegant border-0 hover:shadow-lg transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t('home.overview.expertise.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('home.overview.expertise.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-elegant border-0 hover:shadow-lg transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t('home.overview.aiWater.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('home.overview.aiWater.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-elegant border-0 hover:shadow-lg transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t('home.overview.research.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('home.overview.research.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-elegant border-0 hover:shadow-lg transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t('home.overview.innovation.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('home.overview.innovation.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl mb-10 text-primary-foreground/90">
            {t('home.cta.description')}
          </p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-lg">
            <Link to="/contact">
              {t('home.cta.contact')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;