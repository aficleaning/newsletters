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

const address = "Via Lisbona, 6 interno, 50065, Pontassieve (FI)";
const checker = "Questa email è stata inviata a {{ contact.EMAIL }}. L'hai ricevuto perché sei iscritto/a alla nostra newsletter."
const contactInfo = "Tel: 055 051 2270  |  Email: info@aficleaning.com"
const unsubscribeLabel = "Per disinscriverti, clicca qui."
const unsubscribeLink = "{{ unsubscribe }}"

const socialLinks: SocialLink[] = [
  {
    alt: "Facebook",
    logo: "https://cdn.prod.website-files.com/6257f9793ff4d4b9137c730a/66f40864e37a5330dae7099b_003-facebook.png",
    link: "https://www.facebook.com/aficleaningsas/?locale=it_IT",
  },
  {
    alt: "Instagram",
    logo: "https://cdn.prod.website-files.com/6257f9793ff4d4b9137c730a/66f40864bb9f8502d1c0f126_002-social.png",
    link: "https://www.instagram.com/aficleaning/?hl=it",
  },
  {
    alt: "YouTube",
    logo: "https://cdn.prod.website-files.com/6257f9793ff4d4b9137c730a/66f40864fb215ace68a0066c_001-youtube.png",
    link: "https://www.youtube.com/c/AfiCleaning",
  },
  {
    alt: "Linkedin",
    logo: "https://cdn.prod.website-files.com/6257f9793ff4d4b9137c730a/66f408643d7eecb3f484c5e5_001-linkedin.png",
    link: "https://www.linkedin.com/company/aficleaningsas/?originalSubdomain=it",
  },
];

export default function NewFooter() {
  return (
    <>
      <Section className="my-[16px] text-center">
        <table className="w-full">
          <tr className="w-full">
            <td align="center">
              <Img
                alt={imgAlt}
                height="25"
                src={imgSrc}
              />
            </td>
          </tr>
          <tr className="w-full">
            <td align="center">
              <Text className="mb-0 mt-[4px] text-[16px] leading-[24px] text-gray-500">
                Soluzioni per la pulizia e il controllo del clima.
              </Text>
            </td>
          </tr>
          <tr>
            <td align="center">
              <Row className="table-cell h-[44px] w-[56px] align-bottom">
                {socialLinks.map((item) => (
                  <Column className="pr-[8px]">
                    <Link href={item.link}>
                      <Img
                        alt={item.alt}
                        height="36"
                        src={item.logo}
                        width="36"
                      />
                    </Link>
                  </Column>
                ))}
              </Row>
            </td>
          </tr>
          <tr>
            <td align="center" className="">
              <Text className="text-xs leading-tight text-gray-500">
                {address}
              </Text>
              <Text className="text-xs leading-tight text-gray-500">
                {contactInfo}
              </Text>
              <Text className="text-xs leading-tight text-gray-500">
                {checker}
              </Text>
              <Link href={unsubscribeLink}>
                <Text className="text-xs leading-tight text-gray-500">
                  {unsubscribeLabel}
                </Text>
              </Link>
            </td>
          </tr>
        </table>
      </Section>
    </>
  )
}
