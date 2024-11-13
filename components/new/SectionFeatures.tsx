import * as React from "react";
import { 
  Section,
  Text,
  Row,
  Column,
  Hr,
} from "@react-email/components"
import { FeatureProps } from "../types";

export interface SectionFeaturesProps {
  title: string;
  description: string;
  list: FeatureProps[];
}

export default function SectionFeatures({
  title,
  description,
  list
}: SectionFeaturesProps) {
  return (
    <>
      <Section>
        <Row>
          <Text className="m-0 text-[24px] font-semibold leading-[32px] text-gray-900">
            {title}
          </Text>
          <Text className="mt-[8px] text-[16px] leading-[24px] text-gray-500">
            {description}
          </Text>
        </Row>
      </Section>
      <Hr className="mx-0 my-[24px] w-full border border-solid !border-gray-300" />
        {list.map((item, index) => (
          <>
            <Section>
              <Row>
                <Column className="align-baseline">
                  <table className="text-center">
                    <td
                      align="center"
                      className="h-[40px] w-[40px] rounded-full bg-orange-200 p-0"
                    >
                      <Text className="m-0 font-semibold text-orange-600">{index + 1}</Text>
                    </td>
                  </table>
                </Column>
                <Column className="w-[90%]">
                  <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
                    {item.title}
                  </Text>
                  <Text className="m-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
                    {item.description}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Hr className="mx-0 my-[24px] w-full border border-solid !border-gray-300" />
          </>
        ))}
    </>
  )
}
