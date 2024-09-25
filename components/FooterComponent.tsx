import { 
  Tailwind,
  Container,
  Img,
  Text,
  Section,
  Row,
  Column,
  Link
} from "@react-email/components";
import * as React from "react";

interface SocialLink {
  logo: string;
  alt: string;
  link: string;
}

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

export const FooterComponent = () => (
  <Tailwind>
    <div className="bg-gray-100">
    <Container>
      <Section className="py-12">
        <Row className="" align="center">
          <Text>
            <p className="text-xl font-bold text-center">
              AfiCleaning
            </p>
            <p className="text-center m-0 text-sm">
              Via Lisbona, 6 interno, 50065
            </p>
            <p className="text-center m-0 text-sm">
              Pontassieve, Firenze
            </p>
          </Text>
          <Text>
            <p className="text-center m-0 text-sm">
              Questa email è stata inviata a {"{{ contact.EMAIL }}"}
            </p>
            <p className="text-center m-0 text-sm">
              L'hai ricevuto perché sei iscritto/a alla nostra newsletter.
            </p>
          </Text>
          <Text>
            <p className="text-center m-0 text-sm">
              <Link 
                href="{{ unsubscribe }}"
                
              >Per disiscriverti, clicca qui.</Link>
            </p>
          </Text>
        </Row>
        <Row className="w-full px-[30%] ">
          {socialLinks.map((social: SocialLink) => (
            <Column className="" align="center">
              <Link href={social.link}>
                <Img 
                  src={social.logo}
                  alt={social.alt}
                  width="32"
                  height="32"
                  className="aspect-square rounded-full"
                />
              </Link>
            </Column>
          ))}
        </Row>
      </Section>
    </Container>
    </div>
  </Tailwind>
);

export default FooterComponent;
