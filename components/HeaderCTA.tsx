import { 
  Tailwind,
  Container,
  Img,
  Text,
  Section,
  Row,
  Column,
  Button,
} from "@react-email/components";
import * as React from "react";
import { DefaultButton } from "./DefaultButton";

export interface CTAComponentProps {
  claim: string;
  button?: {
    url: string;
    label: string;
  }
}

export const CTAComponent = ({
  claim,
  button,
}: CTAComponentProps) => (
  <>
    <Container className="bg-white px-8 pb-8 text-center">
      <Section>
        <Row>
          <Column> 
            <Text>
              <p 
                className="form-bold text-xl"
                dangerouslySetInnerHTML={{__html: claim}} 
              />
            </Text>
            {button && (
              <Button 
                aria-disabled
                //href={button.url} 
                className="font-bold text-sm py-3 px-6 bg-orange-500 text-white rounded"
              >
                {button.label}
              </Button>
            )}
          </Column>
        </Row>
      </Section>
    </Container>
  </>
);

export default CTAComponent;
