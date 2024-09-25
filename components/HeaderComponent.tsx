import { 
  Tailwind,
  Container,
  Img,
  Section,
  Row,
  Column,
  Link
} from "@react-email/components";
import * as React from "react";

const logoLink = "https://cdn.prod.website-files.com/6257f9793ff4d4b9137c730a/66f405faeb5e06637c0e2d3c_625e5977c0f0437f76666770_Logo-AfiCleaning-p-500.png";
const logoAlt = "AfiCleaning"

export const HeaderComponent = () => (
  <Tailwind>
    <Container>
      <Section className="py-6">
        <Row>
          <Column align="center">
            <Link href="https://aficleaning.com">
              <Img 
                src={logoLink}
                alt={logoAlt}
                height="35"
              />
            </Link>
          </Column>
        </Row>
      </Section>
    </Container>
  </Tailwind>
);

export default HeaderComponent;
