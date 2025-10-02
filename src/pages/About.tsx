import { Card } from "@/components/ui/card";
type Member = {"name": string; "description": string; "initials": string; "photo"?: string};

const teamSrc = (file?: string) => (file ? `${import.meta.env.BASE_URL}team/${file}` : undefined);

function PersonCard({ m, big = false }: { m: Member; big?: boolean }) {
  const size = big ? "w-36 h-36" : "w-28 h-28";
  const onErr = (el: HTMLImageElement) => {
    const fb = el.nextElementSibling as HTMLElement | null;
    el.style.display = "none";
    if (fb) fb.style.display = "flex";
  };
  return (
    <Card className="p-4 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition">
      <div className={`relative ${size} rounded-full overflow-hidden ring-1 ring-muted`}>
        {m.photo ? (
          <img src={teamSrc(m.photo)} alt={m.name} loading="lazy" className="w-full h-full object-cover" onError={(e) => onErr(e.currentTarget)} />
        ) : null}
        <div className="absolute inset-0 hidden items-center justify-center bg-primary text-primary-foreground font-semibold" aria-hidden="true">
          {m.initials}
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold leading-snug">{m.name}</h3>
        <p className="text-sm text-muted-foreground">{m.description}</p>
      </div>
    </Card>
  );
}

const coordenacao: Member[] = [
    { name: "Bruno Melo Brentan", description: "Especialista em Hidroinform\u00e1tica, com experi\u00eancia em an\u00e1lise de sistemas de abastecimento de \u00e1gua. Recentemente aplica IA e otimiza\u00e7\u00e3o em diversos sistemas de recursos h\u00eddricos", initials: "BB", photo: "Bruno Brentan.jpg" },
    { name: "Gustavo Meirelles Lima", description: "Otimiza\u00e7\u00e3o e modelagem hidr\u00e1ulica em sistemas de abastecimento de \u00e1gua e usinas hidrel\u00e9tricas", initials: "GL", photo: "Gustavo.jpg" },
    { name: "André Ferreira Rodrigues", description: "Doutor em Recursos H\u00eddricos com atua\u00e7\u00e3o em hidrologia, modelagem de eventos extremos (secas e inunda\u00e7\u00f5es) e eros\u00e3o e transporte de sedimentos. Tem atuado recentemente com aplica\u00e7\u00e3o de t\u00e9cnicas de intelig\u00eancia artificial em hidrologia", initials: "AR", photo: "Andre.jpg" },
    { name: "Rodrigo Perdigão Gomes Bezerra", description: "Atua\u00e7\u00e3o focada em sistemas de previs\u00e3o de inunda\u00e7\u00e3o com utiliza\u00e7\u00e3o de redes neurais e modelagem hidrodin\u00e2mica de r\u00e1pido processamento.", initials: "RB", photo: "Rodrigo.jpg" }
];

