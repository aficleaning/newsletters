import {
  Body,
  Html,
  Preview,
  Tailwind
} from "@react-email/components";
import * as React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import DefaultHeadComponent from "../components/DefaultHeadComponent";
import SectionSimpleParagraph, { SectionSimpleParagraphProps } from "../components/SectionSimpleParagraph";
import { WinterSeasonEmailProps, winterSeasonEmailContents } from "../content/2024-heating";


export const WinterSeasonEmail = ({
  header,
  sections
}: WinterSeasonEmailProps) => (
  <Html>
    <Preview>Noleggio e vendita prestagionali</Preview>
    <DefaultHeadComponent />
    <Tailwind>
      <Body className="bg-gray-100">
        <HeaderComponent />
        <SectionSimpleParagraph 
          title={header.title}
          style={header.style}
          paragraph={header.paragraph}

        />
        {sections.map((section: SectionSimpleParagraphProps) => (
          <SectionSimpleParagraph 
            separator="top"
            title={section.title}
            style={"h2"}
            paragraph={section.paragraph}
            image={section.image}
            button={section.button}
          />
        ))}
        <FooterComponent />
      </Body>
    </Tailwind>
  </Html>
);

WinterSeasonEmail.PreviewProps = {
  ...winterSeasonEmailContents.constructionCompanies
} as WinterSeasonEmailProps;

export default WinterSeasonEmail;
