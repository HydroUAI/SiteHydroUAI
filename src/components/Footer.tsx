import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Hydro-UAI</h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">{t('nav.about')}</a></li>
              <li><a href="/projects" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">{t('nav.projects')}</a></li>
              <li><a href="/publications" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">{t('nav.publications')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.research')}</h4>
            <ul className="space-y-2">
              <li><a href="/downloads" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">{t('nav.downloads')}</a></li>
              <li><a href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">{t('footer.contact')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Hydro-UAI Research Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;