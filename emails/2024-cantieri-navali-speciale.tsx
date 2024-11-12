import {
  Body,
  Head,
  Html,
  Preview,
  Tailwind,
  Font
} from "@react-email/components";
import * as React from "react";
import NewFooter from "../components/new/Footer";


export const WinterSeasonEmail = ({} ) => (
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
      <Body className="bg-gray-100">

      <NewFooter />
      </Body>
    </Tailwind>
  </Html>
);

WinterSeasonEmail.PreviewProps = {} 

export default WinterSeasonEmail;

