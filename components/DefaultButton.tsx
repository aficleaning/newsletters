import {
  Button
} from "@react-email/components";
import * as React from "react";

interface DefaultButton {
  label: string;
  url: string;
  disabled?: boolean,
}

export const DefaultButton = ({
  label,
  url,
  disabled = false,
}: DefaultButton) => (
  <Button 
    href={url} 
    className="font-bold text-sm py-3 px-6 bg-orange-500 text-white rounded"
  >
    {label}
  </Button>
);
