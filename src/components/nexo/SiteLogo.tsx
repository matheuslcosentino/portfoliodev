import { useState } from "react";
import logo from "@/assets/nexo-logo.png.asset.json";

type SiteLogoProps = {
  className: string;
};

export function SiteLogo({ className }: SiteLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <svg
        role="img"
        aria-label="Nexo"
        width={1141}
        height={266}
        viewBox="0 0 1141 266"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32 32h78v126L210 32h84L114 234H32z" fill="#24102f" />
        <text
          x="340"
          y="207"
          fill="#24102f"
          fontFamily="Arial, sans-serif"
          fontSize="220"
          fontWeight="600"
          letterSpacing="-6"
        >
          Nexo
        </text>
      </svg>
    );
  }

  return (
    <img
      src={logo.url}
      alt="Nexo"
      width={1141}
      height={266}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