const hidrologia: Member[] = [
    { name: "Anna Flávia Almeida Perini", description: "Doutoranda em Recursos H\u00eddricos, com atua\u00e7\u00e3o em hidrologia, desenvolvendo pesquisas relacionadas aos impactos e \u00e0 din\u00e2mica dos eventos de seca.", initials: "AP", photo: "AnnaPerini.jpg" },
    { name: "Bibiana Niederauer Soares", description: "Engenheira civil, formada pela UFSM, com ampla experi\u00eancia em projetos, com \u00eanfase na \u00e1rea de recursos h\u00eddricos, como projetos de drenagem superficial, reservat\u00f3rios, barramentos, sistemas de conten\u00e7\u00e3o de cheias e sedimentos, modelagem hidr\u00e1ulica e hidrologica.", initials: "BS" },
    { name: "David Jimenez osorio", description: "Especialista em modelagem hidrol\u00f3gica em contextos de mudan\u00e7as clim\u00e1ticas e modelagem hidrodin\u00e2mica.", initials: "DO", photo: "David.jpg" },
    { name: "Ernesto José Garcia Canellas", description: "Aluno de Gradua\u00e7\u00e3o com inicia\u00e7\u00e3o cient\u00edfica em modelagem hidrol\u00f3gica aplicada no estado do Rio Grande do Sul", initials: "EC", photo: "Ernesto.jpg" },
    { name: "Felipe Emanuel Domiciano Ribeiro", description: "Engenheiro e Desenvolvedor de software com foco na automatiza\u00e7\u00e3o de processos e computa\u00e7\u00e3o de alto desempenho.", initials: "FR" },
    { name: "Gabriel Rodrigues Pereira", description: "Modelagem hidrol\u00f3gica de eventos extremos, previs\u00e3o de vaz\u00f5es e estudo de Solu\u00e7\u00f5es Baseadas na Natureza (SBNs)", initials: "GP" },
    { name: "Gabriela Modesto Azevedo", description: "Modelagem hidrol\u00f3gica com uso de redes neurais aplicada \u00e0 bacia do Rio Negro, na Amaz\u00f4nia", initials: "GA", photo: "Gabriela.jpg" },
    { name: "Isabela Zini de Oliveira", description: "Pesquisa cient\u00edfica focada em sistemas de previs\u00e3o de inunda\u00e7\u00e3o com utiliza\u00e7\u00e3o de redes neurais", initials: "IO" },
    { name: "Júlia Camarano Lüdtke", description: "Estudos de extremos hidrol\u00f3gicos na bacia do Rio Madeira, com \u00eanfase na ocorr\u00eancia de secas", initials: "JL" },
    { name: "Lorena Grochowski Sabino dos Santos", description: "Inicia\u00e7\u00e3o cient\u00edfica na \u00e1rea de hidrogeologia.", initials: "LS", photo: "Lorena.jpg" },
    { name: "Marina Marcela de Paula Kolanski", description: "Formada em engenharia ambiental pela UFMG e especialista em estruturas hidr\u00e1ulicas. Atualmente \u00e9 mestranda pelo programa SMARH da UFMG, com atua\u00e7\u00e3o focada em eventos extremos, modelagem hidrol\u00f3gica e teoria de redes complexas", initials: "MK", photo: "Marina Kolanski.jpg" },
    { name: "Pedro Henrique Bernardes Solha", description: "Modelagem hidrol\u00f3gica com redes neurais artificiais, previs\u00e3o de inunda\u00e7\u00f5es, intelig\u00eancia artificial explic\u00e1vel.", initials: "PS" },
    { name: "Taís Fonte Boa de Campos Maia", description: "Engenheira ambiental formada pela UFMG, com especializa\u00e7\u00e3o em estruturas hidr\u00e1ulicas. Mestranda pelo programa SMARH/UFMG, desenvolve pesquisa na interface entre hidrologia, eventos extremos e ci\u00eancia de dados, com \u00eanfase na aplica\u00e7\u00e3o de intelig\u00eancia artificial e aprendizado de m\u00e1quina para modelagem hidrol\u00f3gica, previs\u00e3o de vaz\u00f5es e transferibilidade de modelos.", initials: "TM" }
];

