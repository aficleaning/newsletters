import { 
  Tailwind,
  Container,
  Img,
  Text,
  Section,
  Row,
  Column,
  Link,
  Heading,
  Button,
  Hr
} from "@react-email/components";
import * as React from "react";
import { DefaultButton } from "./DefaultButton";

export interface SectionSimpleParagraphProps {
  title: string;
  style: "h1" | "h2" | "h3";
  paragraph: string;
  image?: {
    url: string;
    alt: string;
  }
  button?: {
    url: string;
    label: string;
  }
  separator?: "top" | "bot" | "vertical";
}

export const SectionSimpleParagraph = ({
  title,
  style,
  paragraph,
  image,
  button,
  separator
}: SectionSimpleParagraphProps) => (
  <>
  { (separator === "top" || separator === "vertical") && (
    <Container className="px-8 pt-2 bg-white">
      <Hr className="m-0 p-0"/>
    </Container>
  )}
  <Container className="bg-white p-8">
    <Section>
      <Row>
        <Column> 
          <Heading 
            className={ 
              style == "h1" ? ("text-2xl") :
              style == "h2" ? ("text-xl") :
              style == "h3" ? ("text-base") :
              ("text-base")
            }
            as={style}
          >
            {title}
          </Heading>
          {image && (
            <Img
              src={image.url}
              alt={image.alt}
              className="aspect-video object-cover w-full"
            />
          )}
          <Text>
            <p 
              className="text-sm"
              dangerouslySetInnerHTML={{__html: paragraph}} 
            />
          </Text>
          {button && (
            <DefaultButton 
              label={button.label}
              url={button.url}
            />
          )}
        </Column>
      </Row>
    </Section>
  </Container>
  { (separator === "bot" || separator === "vertical") && (
    <Container className="px-8 pt-2 bg-white">
      <Hr className="m-0 p-0"/>
    </Container>
  )}
  </>
);

export default SectionSimpleParagraph;
