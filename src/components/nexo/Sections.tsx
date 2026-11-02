import {
  Building2,
  FileText,
  Gauge,
  Globe,
  LayoutTemplate,
  LifeBuoy,
  PenTool,
  RefreshCw,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  FileSignature,
  KeyRound,
  MessageCircle,
  Eye,
  ListChecks,
  Wrench,
} from "lucide-react";
import { SectionHeading, WhatsAppCta } from "./SectionHeading";
import { WhatsAppIcon } from "./WhatsAppIcon";

const included = [
  { icon: PenTool, title: "Design exclusivo para a sua marca", text: "Nada de modelo pronto: cores, tipografia e layout pensados para o seu negócio." },
  { icon: Smartphone, title: "Site responsivo", text: "Funciona bem no celular, no tablet e no computador." },
  { icon: Rocket, title: "Rápido e preparado para o Google", text: "Carregamento leve e estrutura otimizada para ser encontrado nas buscas." },
  { icon: FileText, title: "Textos e imagens organizados com você", text: "Ajudamos a estruturar o conteúdo para apresentar bem a sua empresa." },
  { icon: Globe, title: "Publicação e configuração", text: "Cuidamos do domínio, da hospedagem e de colocar o site no ar." },
  { icon: LifeBuoy, title: "30 dias de suporte após a entrega", text: "Correção de defeitos sem custo depois da publicação." },
];

export function Included() {
  return (
    <section id="recebe" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="O que você recebe"
          title={<>Tudo o que um site profissional precisa, incluído.</>}
          description="Sem surpresas: estes itens fazem parte de todo projeto da Nexo."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {included.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="font-bold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Building2, title: "Sites institucionais", text: "Apresente sua história, serviços, diferenciais e contato em um site completo que fortalece a sua marca." },
  { icon: LayoutTemplate, title: "Landing pages", text: "Páginas focadas em um produto, serviço ou campanha, com estrutura pensada para gerar contatos e conversões." },
];

const extras = [
  { icon: RefreshCw, title: "Manutenção e atualização", text: "Textos, imagens, produtos e serviços sempre em dia." },
  { icon: Gauge, title: "Melhorias em sites existentes", text: "Desempenho, responsividade e experiência de uso." },
  { icon: Server, title: "Hospedagem e domínio", text: "Escolha, contratação e configuração de tudo." },
];

export function Services() {
  return (
    <section id="servicos" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title={<>O que podemos criar para o seu negócio.</>}
          description="Desenvolvemos sites para empresas e profissionais de diferentes segmentos, sempre adaptados à identidade e aos objetivos de cada negócio."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-10 text-2xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-sm font-bold uppercase tracking-[0.22em] text-muted-foreground">
          Também cuidamos de
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-card">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <Icon className="size-4" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-foreground">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <WhatsAppCta />
      </div>
    </section>
  );
}

const steps = [
  { title: "Primeiro contato", text: "Você manda uma mensagem no WhatsApp contando sobre o seu negócio. Sem formulário, sem compromisso.", whats: true },
  { title: "Briefing", text: "Entendemos seu negócio, público e identidade, e definimos páginas, estilo e funcionalidades." },
  { title: "Proposta por escrito", text: "Escopo, prazo e valor definidos antes de começar. Com a sua aprovação, iniciamos a produção." },
  { title: "Design e aprovação do layout", text: "Você vê e aprova o visual do site antes de qualquer programação." },
  { title: "Desenvolvimento e publicação", text: "Construímos o site com tecnologias modernas e publicamos e configuramos tudo." },
  { title: "Acompanhamento (opcional)", text: "Se quiser, seguimos juntos com manutenção e suporte contínuo.", icon: Wrench },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-night py-24 md:py-32">
      <div className="absolute inset-0 grid-glow" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          dark
          eyebrow="Como funciona"
          title={<>Do WhatsApp ao site no ar, em etapas claras.</>}
          description="Você sabe o que acontece em cada fase e aprova antes de avançarmos."
        />
        <div className="mt-20 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="relative rounded-2xl border border-night-border bg-night-elevated/70 p-6 pt-10 backdrop-blur transition-colors hover:border-primary-glow/50"
              >
                <span className="absolute -top-5 left-6 flex size-11 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">
                  {s.whats ? <WhatsAppIcon className="size-5" /> : Icon ? <Icon className="size-5" /> : String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-glow">Etapa {i + 1}</p>
                <h3 className="mt-3 text-lg font-bold text-night-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-night-muted">{s.text}</p>
              </div>
            );
          })}
        </div>
        <WhatsAppCta dark lead="O primeiro passo é uma conversa." />
      </div>
    </section>
  );
}

const commitments = [
  { icon: FileSignature, title: "Escopo, prazo e valor por escrito", text: "Você sabe exatamente o que será entregue antes de começar." },
  { icon: Eye, title: "Você aprova o layout antes", text: "Nenhuma linha de código antes de o visual estar do seu jeito." },
  { icon: ListChecks, title: "Ajustes dentro do escopo incluídos", text: "Rodadas de revisão combinadas na proposta, sem surpresas." },
  { icon: KeyRound, title: "O site é seu", text: "Código, domínio e acessos ficam em seu nome. Sem dependência da Nexo." },
  { icon: MessageCircle, title: "Linguagem simples", text: "Você não precisa entender de tecnologia para acompanhar o projeto." },
  { icon: ShieldCheck, title: "30 dias de suporte", text: "Correção de defeitos sem custo; depois, ajustes sob demanda." },
];

export function Commitments() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Nossos compromissos"
          title={<>Combinado por escrito, antes de começar.</>}
          description="Trabalhamos com regras claras que você pode cobrar."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <Icon className="size-6 text-primary" />
              <h3 className="mt-4 font-bold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
