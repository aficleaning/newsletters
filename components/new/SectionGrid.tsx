import * as React from "react";
import { 
  Section,
  Text,
  Column,
  Row,
  Img,
  Link
} from "@react-email/components"
import { ImageProps } from "../types";

export interface SectionGridProps {
  images: {
    first: ImageProps;
    second: ImageProps;
    third: ImageProps;
  }
  subtitle: string;
  title: string;
  description: string;
}

export default function SectionGrid({
  images,
  subtitle,
  title,
  description
}: SectionGridProps) {
  return (
    <>
      <Section className="my-[16px]">
        <Section>
          <Row>
            <Text className="m-0 text-[16px] font-semibold leading-[24px] text-orange-600">
              {subtitle}
            </Text>
            <Text className="m-0 mt-[8px] text-[24px] font-semibold leading-[32px] text-gray-900">
              {title}
            </Text>
            <Text className="mt-[8px] text-[16px] leading-[24px] text-gray-500">
              {description}
            </Text>
          </Row>
        </Section>
        <Section className="mt-[4px]">
          <Row className="mt-[16px]">
            <Column className="w-1/2 pr-[8px]">
              <Row className="pb-[8px]">
                <td>
                  <Link href="#">
                    <Img
                      alt={images.first.label}
                      src={images.first.src}
                      className="w-full rounded-[12px] object-cover"
                      height={152}
                    />
                  </Link>
                </td>
              </Row>
              <Row className="pt-[8px]">
                <td>
                  <Link href="#">
                    <Img
                      alt={images.first.label}
                      src={images.first.src}
                      className="w-full rounded-[12px] object-cover"
                      height={152}
                    />
                  </Link>
                </td>
              </Row>
            </Column>
            <Column className="w-1/2 py-[8px] pl-[8px]">
              <Link href="#">
                <Img
                  alt={images.first.label}
                  src={images.first.src}
                  className="w-full rounded-[12px] object-cover"
                  height={152 + 152 + 8 + 8}
                />
              </Link>
            </Column>
          </Row>
        </Section>
      </Section>
    </>
  )
}
