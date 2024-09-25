import { SectionSimpleParagraphProps } from "../components/SectionSimpleParagraph";

export interface WinterSeasonEmailProps {
  header: SectionSimpleParagraphProps;
  sections: SectionSimpleParagraphProps[];
}

interface WinterSeasonEmailContents {
  horeca: WinterSeasonEmailProps;
  //constructions: WinterSeasonEmailProps;
  //agricoltural: WinterSeasonEmailProps;
}

export const winterSeasonEmailContents: WinterSeasonEmailContents = {
  horeca: {
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
        paragraph: "Affidati ad AfiCleaning per soluzioni di riscaldamento flessibili e convenienti! Offriamo noleggio, noleggio operativo e vendita diretta prestagionale, adattandoci alle esigenze del tuo locale e garantendo un supporto professionale per mantenere il tuo ambiente sempre accogliente. Scegli la qualità e l’affidabilità di AfiCleaning per un inverno caldo e di successo!"
      },
    ],
  },

}
