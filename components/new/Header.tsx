import * as React from "react";
import { 
  Section,
  Text,
  Column,
  Row,
  Img,
  Link
} from "@react-email/components"

interface SocialLink {
  logo: string;
  alt: string;
  link: string;
}

const imgLink = "https://aficleaning.com/";
const imgSrc = "https://cdn.prod.website-files.com/6257f9793ff4d4b9137c730a/66f405faeb5e06637c0e2d3c_625e5977c0f0437f76666770_Logo-AfiCleaning-p-500.png";
const imgAlt  = "AfiCleaning";

const cleaningLink = "https://www.aficleaning.com/macchine/pulizia";
const heatingLink = "https://www.aficleaning.com/macchine/riscaldamento";
const coolingLink = "https://www.aficleaning.com/macchine/raffrescamento";

const cleaningLabel = "Pulizia";
const heatingLabel = "Riscaldamento";
const coolingLabel = "Raffrescamento";


export default function NewHeader() {
  return (
    <>
      <Section className="my-[16px]">
        <Row>
          <Column className="w-[80%]">
            <Img
              alt={imgAlt}
              height="30"
              src={imgSrc}
            />
          </Column>
          <Column align="right">
            <Row align="right">
              <Column className="px-[8px]">
                <Link 
                className="text-xs text-gray-600 [text-decoration:none]" 
                href={cleaningLink}>
                  {cleaningLabel}
                </Link>
              </Column>
              <Column className="px-[8px]">
                <Link 
                className="text-xs text-gray-600 [text-decoration:none]" 
                href={heatingLink}>
                  {heatingLabel}
                </Link>
              </Column>
              <Column className="px-[8px]">
                <Link 
                className="text-xs text-gray-600 [text-decoration:none]" 
                href={coolingLink}>
                  {coolingLabel}
                </Link>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
    </>
  )
}
