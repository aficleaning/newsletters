import * as React from "react";
import { 
  Heading,
  Button,
  Text,
} from "@react-email/components"
import { ButtonProps } from "../types";

export interface SectionCallToActionProps {
  title: string;
  description: string;
  subtitle?: string;
  button: ButtonProps;
}

export default function SectionCallToAction({
  title,
  subtitle,
  description,
  button,
}: SectionCallToActionProps) {
  return (
    <>
      <table
        align="center"
        border={0}
        cellPadding="0"
        cellSpacing="0"
        className="my-[16px] h-[424px] rounded-[12px] bg-orange-600"
        role="presentation"
        //style={{
        //  // This url must be in quotes for Yahoo
        //  backgroundImage: "url('/static/my-image.png')",
        //  backgroundSize: "100% 100%",
        //}}
        width="100%"
      >
        <tbody>
          <tr>
            <td align="center" className="p-[40px] text-center">
              <Text className="m-0 font-semibold text-gray-200">
                {subtitle}
              </Text>
              <Heading as="h1" className="m-0 mt-[4px] font-bold text-white">
                {title}
              </Heading>
              <Text className="m-0 mt-[8px] text-[16px] leading-[24px] text-white">
                {description}
              </Text>
              <Button
                className="mt-[24px] rounded-[8px] border border-solid border-gray-200 bg-white px-[40px] py-[12px] font-semibold text-gray-900"
                href={button.url}
              >
                {button.label}
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
