// Contato da Nexo em formato internacional, só dígitos.
export const WHATSAPP_NUMBER = "5547988544438";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá, Nexo! Quero um orçamento para o meu site.",
)}`;
export const BUSINESS_HOURS = "Atendemos de segunda a sexta, 09h às 18h.";

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
] as const;