const hidraulica: Member[] = [
    { name: "Carlos Eduardo Abranches Pacheco", description: "Aluno de gradua\u00e7\u00e3o de enegenharia civil com inicia\u00e7\u00e3o cient\u00edfica em modelagem com uso de ia para sistemas e redes hidr\u00e1ulicas", initials: "CP" },
    { name: "Daniel Bezerra Barros", description: "Modelagem computacional de redes de distribui\u00e7\u00e3o de \u00e1gua, detec\u00e7\u00e3o e localiza\u00e7\u00e3o de anaomalias e falhas, vazamentos e qualidade da \u00e1gua na rede", initials: "DB" },
    { name: "Débora Salomé Móller", description: "Modelagem Hidr\u00e1ulica de redes e adutoras de \u00e1gua. Pesquisa em otimiza\u00e7\u00e3o no dimensionamento de adutoras de abastecimento de \u00e1gua associado aos custos de equipamento de prote\u00e7\u00e3o para atenuar eventos transit\u00f3rios.", initials: "DM" },
    { name: "Filipe Augusto Resende Mota", description: "Pesquisa em transit\u00f3rio hidr\u00e1ulicos e detec\u00e7\u00e3o de vazamentos", initials: "FM" },
    { name: "Henrique Di Bernardo Dantas", description: "aluno de gradua\u00e7\u00e3o em engenharia civil, inicia\u00e7\u00e3o cient\u00edfica em hidr\u00e1ulica de sistemas de abastecimento de agua", initials: "HD" },
    { name: "Jéssica Soares Pereira Gonçalves", description: "Aluna de gradua\u00e7\u00e3o em Engenharia Ambiental com inicia\u00e7\u00e3o cient\u00edfica em hidr\u00e1ulica de sistemas de abastecimento de \u00e1gua.", initials: "JG" },
    { name: "Jordana Madeira Alaggio Ribeiro", description: "Pesquisa em modelagem hidr\u00e1ulica de sistemas de abastecimento de \u00e1gua, com \u00eanfase em m\u00e9todos computacionais aplicados, incluindo teoria de redes complexas e t\u00e9cnicas de intelig\u00eancia artificial.", initials: "JR", photo: "Jordana Madeira.jpg" },
    { name: "Leandro Alves Evangelista", description: "Modelagem hidr\u00e1ulica e otimiza\u00e7\u00e3o de sistemas de abastecimento de \u00e1gua", initials: "LE" },
    { name: "Marina Vilaça Mendonça", description: "Aluna de gradua\u00e7\u00e3o em engenharia ambiental, desenvolvendo inicia\u00e7\u00e3o cient\u00edfica na \u00e1rea de sistemas de abastecimento de \u00e1gua e hidr\u00e1ulica.", initials: "MM", photo: "Marina.jpg" },
    { name: "Pedro Orsini Cotta", description: "Graduando de Engenharia Civil. Est\u00e1 pesquisando aplica\u00e7\u00e3o de intelig\u00eancia artificial em redes de distribui\u00e7\u00e3o de \u00e1gua para detec\u00e7\u00e3o e preven\u00e7\u00e3o de vazamentos.", initials: "PC" },
    { name: "Pedro Vasconcellos Diaz", description: "Aluno da gradua\u00e7\u00e3o em engenharia civil, participando de inicia\u00e7\u00e3o cient\u00edfica em monitoramento de redes de distribui\u00e7\u00e3o de \u00e1gua com o auxilio de IA.", initials: "PD", photo: "Pedro Dias.jpg" },
    { name: "Rafael Barreto Ferreira", description: "Pesquisa no uso de machine learning para previs\u00e3o de estado de funcionamento e estado hidr\u00e1ulico de redes de abastecimento de \u00e1gua e aplica\u00e7\u00e3o de intelig\u00eancia artificial explic\u00e1vel para interpretabilidade dos modelos baseados em IA.", initials: "RF", photo: "Rafael Barreto.jpg" },
    { name: "Rui Gabriel Modesto de Souza", description: "Otimiza\u00e7\u00e3o e modelagem hidr\u00e1ulica em sistemas de abastecimento de \u00e1gua", initials: "RS" },
    { name: "Talles Luca Silva Matos", description: "Pesquisador em Engenharia Civil, desenvolve inicia\u00e7\u00e3o cient\u00edfica em redes de abastecimento de \u00e1gua, aplicando intelig\u00eancia artificial (MLP, GCN) e t\u00e9cnicas de otimiza\u00e7\u00e3o de di\u00e2metros.", initials: "TM", photo: "Talles.jpg" },
    { name: "Thiago Henrique da Silva Lima", description: "Estudante de Engenharia Civil. Desenvolvendo pesquisa de Inicia\u00e7\u00e3o Cient\u00edfica na aplica\u00e7\u00e3o de Intelig\u00eancia Artificial e Machine Learning para a previs\u00e3o de inunda\u00e7\u00f5es e gest\u00e3o de riscos h\u00eddricos.", initials: "TL" },
    { name: "Thomaz Felipe de Freitas Anchieta", description: "Otimiza\u00e7\u00e3o e modelagem matem\u00e1tico-computacional de redes de distribui\u00e7\u00e3o de \u00e1gua", initials: "TA" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-10">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-10">Nossa Equipe</h1>

          <h2 className="text-2xl font-semibold mb-4">Coordenação</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            {coordenacao.map((m) => (<PersonCard key={m.name} m={m} big />))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Hidrologia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {hidrologia.map((m) => (<PersonCard key={m.name} m={m} />))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Hidráulica</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {hidraulica.map((m) => (<PersonCard key={m.name} m={m} />))}
          </div>
        </div>
      </section>
    </div>
  );
}
