import { SectionSimpleParagraphProps } from "../components/SectionSimpleParagraph";

export interface WinterSeasonEmailProps {
  header: SectionSimpleParagraphProps;
  sections: SectionSimpleParagraphProps[];
}

interface WinterSeasonEmailContents {
  barAndRestaurants: WinterSeasonEmailProps;
  constructionCompanies: WinterSeasonEmailProps;
  agricolturalCompanies: WinterSeasonEmailProps;
}

const barAndRestaurants: WinterSeasonEmailProps = {
  header: {
    title: "🌡️ Ottimizza il Comfort per i Tuoi Clienti, {{ contact.NOME }}",
    style: "h1",
    paragraph: "Mantenere una temperatura ideale nel tuo bar o ristorante migliora l’esperienza dei clienti e ti permette di sfruttare ogni spazio, anche all’aperto, per accogliere ospiti nelle serate più fredde!",
  },
  sections: [
    {
      title: "🔆 Lampade Riscaldanti a Infrarossi: Calore Diretto e Accogliente",
      style: "h3",
      paragraph: "Le nostre lampade a infrarossi offrono un <b>riscaldamento rapido e mirato</b>, ideale per creare un ambiente confortevole sia all’interno che nei dehor dei tuoi locali. Facili da installare e regolare, garantiscono un’esperienza piacevole ai tuoi clienti anche nelle serate più fredde, valorizzando ogni angolo del tuo spazio.",
      image: {
        url: "https://cdn.prod.website-files.com/6263df925150570d052ae0c4/633809d84bf7c581e42f2474_630362a8cf3c96c085e88758_628f72dd62cf1929cdca8ad8_FUTURCLIMA%252520SUN%25252015%252520OC%252520riscaldamento%252520interno%252520ristorante.jpeg",
        alt: "Lampade riscaldanti"
      },
      button: {
        label: "Richiedi le Lampade Riscaldanti",
        url: "https://www.aficleaning.com/contatti"
      }
    },
    {
      title: "🍄 Funghi Riscaldanti: Eleganza e Efficienza",
      style: "h3",
      paragraph: "I funghi riscaldanti di AfiCleaning uniscono <b>design raffinato ed efficienza energetica</b>, perfetti per arredare gli spazi esterni del tuo bar o ristorante senza rinunciare al comfort. Distribuiscono il calore in modo uniforme, creando un’atmosfera invitante e accogliente per i tuoi clienti, aggiungendo un tocco di stile al tuo ambiente.",
      image: {
        url: "https://cdn.prod.website-files.com/6263df925150570d052ae0c4/633809c64bf7c5f80a2f1ea2_63036294cf3c966075e884ef_628f7799475faef85877ca02_GMR%252520TRADING%252520GAIA%252520riscaldamento%252520terrazza.jpeg",
        alt: "Funghi riscaldanti"
      },
      button: {
        label: "Richiedi i Funghi Riscaldanti",
        url: "https://www.aficleaning.com/contatti"
      }
    },
    {
      title: "🌬️ Generator di Aria Calda: Potenza e Versatilità",
      style: "h3",
      paragraph: "I generatori di aria calda di AfiCleaning sono la soluzione ideale <b>per riscaldare grandi spazi interni o esterni</b> in modo rapido ed efficace. Potenti e versatili, garantiscono una temperatura costante e confortevole, permettendoti di accogliere clienti anche nelle giornate più fredde senza compromessi.",
      image: {
        url: "https://cdn.prod.website-files.com/6263df925150570d052ae0c4/63380855ef072639de33c732_6303629acf3c96f1e1e88578_628f7e0401a8bb578202946c_BIEMMEDUE%252520JUMBO%252520riscaldamento%252520tensostruttura.jpeg",
        alt: "Generatori di aria calda"
      },
      button: {
        label: "Richiedi i Generatori di Aria Calda",
        url: "https://www.aficleaning.com/contatti"
      }
    },
    {
      title: "🤝 Perché Scegliere AfiCleaning?",
      style: "h3",
      paragraph: "Affidati ad AfiCleaning per soluzioni di riscaldamento flessibili e convenienti! Offriamo noleggio, noleggio operativo, assistenza e vendita diretta prestagionale, adattandoci alle esigenze del tuo locale e garantendo un supporto professionale per mantenere il tuo ambiente sempre accogliente. Scegli la qualità e l’affidabilità di AfiCleaning per un inverno caldo e di successo!"
    },
  ],
}

