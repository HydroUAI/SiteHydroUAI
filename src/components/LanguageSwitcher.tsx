import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
        className="px-2 py-1 h-auto text-sm font-medium transition-smooth hover:bg-secondary"
      >
        {language === 'pt' ? 'EN' : 'PT'}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;