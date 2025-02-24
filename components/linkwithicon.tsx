import Link from "next/link";
import React from "react";
import LocaleText from "./ui/localeText";

type LinkWithIconProps = {
  href: string;
  icon?: React.ReactNode;
  position: "left" | "right";
  text?: string;
};

export default function LinkWithIcon({
  href,
  icon,
  position,
}: LinkWithIconProps) {
  return (
    <Link href={href} className="link flex items-center gap-2 font-light">
      {position === "left" && icon}
      <LocaleText name={"viewmore"}/>
      {position === "right" && icon}
    </Link>
  );
}