const agricolturalCompanies: WinterSeasonEmailProps = {
  header: {
    title: "🌡️ {{ contact.NOME }}, Mantieni la Temperatura Ideale per le Tue Coltivazioni",
    style: "h1",
    paragraph: "Un ambiente caldo e controllato favorisce la crescita delle piante e migliora le condizioni di lavoro per il tuo team, garantendo raccolti abbondanti anche nelle stagioni più fredde.",
  },
  sections: [
    {
      title: "🌬️ Generator di Aria Calda: Potenza e Affidabilità per la Tua Azienda Agricola",
      style: "h3",
      paragraph: "I generatori di aria calda di AfiCleaning sono la <b>soluzione ideale per grandi spazi agricoli</b>, come magazzini, serre e capannoni. Offrono un riscaldamento potente e continuo, garantendo condizioni ottimali per le attività agricole e assicurando un ambiente di lavoro sicuro e confortevole durante tutto l'anno. La loro versatilità li rende perfetti per diverse applicazioni, dalle aree di stoccaggio alle zone di lavoro esterne, migliorando l'efficienza operativa della tua azienda.",
      image: {
        url: "https://cdn.prod.website-files.com/6263df925150570d052ae0c4/63380854ef07265c5a33c706_63036296cf3c961f84e88529_628f8055df4db52bd7f6c0aa_BIEMMEDUE%252520FARM%252520riscaldamento%252520serra%252520(3).jpeg",
        alt: "Generatori di aria calda"
      },
      button: {
        label: "Richiedi i Generatori di Aria Calda",
        url: "https://www.aficleaning.com/contatti"
      }
    },
    {
      title: "🤝 Perché Scegliere AfiCleaning?",
      style: "h3",
      paragraph: "Affidati ad AfiCleaning per soluzioni di riscaldamento flessibili e convenienti! <b>Offriamo noleggio, noleggio operativo, assistenza e vendita diretta prestagionale</b>, adattandoci alle esigenze della tua azienda agricola e garantendo un supporto professionale per mantenere il tuo ambiente sempre caldo e produttivo. Scegli la qualità e l’affidabilità di AfiCleaning per un’agricoltura di successo, anche nei mesi più freddi!"
    },
  ],
}

const constructionCompanies: WinterSeasonEmailProps = {
  header: {
    title: "🌡️ {{ contact.NOME }}, Mantieni Caldo nei Cantieri per una Costruzione Efficiente e Sicura",
    style: "h1",
    paragraph: "Mantenere una temperatura ottimale nei cantieri e nei magazzini di materiali edilizi migliora la produttività dei lavoratori, preserva i materiali sensibili e garantisce operazioni sicure anche nelle condizioni più fredde.",
  },
  sections: [
    {
      title: "🌬️ Generatori di Aria Calda: Potenza e Affidabilità per Grandi Spazi Edili",
      style: "h3",
      paragraph: "I generatori di aria calda di AfiCleaning sono la soluzione ideale <b>per riscaldare grandi spazi nei cantieri edili e nei magazzini di materiali</b>. Offrono un riscaldamento potente e continuo, garantendo condizioni ottimali per la lavorazione dei materiali e la sicurezza operativa. La loro versatilità li rende perfetti per diverse applicazioni, dalle aree di stoccaggio alle zone di assemblaggio, migliorando l'efficienza e la produttività del tuo cantiere.",
      image: {
        url: "https://cdn.prod.website-files.com/6263df925150570d052ae0c4/63380855ef07267fba33c745_63036299cf3c96c44ee8855d_628f90ef1fd1204fba2aba0f_BIEMMEDUE%252520GE%25252065%252520riscaldamento%252520cantiere%252520edile.jpeg",
        alt: "Generatori di aria calda"
      },
      button: {
        label: "Richiedi i Generatori di Aria Calda",
        url: "https://www.aficleaning.com/contatti"
      }
    },
    {
      title: "🔆 Lampade Riscaldanti a Infrarossi: Calore Mirato per i Tuoi Cantieri",
      style: "h3",
      paragraph: "Le nostre lampade a infrarossi offrono un riscaldamento <b>rapido e focalizzato</b>, ideale per aree di lavoro specifiche nei cantieri edilizi. Facili da installare e regolabili, assicurano una temperatura costante che favorisce la precisione nei lavori di costruzione e migliora il comfort dei tuoi operai, rendendo l’ambiente di lavoro più sicuro e produttivo.",
      image: {
        url: "https://cdn.prod.website-files.com/6263df925150570d052ae0c4/633809d94bf7c5b8522f24ad_630362a9cf3c969723e88767_628f770f895e6f62b27f9312_MASTER%252520TS%2525203%252520A%252520riscaldamento%252520edificio%252520in%252520ristrutturazione.jpeg",
        alt: "Lampade riscaldanti"
      },
      button: {
        label: "Richiedi le Lampade Riscaldanti",
        url: "https://www.aficleaning.com/contatti"
      }
    },
    {
      title: "🤝 Perché Scegliere AfiCleaning?",
      style: "h3",
      paragraph: "Affidati ad AfiCleaning per soluzioni di riscaldamento flessibili e convenienti! Offriamo <b>noleggio, noleggio operativo e vendita diretta prestagionale</b>, adattandoci alle esigenze specifiche della tua azienda edilizia. Che tu abbia bisogno di riscaldare cantieri attivi o magazzini di materiali, AfiCleaning garantisce un supporto professionale per mantenere il tuo ambiente sempre caldo e produttivo. Scegli la qualità e l’affidabilità di AfiCleaning per un inverno efficiente e senza interruzioni nel tuo settore edilizio!"
    },
  ],
}
export const winterSeasonEmailContents: WinterSeasonEmailContents = {
  barAndRestaurants: barAndRestaurants,
  constructionCompanies: constructionCompanies,
  agricolturalCompanies: agricolturalCompanies,
}
