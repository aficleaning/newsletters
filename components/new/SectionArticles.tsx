import * as React from "react";
import { 
  Section,
  Text,
  Img,
  Column,
  Row
} from "@react-email/components"
import { ImageProps, ButtonProps } from "../types";

export interface SectionArticlesProps {
  title: string;
  description: string;
  subtitle?: string;
  articles: {
    first: {
      title: string;
      subtitle?: string;
      description: string;
      image: ImageProps;
    },
    second: {
      title: string;
      subtitle?: string;
      description: string;
      image: ImageProps;
    },
  }[];
}

export default function SectionArticles({
  title,
  subtitle,
  description,
  articles,
}: SectionArticlesProps) {
  return (
    <>
      <Section className="my-[16px]">
        <Row>
          <Text className="m-0 text-[16px] font-semibold leading-[24px] text-orange-600">
            {subtitle}
          </Text>
          <Text className="m-0 mt-[8px] text-[20px] font-semibold leading-[28px] text-gray-900">
            {title}
          </Text>
          <Text className="mt-[8px] text-[16px] leading-[24px] text-gray-500">
            {description}
          </Text>
        </Row>
        {articles.map((item) => (
          <Row className="mt-[16px]">
            <Column
              className="box-border w-[50%] pl-[8px] align-baseline"
              colSpan={1}
            >
              <Img
                alt={item.first.image.label}
                src={item.first.image.src}
                className="w-full rounded-[8px] object-cover"
                height="180"
              />      
              <Text className="text-[16px] font-semibold leading-[24px] text-orange-600">
                {item.first.subtitle}
              </Text>
              <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
                {item.first.title}
              </Text>
              <Text className="mb-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
                {item.first.description}
              </Text>
            </Column>

            <Column
              className="box-border w-[50%] pl-[8px] align-baseline"
              colSpan={1}
            >
              <Img
                alt={item.second.image.label}
                src={item.second.image.src}
                className="w-full rounded-[8px] object-cover"
                height="180"
              />
              <Text className="text-[16px] font-semibold leading-[24px] text-orange-600">
                {item.second.subtitle}
              </Text>
              <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
                {item.second.title}
              </Text>
              <Text className="mb-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
                {item.second.description}
              </Text>
            </Column>
          </Row>
        ))}
      </Section>
    </>
  )
}
