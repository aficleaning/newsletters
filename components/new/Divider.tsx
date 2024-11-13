import * as React from "react";
import { 
  Hr
} from "@react-email/components"

interface Props {
  type: "sm" | "md" | "lg"
}

export default function Divider({type}: Props) {
  return (
    <>
      {type === "sm" && (
        <Hr className="my-[16px] border-t-2 border-gray-300" />
      )}
      {type === "md" && (
        <Hr className="my-[32px] border-t-2 border-gray-300" />
      )}
      {type === "lg" && (
        <Hr className="my-[64px] border-t-2 border-gray-300" />
      )}
    </>
  )
}
