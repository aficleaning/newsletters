import * as React from "react";
import { 
  Section,
  Text,
  Img,
  Heading,
  Button,
} from "@react-email/components"
import { ImageProps, ButtonProps } from "../types";

export interface HeaderArticleProps {
  image: ImageProps;
  subtitle: string;
  title: string;
  description: string;
  button: ButtonProps;
}

export default function HeaderArticle({
  image,
  subtitle,
  title,
  description,
  button
}: HeaderArticleProps) {
  return (
    <>
      <Section className="my-[16px]">
        <Img
          alt={image.label}
          src={image.src}
          className="w-full rounded-[12px] object-cover"
          height="320"
        />
        <Section className="mt-[32px] text-center">
          <Text className="my-[16px] text-[18px] font-semibold leading-[28px] text-orange-600">
            {subtitle}
          </Text>
          <Heading
            as="h1"
            className="m-0 mt-[8px] text-[36px] font-semibold leading-[36px] text-gray-900"
          >
            {title}
          </Heading>
          <Text className="text-[16px] leading-[24px] text-gray-500">
            {description}
          </Text>
          <Button
            className="mt-[16px] rounded-[8px] bg-orange-600 px-[40px] py-[12px] font-semibold text-white"
            href={button.url}
          >
            {button.label}
          </Button>
        </Section>
      </Section>
    </>
  )
}
