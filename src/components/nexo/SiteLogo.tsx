import logo from "@/assets/nexo-logo.png";

type SiteLogoProps = {
  className: string;
};

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <img
      src={logo}
      alt="Nexo"
      width={816}
      height={195}
      className={className}
    />
  );
}
