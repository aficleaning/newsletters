import { 
  Head,
  Font
} from "@react-email/components";
import * as React from "react";

export const DefaultHeadComponent = () => (
  <Head>
    <Font
      fontFamily="Inter"
      fallbackFontFamily="Arial"
      webFont={{
        url: "https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_fjbvMwCp504jAa1ZL7.woff2",
        format: "woff2",
      }}
      fontWeight={400}
      fontStyle="normal"
    />
    <Font
      fontFamily="Inter"
      fallbackFontFamily="Arial"
      webFont={{
        url: "https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_fjbvMwCp50BTca1ZL7.woff2",
        format: "woff2",
      }}
      fontWeight={700}
      fontStyle="normal"
    />
  </Head>
);

export default DefaultHeadComponent;
