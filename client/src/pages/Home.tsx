import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart, Sparkles, Droplets, Zap, Shield, Smile, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

/**
 * Kairós Estética - Landing Page Premium
 * Design: Elegância Minimalista Contemporânea
 * Tipografia: Playfair Display (display) + Lato (body)
 * Paleta: Branco Premium, Cream, Ouro Sofisticado, Verde Suave
 */

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    horario: "Manhã (8h - 12h)",
  });

  const whatsappLink =
    "https://wa.me/5512988980812?text=Olá%20Kairós!%20Gostaria%20de%20agendar%20uma%20avaliação%20para%20o%20Protocolo%20de%20Inverno.";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensagem = `Olá, Kairós!

Meu nome é ${formData.nome}.

Meu WhatsApp é: ${formData.whatsapp}.

Gostaria de agendar uma avaliação para o Protocolo Pele Renovada de Inverno.

Melhor horário para contato: ${formData.horario}.`;

    // Dispara os eventos do Meta Pixel
    if (typeof window.fbq !== "undefined") {
      window.fbq("track", "Contact");
      window.fbq("track", "Lead", {});
    }

    const whatsappUrl = `https://wa.me/5512988980812?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/fotoclinica.png" alt="Kairós" className="h-10 w-10" />
            <span className="text-2xl font-bold text-display text-accent">Kairós</span>
          </div>
          <nav className="hidden md:flex items-center gap-5 md:p-8">
            <a href="#protocolo" className="text-sm hover:text-accent transition">Protocolo</a>
            <a href="#beneficios" className="text-sm hover:text-accent transition">Benefícios</a>
            <a href="#contato" className="text-sm hover:text-accent transition">Contato</a>
          </nav>
          <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary text-sm"
  onClick={() => {
    if (typeof window.fbq !== "undefined") {
      window.fbq("track", "Contact");
      window.fbq("track", "Lead", {});
    }
  }}
>
  Agendar
</a>
        </div>
      </header>

      {/* Hero Section */}
<section className="relative overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center min-h-[600px]">
    {/* Text Content */}
    <div className="px-6 md:px-12 py-12 md:py-0 flex flex-col justify-center">
      <div className="space-y-6 animate-fade-in-up">

        <div>
          <p className="text-subtitle mb-2">
            PROTOCOLO PELE RENOVADA DE INVERNO
          </p>

          <h1 className="text-display text-5xl md:text-6xl leading-tight">
            Sua pele sente o inverno.
            <br />
            Mas você não precisa sentir os efeitos dele.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mt-5 font-light leading-relaxed">
            Um protocolo completo para renovar, hidratar e devolver o viço da sua pele nos dias mais frios.
          </p>
        </div>

        {/* Benefícios rápidos */}
        <div className="grid grid-cols-2 gap-4 max-w-xl pt-2">

          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm">
              Mais viço e luminosidade
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-accent" />
            <span className="text-sm">
              Hidratação profunda
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-accent" />
            <span className="text-sm">
              Pele mais macia e saudável
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Smile className="w-5 h-5 text-accent" />
            <span className="text-sm">
              Menos aparência de pele cansada
            </span>
          </div>

        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={() => {
              if (typeof window.fbq !== "undefined") {
                window.fbq("track", "Contact");
                window.fbq("track", "Lead", {});
              }
            }}
          >
            Quero recuperar minha pele
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            onClick={() => {
              if (typeof window.fbq !== "undefined") {
                window.fbq("track", "Contact");
                window.fbq("track", "Lead", {});
              }
            }}
          >
            Falar no WhatsApp
          </a>

        </div>

      </div>
    </div>

    

    {/* Hero Image */}
    <div className="relative h-full min-h-[600px] overflow-hidden">
      <img
        src="/foto1.1.jpg"
        alt="Protocolo Pele Renovada de Inverno"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20"></div>
    </div>
  </div>
</section>

      {/* Divider */}
<div className="h-px bg-gradient-to-r from-background via-border to-background"></div>

{/* Você também se identifica? */}
<section className="py-12 md:py-20 bg-background">
  <div className="container max-w-6xl">

    <div className="text-center mb-12">
      <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">
        VOCÊ TAMBÉM SE IDENTIFICA?
      </span>

      <h2 className="text-display text-3xl md:text-5xl mt-3 mb-4">
        O frio intensifica problemas que muitas mulheres percebem todos os dias.
      </h2>

      <p className="text-muted-foreground max-w-3xl mx-auto">
        Durante o inverno, é comum que a pele fique mais sensível, ressecada e sem
        luminosidade. Veja se você se identifica com alguma dessas situações:
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="flex items-start gap-3 p-5 rounded-xl border border-border">
        <CheckCircle className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
        <p>Pele mais ressecada, áspera e sem viço.</p>
      </div>

      <div className="flex items-start gap-3 p-5 rounded-xl border border-border">
        <CheckCircle className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
        <p>Sensação de pele cansada mesmo após descansar.</p>
      </div>

      <div className="flex items-start gap-3 p-5 rounded-xl border border-border">
        <CheckCircle className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
        <p>Linhas finas mais evidentes durante os dias frios.</p>
      </div>

      <div className="flex items-start gap-3 p-5 rounded-xl border border-border">
        <CheckCircle className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
        <p>Poros mais aparentes e textura irregular.</p>
      </div>

      <div className="flex items-start gap-3 p-5 rounded-xl border border-border">
        <CheckCircle className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
        <p>Maquiagem que não assenta como antes.</p>
      </div>

      <div className="flex items-start gap-3 p-5 rounded-xl border border-border">
        <CheckCircle className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
        <p>Pele sensível, repuxando ou com vermelhidão.</p>
      </div>

    </div>

  </div>
</section>

      {/* Divider */}
<div className="h-px bg-gradient-to-r from-background via-border to-background"></div>


{/* Por que sua pele muda no inverno */}
<section className="bg-secondary py-10 md:py-20">
  <div className="container max-w-5xl">
    <div className="space-y-8 text-center">
      <h2 className="text-display text-3xl md:text-5xl">
        Por que sua pele muda no inverno?
      </h2>

      <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
        As baixas temperaturas, o vento frio e os banhos quentes reduzem a
        hidratação natural da pele, deixando-a mais sensível, opaca e sem vida.
      </p>

      <div className="bg-white rounded-2xl shadow-lg border border-accent/20 p-8 max-w-2xl mx-auto">
        <h3 className="text-display text-2xl text-primary">
          Cuidar da pele no inverno não é luxo.
          <br />
          É necessidade.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="space-y-3">
          <Droplets className="w-8 h-8 text-accent mx-auto" />
          <h3 className="text-display text-xl">
            Hidratação Profunda
          </h3>
          <p className="text-sm text-muted-foreground">
            Recupera a hidratação natural da pele, reduzindo o ressecamento.
          </p>
        </div>

        <div className="space-y-3">
          <Sparkles className="w-8 h-8 text-accent mx-auto" />
          <h3 className="text-display text-xl">
            Mais Viço e Luminosidade
          </h3>
          <p className="text-sm text-muted-foreground">
            Devolve o brilho natural e a aparência saudável da pele.
          </p>
        </div>

        <div className="space-y-3">
          <Heart className="w-8 h-8 text-accent mx-auto" />
          <h3 className="text-display text-xl">
            Pele Mais Macia e Saudável
          </h3>
          <p className="text-sm text-muted-foreground">
            Fortalece a barreira de proteção e melhora a textura da pele.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Protocolo Pele Renovada de Inverno */}
<section id="protocolo" className="py-10 md:py-20">
  <div className="container max-w-4xl">

    <div className="text-center mb-12">
      <h2 className="text-display text-3xl md:text-5xl mb-4">
        A boa notícia
      </h2>

      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
        Tem solução e pode ser mais simples do que você imagina.
      </p>

      <p className="text-lg leading-relaxed max-w-3xl mx-auto">
        Nosso <strong>Protocolo Pele Renovada de Inverno</strong> combina
        tecnologia, ativos de alta performance e um atendimento totalmente
        personalizado para devolver à pele aquilo que o inverno costuma retirar:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
        <div className="bg-secondary rounded-xl p-4">
          <Droplets className="w-8 h-8 text-accent mx-auto mb-2" />
          <p className="font-semibold">Hidratação</p>
        </div>

        <div className="bg-secondary rounded-xl p-4">
          <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
          <p className="font-semibold">Equilíbrio</p>
        </div>

        <div className="bg-secondary rounded-xl p-4">
          <Sparkles className="w-8 h-8 text-accent mx-auto mb-2" />
          <p className="font-semibold">Luminosidade</p>
        </div>

        <div className="bg-secondary rounded-xl p-4">
          <Heart className="w-8 h-8 text-accent mx-auto mb-2" />
          <p className="font-semibold">Aparência saudável</p>
        </div>
      </div>

<Button
  size="lg"
  className="mt-10"
  onClick={() => {
    if (typeof window.fbq !== "undefined") {
      window.fbq("track", "Contact");
      window.fbq("track", "Lead", {});
    }

    window.open(whatsappLink, "_blank");
  }}
>
  Quero conhecer meu protocolo
</Button>
    </div>

    <h2 className="text-display text-3xl md:text-5xl text-center mb-4">
      Protocolo Pele Renovada de Inverno
    </h2>

    <p className="text-center text-muted-foreground mb-8 md:mb-12">
      Um protocolo completo, personalizado e pensado para renovar, hidratar e devolver o viço natural da sua pele durante o inverno.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:p-8">

      <Card className="p-5 md:p-8 border-border shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-display text-2xl mb-4">
          Como funciona
        </h3>

        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-accent font-bold">1.</span>
            <div>
              <p className="font-semibold">Avaliação personalizada</p>
              <p className="text-sm text-muted-foreground">
                Entendemos as necessidades da sua pele antes de iniciar qualquer procedimento.
              </p>
            </div>
          </li>

          <li className="flex gap-3">
            <span className="text-accent font-bold">2.</span>
            <div>
              <p className="font-semibold">Protocolo personalizado</p>
              <p className="text-sm text-muted-foreground">
                Selecionamos os procedimentos ideais para proporcionar os melhores resultados.
              </p>
            </div>
          </li>

          <li className="flex gap-3">
            <span className="text-accent font-bold">3.</span>
            <div>
              <p className="font-semibold">Tecnologia e ativos premium</p>
              <p className="text-sm text-muted-foreground">
                Utilizamos produtos e técnicas que potencializam a renovação da pele.
              </p>
            </div>
          </li>

          <li className="flex gap-3">
            <span className="text-accent font-bold">4.</span>
            <div>
              <p className="font-semibold">Resultados naturais</p>
              <p className="text-sm text-muted-foreground">
                Pele mais hidratada, luminosa e saudável desde as primeiras sessões.
              </p>
            </div>
          </li>
        </ul>
      </Card>

      <Card className="p-5 md:p-8 border-border shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-display text-2xl mb-4">
          Ideal para quem deseja
        </h3>

        <ul className="space-y-3">
          <li className="flex gap-2">
            <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span>Renovar completamente a pele</span>
          </li>

          <li className="flex gap-2">
            <Droplets className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span>Recuperar a hidratação natural</span>
          </li>

          <li className="flex gap-2">
            <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span>Devolver viço e luminosidade</span>
          </li>

          <li className="flex gap-2">
            <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span>Fortalecer a barreira da pele</span>
          </li>

          <li className="flex gap-2">
            <Smile className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span>Recuperar a autoestima e o bem-estar</span>
          </li>
        </ul>
      </Card>

    </div>
  </div>
</section>


{/* Benefícios */}
<section id="beneficios" className="bg-secondary py-10 md:py-20">
  <div className="container max-w-5xl">
    <h2 className="text-display text-3xl md:text-5xl text-center mb-4">
      Benefícios que você vê e sente
    </h2>

    <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
      Resultados reais para sua rotina e autoestima.
    </p>

    <Card className="p-6 md:p-10 border-border shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {[
          { icon: Sparkles, title: "Pele Renovada", desc: "Textura mais suave e uniforme." },
          { icon: Droplets, title: "Mais Luminosidade", desc: "Brilho natural restaurado." },
          { icon: Heart, title: "Hidratação Profunda", desc: "Pele mais macia e saudável." },
          { icon: Zap, title: "Rejuvenescimento", desc: "Redução da aparência de linhas finas." },
          { icon: Shield, title: "Uniformização", desc: "Tom da pele mais homogêneo." },
          { icon: Smile, title: "Mais Autoestima", desc: "Sinta-se mais confiante todos os dias." },
        ].map((benefit, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <benefit.icon className="w-9 h-9 text-accent" />
            </div>

            <div>
              <h3 className="text-display text-lg mb-1">
                {benefit.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {benefit.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </Card>
  </div>
</section>

      {/* Bloco de Investimento */}
<section className="py-10 md:py-20 bg-gradient-to-b from-background to-secondary/30">
  <div className="container max-w-5xl">
    <div className="text-center space-y-8">

      {/* Ícone decorativo */}
      <div className="flex justify-center">
        <Sparkles className="w-12 h-12 text-accent opacity-60" />
      </div>

      {/* Título */}
      <h2 className="text-display text-3xl md:text-5xl">
        Um momento de cuidado para sua pele neste inverno.
      </h2>

      {/* Descrição */}
      <div className="space-y-4 text-muted-foreground max-w-3xl mx-auto">
        <p>
          O <strong>Protocolo Pele Renovada de Inverno</strong> reúne limpeza de
          pele, peeling de diamante (quando indicado) e cuidados personalizados
          para renovar, hidratar e devolver o viço natural da pele.
        </p>

        <p>
          Atendimento individual, ambiente acolhedor e avaliação personalizada
          para indicar o protocolo ideal para a sua pele.
        </p>
      </div>

      {/* Oferta + Benefícios */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Oferta */}
        <div className="space-y-3">

          <p className="text-muted-foreground text-lg">
            De
          </p>

          <p className="text-2xl text-muted-foreground line-through">
            R$ 229,90
          </p>

          <p className="text-muted-foreground text-lg">
            Por
          </p>

          <p className="text-5xl md:text-6xl text-accent font-bold">
            R$ 179,90
          </p>

          <p className="text-base font-medium text-accent">
            Avaliação personalizada inclusa.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block text-lg mt-6"
            onClick={() => {
              if (typeof window.fbq !== "undefined") {
                window.fbq("track", "Contact");
                window.fbq("track", "Lead", {});
              }
            }}
          >
            👉 Quero agendar minha avaliação
          </a>

        </div>

        {/* Benefícios */}
        <div className="space-y-5 flex flex-col items-center md:items-start">

          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span>Vagas limitadas por dia</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span>Atendimento individual</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span>Ambiente exclusivo</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span>Tecnologia e ativos premium</span>
          </div>

        </div>

      </div>

    </div>
  </div>
</section>

      {/* Divider */}
<div className="h-px bg-gradient-to-r from-background via-border to-background"></div>

      {/* Procedimentos Section */}
<section id="como-funciona" className="py-10 md:py-20">
  <div className="container max-w-5xl">
    <h2 className="text-display text-3xl md:text-5xl text-center mb-4">
      Conheça a Experiência Kairós
    </h2>

    <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto">
      Um ambiente preparado para oferecer conforto, acolhimento e tratamentos
      personalizados para cada necessidade da sua pele.
    </p>

    <div className="space-y-4 md:space-y-6">

      {[
        {
          title: "Recepção Aconchegante",
          desc: "Um ambiente preparado para receber você com conforto, tranquilidade e cuidado desde o primeiro momento.",
          image: "/entrada.png"
        },
        {
          title: "Sala de Atendimento",
          desc: "Espaço reservado e preparado para proporcionar um atendimento personalizado e humanizado.",
          image: "/fotoambiente.png"
        },
        {
          title: "Estrutura Premium",
          desc: "Cada detalhe foi pensado para proporcionar bem-estar, segurança e uma experiência única.",
          image: "/ambiente1.png"
        },
      ].map((proc, idx) => (
        <Card
          key={idx}
          className="overflow-hidden border-border shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-5 md:p-8 flex flex-col justify-center">
              <h3 className="text-display text-2xl mb-3">{proc.title}</h3>
              <p className="text-muted-foreground text-lg">{proc.desc}</p>
            </div>

            <div className="h-48 md:h-auto overflow-hidden">
              <img
                src={proc.image}
                alt={proc.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </Card>
      ))}

      {/* Resultado Real */}
      <Card className="overflow-hidden border-border shadow-lg">
        <div className="p-5 md:p-8 text-center">
          <h3 className="text-display text-3xl mb-4">
            Resultados reais. Pessoas reais.
          </h3>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Nosso protocolo respeita a individualidade de cada paciente e busca resultados naturais e saudáveis.
          </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">

  <img
    src="/antesedepois2.jpg"
    alt="Antes e depois - Pele Jovem"
    className="w-full max-w-md h-[300px] object-cover rounded-2xl shadow-lg"
  />

  <img
    src="/antesedepois.jpeg"
    alt="Antes e depois - Pele Madura"
    className="w-full max-w-md h-[300px] object-cover rounded-2xl shadow-lg bg-white"
  />

</div>

          <div className="mt-8">
            <h4 className="text-display text-2xl mb-4">
              Protocolo Pele Renovada de Inverno
            </h4>

            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Cada pele tem sua história. Nosso protocolo respeita a individualidade de cada paciente e busca resultados naturais e saudáveis.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="px-4 py-2 rounded-full bg-secondary text-sm">
                ✨ Redução da oleosidade
              </span>

              <span className="px-4 py-2 rounded-full bg-secondary text-sm">
                ✨ Pele mais uniforme
              </span>

              <span className="px-4 py-2 rounded-full bg-secondary text-sm">
                ✨ Menos impurezas
              </span>

              <span className="px-4 py-2 rounded-full bg-secondary text-sm">
                ✨ Mais autoestima
              </span>
            </div>
          </div>
        </div>
      </Card>

    </div>
  </div>
</section>
      {/* Divider */}
<div className="h-px bg-gradient-to-r from-background via-border to-background"></div>

{/* Video Institucional */}
<section className="py-20 bg-background">
  <div className="container max-w-5xl">

    <div className="text-center mb-10">
      <p className="text-subtitle mb-2">CONHEÇA A KAIRÓS</p>

      <h2 className="text-display text-3xl md:text-5xl mb-4">
        Mais que estética,
        uma experiência de cuidado.
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        Conheça nosso espaço, nossa estrutura e o ambiente preparado
        para proporcionar conforto, acolhimento e resultados reais.
      </p>
    </div>

    <div className="overflow-hidden rounded-3xl shadow-2xl">
      <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="w-full h-auto object-cover rounded-3xl"
>
        <source src="/clinica.mp4" type="video/mp4" />
      </video>
    </div>

  </div>
</section>
      {/* Divider */}
<div className="h-px bg-gradient-to-r from-background via-border to-background"></div>

      {/* Seção Sobre a Profissional */}
      <section className="py-10 md:py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Foto */}
            <div className="order-2 md:order-1">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="foto1.1.jpg"
                  alt="Rosana Sales"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="order-1 md:order-2 space-y-4 md:space-y-6">
              <div>
                <p className="text-subtitle mb-2">Quem cuida de você</p>
                <h2 className="text-display text-3xl md:text-5xl">
                  Meu nome é Rosana Sales.
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha missão é ajudar mulheres a recuperarem a confiança ao olhar no espelho através de um cuidado personalizado, seguro e acolhedor.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada atendimento é realizado de forma individualizada, respeitando as necessidades da sua pele para proporcionar resultados naturais e duradouros.
              </p>

              <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary inline-block mt-4"
  onClick={() => {
    if (typeof window.fbq !== "undefined") {
      window.fbq("track", "Contact");
      window.fbq("track", "Lead", {});
    }
  }}
>
  👉 Quero agendar minha avaliação
</a>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria Antes e Depois */}
      {/*
<section className="py-10 md:py-20 bg-secondary">
  <div className="container max-w-5xl">
    <h2 className="text-display text-3xl md:text-5xl text-center mb-4">
      Resultados reais. Pessoas reais.
    </h2>
    <p className="text-center text-muted-foreground mb-8 md:mb-12">
      Veja a transformação que o Protocolo Pele Renovada de Inverno proporciona
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Pele Iluminada",
          desc: "Renovação completa com brilho restaurado",
          image: "/foto1.webp"
        },
        {
          title: "Textura Refinada",
          desc: "Suavidade e uniformidade visível",
          image: "/foto2.webp"
        },
        {
          title: "Hidratação Profunda",
          desc: "Pele mais macia e elástica",
          image: "/foto1.webp"
        },
      ].map((result, idx) => (
        <Card key={idx} className="overflow-hidden border-border shadow-sm hover:shadow-lg transition-all">
          <div className="h-64 overflow-hidden">
            <img
              src={result.image}
              alt={result.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-display text-lg mb-2">{result.title}</h3>
            <p className="text-sm text-muted-foreground">{result.desc}</p>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>
*/}

      {/* Formulário de Contato */}
      <section className="py-10 md:py-20">
        <div className="container max-w-2xl">
          <h2 className="text-display text-3xl md:text-5xl text-center mb-4">
            Prefere que a gente entre em contato?
          </h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12">
            Deixe seus dados e entraremos em contato em breve
          </p>

          <Card className="p-5 md:p-8 border-border">
            <form className="space-y-4 md:space-y-6" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">Nome completo</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">WhatsApp</label>
                <input
                  type="tel"
                  placeholder="(12) 9 9999-9999"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Melhor horário para contato</label>
                <select
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  value={formData.horario}
                  onChange={(e) => setFormData({...formData, horario: e.target.value})}
                >
                  <option>Manhã (8h - 12h)</option>
                  <option>Tarde (12h - 18h)</option>
                  <option>Noite (18h - 21h)</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-lg"
              >
                ✨ Quero ser atendida
              </button>
            </form>
          </Card>
        </div>
      </section>

      <div className="space-y-4">
  {[
    {
      q: "O protocolo é doloroso?",
      a: "Não. O atendimento é realizado de forma confortável e personalizada, respeitando a sensibilidade da sua pele."
    },
    {
      q: "Quanto tempo dura o atendimento?",
      a: "Em média, cerca de 2 horas. Cada etapa é realizada com calma para garantir um resultado de alta qualidade."
    },
    {
      q: "Tenho mais de 50 anos. Esse protocolo é indicado para mim?",
      a: "Sim. A avaliação inicial permite adaptar o protocolo às necessidades da pele madura."
    },
    {
      q: "Em quanto tempo vejo resultados?",
      a: "A pele costuma apresentar mais luminosidade, maciez e sensação de hidratação logo após o procedimento. Os resultados variam conforme cada pele."
    },
    {
      q: "Posso fazer mesmo tendo pele sensível?",
      a: "Sim, desde que não exista contraindicação identificada na avaliação. O  é personalizado para cada paciente."
    },
    {
      q: "O valor inclui avaliação?",
      a: "Sim. A avaliação personalizada já está incluída no atendimento."
    },
  ].map((faq, idx) => (
    <Card
      key={idx}
      className="p-6 border-border cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
    >
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-display text-lg flex-1">{faq.q}</h3>
        <span className="text-accent text-xl flex-shrink-0">
          {expandedFaq === idx ? "−" : "+"}
        </span>
      </div>

      {expandedFaq === idx && (
        <p className="text-muted-foreground mt-4 leading-relaxed">
          {faq.a}
        </p>
      )}
    </Card>
  ))}
</div>

      {/* Contato Section */}
      <section id="contato" className="py-10 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="text-display text-3xl md:text-5xl text-center mb-4">
            Entre em Contato
          </h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12">
            Estamos prontos para transformar sua pele
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:p-8">
            <Card className="p-5 md:p-8 border-border text-center">
  <a
    href="https://www.google.com/maps/search/?api=1&query=Rua+Juiz+David+Barrilli,+304+-+Parque+Res.+Aquarius,+São+José+dos+Campos+-+SP,+12246-200"
    target="_blank"
    rel="noopener noreferrer"
    className="group"
  >
    <MapPin className="w-10 h-10 text-accent mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />

    <h3 className="text-display text-lg mb-2 group-hover:text-accent transition-colors">
      Localização
    </h3>

    <p className="text-muted-foreground group-hover:text-accent transition-colors leading-relaxed">
      Aquarius -<br />
      São José dos Campos - SP
    </p>
  </a>
</Card>

            <Card className="p-5 md:p-8 border-border text-center">
              <Phone className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-display text-lg mb-2">Telefone</h3>
              <p className="text-sm text-muted-foreground">
                <a href="tel:+5512991878809" className="hover:text-accent transition">
                  (12) 98898-0812
                </a>
              </p>
            </Card>

            <Card className="p-5 md:p-8 border-border text-center">
              <Mail className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-display text-lg mb-2">WhatsApp</h3>
              <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-accent hover:underline"
  onClick={() => {
    if (typeof window.fbq !== "undefined") {
      window.fbq("track", "Contact");
      window.fbq("track", "Lead", {});
    }
  }}
>
  Envie uma mensagem
</a>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary text-lg"
  onClick={() => {
    if (typeof window.fbq !== "undefined") {
      window.fbq("track", "Contact");
      window.fbq("track", "Lead", {});
    }
  }}
>
  Quero Agendar Minha Avaliação
</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:p-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/fotoclinica.png" alt="Kairós" className="h-8 w-8" />
                <span className="text-lg font-bold text-display text-accent">Kairós</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transformando vidas através da beleza e do cuidado.
              </p>
            </div>

            <div>
              <h4 className="text-display text-sm font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">Protocolo</a></li>
                <li><a href="#beneficios" className="hover:text-accent transition">Benefícios</a></li>
                <li><a href="#contato" className="hover:text-accent transition">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-display text-sm font-semibold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://instagram.com/kairosestetica.sjc" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">Instagram</a></li>
                <li>
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-accent transition"
    onClick={() => {
      if (typeof window.fbq !== "undefined") {
        window.fbq("track", "Contact");
        window.fbq("track", "Lead", {});
      }
    }}
  >
    WhatsApp
  </a>
</li>
                <li><a href="https://www.facebook.com/share/1BErqGoA1N/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">Facebook</a></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-sm text-muted-foreground space-y-4">
            <p>&copy; 2026 Kairós Estética. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a href="/privacy" className="hover:text-accent transition">Política de Privacidade</a>
              <a href="/lgpd" className="hover:text-accent transition">LGPD</a>
              <a href="/terms" className="hover:text-accent transition">Termos de Uso</a>
            </div>
            <p>Desenvolvido com elegância e sofisticação por <a href="https://strikeweb0.netlify.app" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Strike Web</a></p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
<a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-whatsapp"
  title="Abrir WhatsApp"
  onClick={() => {
  if (typeof window.fbq !== "undefined") {
    window.fbq("track", "Contact");
    window.fbq("track", "Lead", {});
  }
}}
      >
        <img
  src="/whatsapp.png"
  alt="WhatsApp"
  className="w-6 h-6"
/>
      </a>
    </div>
  );
}
