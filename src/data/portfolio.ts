export const profile = {
  firstName: "Matheus",
  lastName: "Lopes",
  fullName: "Matheus Lopes Cosentino",
  role: "Desenvolvedor Full-Stack",
  handle: "@matheuslcosentino",
  location: "Navegantes, SC",
  email: "matheuslopescosentino@hotmail.com",
  phone: "+55 47 98854-4438",
  whatsapp: "5547988544438",
  linkedin: "https://linkedin.com/in/matheus-cosentino",
  github: "https://github.com/matheuslcosentino",
};

export const navLinks = [
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Carreira", href: "#carreira" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export type Project = {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  url: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "01",
    name: "Dra. Aline Garcia",
    category: "Site institucional",
    subtitle: "Estética avançada & harmonização facial · Navegantes, SC",
    description:
      "Site institucional para uma clínica de estética em Navegantes. Reúne os tratamentos, diferenciais, avaliações reais de clientes e agendamento direto pelo WhatsApp — responsivo, rápido e pensado para transformar visita em contato.",
    image: "/preview-draline.jpg",
    url: "https://sitedralineestetica.vercel.app",
    stack: ["HTML", "Tailwind CSS", "Responsivo", "WhatsApp"],
  },
  {
    id: "02",
    name: "Vanessa Alves Advocacia",
    category: "Site institucional",
    subtitle: "Direito penal, família e cível · Navegantes, SC",
    description:
      "Site institucional para o escritório da advogada Vanessa Alves, com apresentação das áreas de atuação em Direito Penal, Família e Cível, informações de atendimento em Navegantes e contato para orientação jurídica.",
    image: "/preview-vanessa.webp",
    url: "https://sitevanessaalvesadv.vercel.app",
    stack: ["HTML", "Tailwind CSS", "Responsivo", "Contato"],
  },
];

export type StackGroup = {
  title: string;
  accent: "lime" | "violet" | "sky" | "orange" | "rose" | "ink";
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    accent: "lime",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind"],
  },
  {
    title: "Backend & APIs",
    accent: "violet",
    items: ["Python", "Node.js", "APIs REST", "Integrações"],
  },
  {
    title: "UI & responsivo",
    accent: "rose",
    items: ["Mobile-first", "Photoshop", "Krita", "Acessibilidade"],
  },
  {
    title: "Performance & SEO",
    accent: "orange",
    items: ["Core Web Vitals", "SEO local", "Open Graph", "Deploy"],
  },
  {
    title: "Ferramentas",
    accent: "sky",
    items: ["Git", "GitHub", "Vercel", "VS Code"],
  },
  {
    title: "Processo",
    accent: "ink",
    items: ["Scrum", "Briefing", "Entrega contínua"],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "Tech Lead",
    company: "Erderon",
    location: "Joinville, SC · Remoto",
    period: "06/2025 — Atual",
    current: true,
    bullets: [
      "Liderança técnica de uma plataforma web multiplayer em tempo real, atuando do back-end às interfaces do produto.",
      "Desenvolvimento de sistemas de salas, sincronização entre usuários, permissões e fluxos de navegação.",
      "Implementação e manutenção de interfaces responsivas, componentes reutilizáveis e integração de APIs.",
      "Organização do fluxo de desenvolvimento da equipe, revisão de código e decisões de arquitetura.",
    ],
    tags: ["Full-Stack", "APIs", "Tempo real", "Liderança"],
  },
  {
    role: "Desenvolvedor Full-Stack",
    company: "Projetos para clientes",
    location: "Navegantes, SC · Freelance",
    period: "2024 — Atual",
    bullets: [
      "Criação de sites institucionais e landing pages para negócios locais, do layout à publicação.",
      "Estrutura responsiva, integração com WhatsApp, formulários de contato e boas práticas de SEO local.",
      "Otimização de imagens, fontes e carregamento para entregar páginas rápidas também no celular.",
      "Relacionamento direto com o cliente: briefing, ajustes, prazos e entrega final publicada.",
    ],
    tags: ["Sites", "Landing pages", "SEO", "Deploy"],
  },
  {
    role: "Bacharel em Desenvolvimento",
    company: "UNIVALI",
    location: "Balneário Camboriú, SC",
    period: "2022 — 2025",
    bullets: [
      "Formação com base em desenvolvimento de software, lógica, estrutura de dados e projeto de interfaces.",
      "Estudos complementares em desenvolvimento web, design e publicação de produtos digitais.",
      "Certificações técnicas e prática constante em projetos próprios e de clientes.",
    ],
    tags: ["Desenvolvimento", "Design", "Certificações"],
  },
];

export const stats = [
  { value: "2+", label: "Projetos no ar" },
  { value: "4+", label: "Anos desenvolvendo" },
  { value: "24h", label: "Retorno médio" },
];

export const aboutParagraphs = [
  "Desenvolvedor full-stack em Navegantes, SC. Construo sites institucionais e landing pages para negócios que precisam ser encontrados, entendidos e contatados — do primeiro rascunho até o site no ar.",
  "Trabalho nas duas pontas: interfaces responsivas, legíveis e rápidas, e a parte que ninguém vê — estrutura, integrações, formulários e publicação. Cada projeto é pensado para carregar rápido no celular e transformar visita em conversa no WhatsApp.",
  "Gosto de processo simples: entender o negócio, desenhar a página, implementar, testar e publicar. Sem promessa vazia, sem retrabalho desnecessário e com comunicação direta do início ao fim.",
];
