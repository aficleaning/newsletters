import {
  Body,
  Head,
  Html,
  Preview,
  Tailwind,
  Font,
  Container
} from "@react-email/components";
import * as React from "react";
import NewFooter from "../components/new/Footer";
import NewHeader from "../components/new/Header";
import SectionGrid, { SectionGridProps } from "../components/new/SectionGrid";
import HeaderArticle, { HeaderArticleProps } from "../components/new/HeroArticle";
import Divider from "../components/new/Divider";
import SectionFeatures, { SectionFeaturesProps } from "../components/new/SectionFeatures";
import SectionArticles, { SectionArticlesProps } from "../components/new/SectionArticles";
import SectionCallToAction, { SectionCallToActionProps } from "../components/new/SectionCallToAction";

interface Props {
  //grid: SectionGridProps
  header: HeaderArticleProps,
  features: SectionFeaturesProps,
  articles: SectionArticlesProps,
  callToAction: SectionCallToActionProps,
  otherProducts: SectionArticlesProps,
}

export const WinterSeasonEmail = ({
  //grid,
  header,
  features,
  articles,
  callToAction,
  otherProducts
}: Props) => (
  <Html>
  <Head>
    <Font
      fontFamily="Inter"
      fallbackFontFamily="Arial"
      webFont={{
        url: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2",
        format: "woff2",
      }}
      fontWeight={400}
      fontStyle="normal"
    />
    <Font
      fontFamily="Inter"
      fallbackFontFamily="Arial"
      webFont={{
        url: "https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_fjbvMwCp50PDca1ZL7.woff2",
        format: "woff2",
      }}
      fontWeight={400}
      fontStyle="semibold"
    />
  </Head>
    <Preview>Noleggio e vendita prestagionali</Preview>
    <Tailwind>
      <Body className="bg-white">
        <Container>
          <NewHeader />

          <Divider type="sm" />
          <HeaderArticle 
            image={header.image}
            subtitle={header.subtitle}
            title={header.title}
            description={header.description}
            button={header.button}
          />

          <Divider type="md"/>
          <SectionArticles 
            title={articles.title}
            description={articles.description}
            subtitle={articles.subtitle}
            articles={articles.articles}
          />

          <Divider type="lg"/>
          <SectionCallToAction 
            title={callToAction.title}
            description={callToAction.description}
            subtitle={callToAction.subtitle}
            button={callToAction.button}
          />

          <Divider type="lg"/>
          <SectionArticles 
            title={otherProducts.title}
            description={otherProducts.description}
            subtitle={otherProducts.subtitle}
            articles={otherProducts.articles}
          />


          <Divider type="md"/>
          <SectionFeatures 
            title={features.title}
            description={features.description}
            list={features.list}
          />

          <Divider type="md"/>
          <NewFooter />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

const sectionGrid: SectionGridProps = {
  images: {
    first: {
      label: "alt",
      src: "https://react.email/static/grinder-collection.jpg",
    },
    second: {
      label: "alt",
      src: "https://react.email/static/grinder-collection.jpg",
    },
    third: {
      label: "alt",
      src: "https://react.email/static/grinder-collection.jpg",
    },
  },
  subtitle: "subtitle",
  title: "title",
  description: "description",
}

const headerArticle: HeaderArticleProps = {
  image: {
    label: "",
    src: "https://cdn.prod.website-files.com/6257f9793ff4d4b9137c730a/67348e60df92bef341b2c188_Immagine-2024-08-30-222558-1024x649.jpg",
  },
  subtitle: "Speciale riscaldamento navale",
  title: "Riscaldamento efficiente per i cantieri navali e capannoni",
  description: "Riscaldare un cantiere navale o un capannone in inverno garantisce sicurezza e comfort, aumenta la produttività, protegge materiali e attrezzature dall’umidità e dal gelo, e assicura operazioni continue e di alta qualità anche nelle basse temperature.",
  button: {
    label: "Richiedi oggi una consulenza senza impegno",
    url: "https://www.aficleaning.com/contatti"
  }
}

const sectionFeatures: SectionFeaturesProps = {
  title: "Motivi per scegliere Master RS 40",
  description: "Riscaldatore d'Aria Elettrico a Ventola, la soluzione ideale per riscaldare i vostri cantieri navali e capannoni durante la stagione fredda.",
  list: [
    {
      title: "Potenza Regolabile",
      description: "Selezionate tra 13, 26 o 40 kW per adattare il riscaldamento alle vostre esigenze specifiche.",
    },
    {
      title: "Installazione Flessibile",
      description: "Possibilità di collegamento a un tubo flessibile per una distribuzione ottimale dell'aria calda.",
    },
    {
      title: "Ambiente Sano",
      description: "Nessun consumo di ossigeno, niente fumi, odori o umidità. Ideale per spazi chiusi.",
    },
    {
      title: "Versatilità",
      description: "Funzione estate/inverno per utilizzare il dispositivo anche come semplice ventilatore.",
    },
    {
      title: "Sicurezza",
      description: "Dotato di termostato ambiente incorporato, termostato di sovratemperatura e motore con protezione termica.",
    },
    {
      title: "Affidabilità",
      description: "Costruito con componenti di alta qualità certificati per garantire efficienza e durata nel tempo.",
    },
  ]
}

const sectionArticles: SectionArticlesProps = {
  title: "Master RS 40",
  subtitle: "In pronta consegna",
  description: "Master RS 40 è un riscaldatore elettrico a ventola potente e versatile (13/26/40 kW) ideale per cantieri navali e capannoni. Offre collegamento a tubo flessibile, termostato integrato, nessun consumo di ossigeno e alta affidabilità, garantendo riscaldamento sicuro ed efficiente.",
  articles: [
    {
      first: {
        title: "Asciugatura vernici",
        //subtitle: "Produttivita'",
        description: "Accelera il processo di asciugatura delle vernici, migliorando la produttività.",
        image: {
          label: "",
          src: "https://cdn.prod.website-files.com/6257f9793ff4d4b9137c730a/67348e648fc96a946c1eecb7_Master-RS-40-with-tube_e1641f15d5258eefe8c79c2e55921678.webp",
        }
      },
      second: {
        title: "Temperature ottimali",
        //subtitle: "Ambienti sani",
        description: "Ideale per mantenere temperature costanti in ambienti sensibili.",
        image: {
          label: "",
          src: "https://cdn.prod.website-files.com/6257f9793ff4d4b9137c730a/67348e68ec9b48a73af446f8_Master-RS-40-factory_e1641f15d5258eefe8c79c2e55921678.webp",
        }
      },
    }
  ]
}

const sectionRelated: SectionArticlesProps = {
  subtitle: "Altre macchine disponibili",
  title: "Generatori ad aria calda a gasolio",
  description: "Scoprite la nostra gamma di generatori di aria calda a gasolio, ideali per cantieri navali e capannoni. Offrono potenza affidabile e prestazioni elevate, perfetti per esigenze diverse. Contattateci per maggiori informazioni e soluzioni personalizzate.",
  articles: [
    {
      first: {
        title: "Biemmedue EC85",
        //subtitle: "Produttivita'",
        description: "Dotato di bruciatore automatico e presa per collegamento termostato o timer.",
        image: {
          label: "",
          src: "https://cdn.prod.website-files.com/6257f9793ff4d4b9137c730a/6735b5d479a8a31c3f0169d9_COPERTINA.jpg",
        }
      },
      second: {
        title: "Biemmedue Phoen",
        //subtitle: "Ambienti sani",
        description: "Con selettore potenza fino a 110kW e bruciatore integrato con ventilazione indipendente.",
        image: {
          label: "",
          src: "https://cdn.prod.website-files.com/6257f9793ff4d4b9137c730a/6735b5c49388260c8dd7c4c0_ec85.jpg",
        }
      },
    }
  ]
}

const sectionCallToAction: SectionCallToActionProps = {
  title: "Promo inverno 2024",
  subtitle: "Offerta noleggio stagionale",
  description: "Noleggia il Master RS 40 a €1.000 + IVA, trasporto escluso. Include termostato e guaina per mandata aria calda. Garantisci un ambiente sicuro e produttivo nel tuo cantiere questo inverno.",
  button: {
    label: "Prenota oggi, pezzi limitati",
    url: "https://www.aficleaning.com/contatti"
  }
}

WinterSeasonEmail.PreviewProps = {
  //grid: sectionGrid,
  header: headerArticle,
  features: sectionFeatures,
  articles: sectionArticles,
  callToAction: sectionCallToAction,
  otherProducts: sectionRelated,
} as Props

export default WinterSeasonEmail;
