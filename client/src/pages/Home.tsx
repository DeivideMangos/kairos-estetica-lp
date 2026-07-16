import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart, Sparkles, Droplets, Zap, Shield, Smile, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

/**
 * Kairós Estética - Landing Page Premium
 * Design: Elegância Minimalista Contemporânea
 * Tipografia: Playfair Display (display) + Lato (body)
 * Paleta: Branco Premium, Cream, Ouro Sofisticado, Verde Suave
 */

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ nome: '', whatsapp: '', horario: 'Manhã (8h - 12h)' });

  const whatsappLink = "https://wa.me/5512988980812?text=Olá%20Kairós!%20Gostaria%20de%20agendar%20uma%20avaliação%20para%20o%20Protocolo%20de%20Inverno.";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mensagem = `Olá! Meu nome é ${formData.nome}. Gostaria de agendar uma avaliação. Melhor horário: ${formData.horario}`;
    const whatsappUrl = `https://wa.me/5512988980812?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
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
            <a href="#como-funciona" className="text-sm hover:text-accent transition">Como Funciona</a>
            <a href="#contato" className="text-sm hover:text-accent transition">Contato</a>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
            Agendar
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center min-h-[600px]">
          {/* Text Content */}
          <div className="px-6 md:px-12 py-12 md:py-0 flex flex-col justify-center">
            <div className="space-y-4 md:space-y-6 animate-fade-in-up">
              <div>
                <p className="text-subtitle mb-2">PROTOCOLO FACIAL DE INVERNO</p>
                <h1 className="text-display text-5xl md:text-6xl leading-tight">
                  Cuidado facial
personalizado
para o Inverno
                </h1>
                <p className="text-2xl text-muted-foreground mt-4 font-light">
                  Sua pele sente o frio.
Seu cuidado faz toda diferença.
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                O inverno pode deixar a pele mais ressecada, sensível e sem viço.
Na Kairós, cada atendimento começa com uma avaliação individual para indicar o cuidado ideal para a sua pele, com protocolos que devolvem hidratação, luminosidade e bem-estar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 mb-[25px]">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Quero recuperar minha pele
                </a>
                <a href="#protocolo" className="btn-secondary">
                  Conhecer o Protocolo
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-full min-h-[600px] overflow-hidden">
            <img
              src="/foto1.1.jpg"
              alt="Protocolo de Inverno"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20"></div>
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

{/* Storytelling Section */}
      <section className="bg-secondary py-10 md:py-20">
        <div className="container max-w-4xl">
          <div className="space-y-8 text-center">
            <h2 className="text-display text-3xl md:text-5xl">
              Por que cuidar da pele no inverno?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Durante o inverno, a pele enfrenta desafios únicos: queda de umidade, ressecamento, alterações de temperatura e redução de luminosidade natural. É exatamente neste período que os procedimentos estéticos oferecem resultados mais visíveis e duradouros.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="space-y-3">
                <Droplets className="w-8 h-8 text-accent mx-auto" />
                <h3 className="text-display text-xl">Hidratação Profunda</h3>
                <p className="text-sm text-muted-foreground">Recupere a umidade perdida com protocolos específicos</p>
              </div>
              <div className="space-y-3">
                <Sparkles className="w-8 h-8 text-accent mx-auto" />
                <h3 className="text-display text-xl">Luminosidade</h3>
                <p className="text-sm text-muted-foreground">Restaure o brilho natural e a vitalidade da pele</p>
              </div>
              <div className="space-y-3">
                <Heart className="w-8 h-8 text-accent mx-auto" />
                <h3 className="text-display text-xl">Rejuvenescimento</h3>
                <p className="text-sm text-muted-foreground">Estimule a produção de colágeno e elastina</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocolo Section */}
      <section id="protocolo" className="py-10 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="text-display text-3xl md:text-5xl text-center mb-4">
            O Protocolo de Inverno
          </h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12">
            Um programa completo e personalizado para transformar sua pele
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:p-8">
            <Card className="p-5 md:p-8 border-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-display text-2xl mb-4">Como Funciona</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">1.</span>
                  <div>
                    <p className="font-semibold">Avaliação Personalizada</p>
                    <p className="text-sm text-muted-foreground">Análise completa da sua pele e necessidades</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">2.</span>
                  <div>
                    <p className="font-semibold">Procedimento Específico</p>
                    <p className="text-sm text-muted-foreground">Tratamento customizado para seu tipo de pele</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">3.</span>
                  <div>
                    <p className="font-semibold">Cuidados Contínuos</p>
                    <p className="text-sm text-muted-foreground">Orientações e produtos para manutenção</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">4.</span>
                  <div>
                    <p className="font-semibold">Resultados Visíveis</p>
                    <p className="text-sm text-muted-foreground">Transformação gradual e duradoura</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-5 md:p-8 border-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-display text-2xl mb-4">Para Quem é Indicado</h3>
              <p className="text-muted-foreground mb-6">
                O Protocolo de Inverno é ideal para quem busca:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Renovação completa da pele</span>
                </li>
                <li className="flex gap-2">
                  <Droplets className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Hidratação profunda</span>
                </li>
                <li className="flex gap-2">
                  <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Restauração de luminosidade</span>
                </li>
                <li className="flex gap-2">
                  <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Proteção e fortalecimento</span>
                </li>
                <li className="flex gap-2">
                  <Smile className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Autoestima e bem-estar</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="bg-secondary py-10 md:py-20">
        <div className="container">
          <h2 className="text-display text-3xl md:text-5xl text-center mb-8 md:mb-12">
            Benefícios do Protocolo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: "Pele Renovada", desc: "Textura mais suave e uniforme" },
              { icon: Droplets, title: "Mais Luminosidade", desc: "Brilho natural restaurado" },
              { icon: Heart, title: "Hidratação Profunda", desc: "Pele mais macia e elástica" },
              { icon: Zap, title: "Rejuvenescimento", desc: "Redução de linhas de expressão" },
              { icon: Shield, title: "Uniformização", desc: "Tom de pele mais homogêneo" },
              { icon: Smile, title: "Autoestima", desc: "Bem-estar e confiança" },
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <benefit.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-display text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco de Investimento */}
      <section className="py-10 md:py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container max-w-3xl">
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
            <div className="space-y-4 text-muted-foreground max-w-2xl mx-auto">
              <p>
                A Limpeza de Pele com Peeling de Diamante da Kairós foi pensada para promover renovação, hidratação e sensação de leveza para a sua pele durante os dias mais frios.
              </p>
              <p>
                Atendimento personalizado, ambiente acolhedor e cuidado individualizado em cada detalhe.
              </p>
            </div>

            {/* Separador elegante */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-accent opacity-40"></div>
              <Sparkles className="w-5 h-5 text-accent opacity-40" />
              <div className="h-px w-12 bg-accent opacity-40"></div>
            </div>

            {/* Valor */}
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Limpeza de Pele + Peeling de Diamante (quando indicado)</p>
              <p className="text-5xl md:text-6xl text-accent font-light tracking-wide">
                R$ 169,90
              </p>
            </div>

            {/* CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-lg"
            >
              👉 Quero agendar minha avaliação
            </a>
          </div>
        </div>
      </section>

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
            Resultados Reais
          </h3>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Mais do que estética, resultados que fortalecem a autoestima e promovem saúde para a pele.
          </p>

  <img
    src="/antesedepois.jpg"
    alt="Antes e depois de limpeza de pele"
    className="block w-full max-w-sm md:max-w-lg mx-auto rounded-2xl shadow-lg"
  />

          <div className="mt-8">
            <h4 className="text-display text-2xl mb-4">
              Limpeza de Pele Profissional
            </h4>

            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Resultado real após protocolo personalizado de limpeza de pele,
              promovendo redução da oleosidade, remoção de impurezas e melhora
              visível da textura e aparência da pele.
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
                <p className="text-subtitle mb-2">Quem é a Kairós</p>
                <h2 className="text-display text-3xl md:text-5xl">
                  Meu nome é Rosana Sales.
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Atuo com atendimento personalizado e humanizado, valorizando o cuidado individual de cada pele e cada cliente.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Acredito em uma estética mais leve, consciente e natural. Meu objetivo é proporcionar não apenas resultados visíveis, mas também um momento de cuidado, bem-estar e reconexão com sua autoestima.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada cliente é único, e cada pele merece um protocolo pensado especialmente para suas necessidades.
              </p>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block mt-4">
                👉 Conhecer Melhor
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
      Resultados Reais
    </h2>
    <p className="text-center text-muted-foreground mb-8 md:mb-12">
      Veja a transformação que o Protocolo de Inverno proporciona
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
                ✨ Quero receber atendimento
              </button>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary py-10 md:py-20">
        <div className="container max-w-3xl">
          <h2 className="text-display text-3xl md:text-5xl text-center mb-8 md:mb-12">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Quanto tempo dura cada sessão?",
                a: "Cada sessão do Protocolo de Inverno dura em média 60 a 90 minutos, dependendo dos procedimentos realizados."
              },
              {
                q: "Dói durante o procedimento?",
                a: "Utilizamos técnicas e produtos que garantem conforto total."
              },
              {
                q: "Existe período de recuperação?",
                a: "Mínimo. Você pode retomar suas atividades normais imediatamente. Alguns procedimentos podem deixar a pele levemente avermelhada por poucas horas."
              },
              {
                q: "Quem pode fazer o protocolo?",
                a: "Praticamente todos. Durante a avaliação, analisamos seu tipo de pele e histórico para personalizar o tratamento."
              },
              {
                q: "Quantas sessões são necessárias?",
                a: "Recomendamos um ciclo de 4 a 6 sessões para resultados ótimos, com intervalos de 2 a 3 semanas entre elas."
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
                  <p className="text-muted-foreground mt-4">{faq.a}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

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
              <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-display text-lg mb-2">Localização</h3>
              <p className="text-sm text-muted-foreground">
                São José dos Campos, SP<br />
                <span className="text-xs">Endereço completo fornecido ao agendar</span>
              </p>
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
              >
                Envie uma mensagem
              </a>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg">
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
                <li><a href="#protocolo" className="hover:text-accent transition">Protocolo</a></li>
                <li><a href="#beneficios" className="hover:text-accent transition">Benefícios</a></li>
                <li><a href="#como-funciona" className="hover:text-accent transition">Como Funciona</a></li>
                <li><a href="#contato" className="hover:text-accent transition">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-display text-sm font-semibold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://instagram.com/kairosestetica.sjc" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">Instagram</a></li>
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">WhatsApp</a></li>
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
