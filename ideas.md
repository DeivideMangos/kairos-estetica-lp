# Kairós Estética - Estratégia de Design

## Referência Inspiradora
Landing Page Premium para clínica de estética de alto padrão em São José dos Campos, focada no Protocolo de Inverno. Deve superar em qualidade visual e experiência do usuário referências como Royal Face, Espaçolaser e grandes clínicas estéticas do Brasil.

---

## Design Escolhido: "Elegância Minimalista Contemporânea"

### Design Movement
**Minimalist Luxury** — Inspirado em design editorial de alta moda e clínicas de luxo contemporâneas. Combina simplicidade extrema com sofisticação, usando espaço em branco generoso, tipografia refinada e elementos visuais cuidadosamente selecionados.

### Core Principles

1. **Espaço em Branco Estratégico**: Cada elemento respira. O vazio é tão importante quanto o preenchimento. Cria sensação de calma, confiança e exclusividade.

2. **Tipografia Hierárquica Refinada**: Uso de fontes sofisticadas com pesos variados. Display elegante para títulos, corpo limpo e legível para conteúdo.

3. **Paleta Restrita e Intencional**: Cores neutras como base (branco, cream, cinza claro) com acentos em ouro/dourado e toques de verde suave. Cada cor tem propósito.

4. **Profundidade Sutil**: Sombras delicadas, gradientes imperceptíveis e micro-animações que criam dimensão sem poluição visual.

### Color Philosophy

| Cor | Valor | Propósito |
|-----|-------|----------|
| **Branco Premium** | `#FAFAF8` | Fundo principal, transmite limpeza e luxo |
| **Cream/Bege** | `#F5F1ED` | Seções alternadas, suavidade |
| **Ouro Sofisticado** | `#D4AF6A` | Acentos, botões, elementos premium |
| **Verde Suave** | `#8B9B7A` | Acentos secundários, natureza/cuidado |
| **Cinza Escuro** | `#2C2C2C` | Texto principal, contraste |
| **Cinza Claro** | `#E8E8E6` | Divisores, bordas sutis |

**Filosofia**: A paleta evoca luxo, confiança e natureza. Ouro sugere sofisticação e valor. Verde conecta ao bem-estar e cuidado natural. Neutros permitem que o conteúdo (fotos, procedimentos) seja o protagonista.

### Layout Paradigm

**Assimétrico com Ritmo Fluido** — Não é um grid centrado genérico. Cada seção tem um ritmo visual único:
- Hero: Imagem impactante à direita, texto/CTA à esquerda
- Storytelling: Texto fluido com imagens intercaladas em diferentes tamanhos
- Procedimentos: Cards em layout escalonado, não em grid uniforme
- Seções alternadas: Fundo branco ↔ fundo cream, criando movimento visual

### Signature Elements

1. **Divisor Orgânico com Onda Suave**: Transições entre seções usando SVG waves elegantes, não retas. Cria fluidez.

2. **Ícones Minimalistas Customizados**: Ícones simples, traço fino, alinhados com a estética. Não usar ícones genéricos.

3. **Cartões Flutuantes com Sombra Elevada**: Cards com sombra sutil (não planos), bordas levemente arredondadas, espaçamento generoso interno.

### Interaction Philosophy

- **Hover Elegante**: Botões e cards ganham sombra mais profunda, cor muda sutilmente. Nunca escala agressiva.
- **Scroll Fluido**: Parallax suave em imagens de fundo, não exagerado.
- **Micro-animações**: Elementos entram com fade + slide suave (200-300ms). Respeita `prefers-reduced-motion`.
- **Feedback Imediato**: Botões de WhatsApp sempre acessíveis, mudam cor ao hover, som visual de clique.

### Animation Guidelines

- **Entrance**: Fade + slide de baixo (200ms, ease-out)
- **Hover**: Sombra aumenta, cor muda (150ms)
- **CTA Buttons**: Scale 0.98 ao clicar, feedback tátil (100ms)
- **Scroll Reveal**: Elementos aparecem conforme scroll, sem ser óbvio
- **Transições entre seções**: Fade suave, não abrupto

### Typography System

| Elemento | Fonte | Peso | Tamanho |
|----------|-------|------|---------|
| **Logo/Marca** | Playfair Display | 700 | 32px |
| **Títulos H1** | Playfair Display | 600 | 48-56px |
| **Títulos H2** | Playfair Display | 600 | 36-42px |
| **Subtítulos** | Lato | 300 | 18-20px |
| **Corpo** | Lato | 400 | 16px |
| **Pequeno** | Lato | 400 | 14px |
| **Botões** | Lato | 600 | 16px |

**Pairing**: Playfair Display (elegante, editorial) + Lato (moderno, legível). Contraste claro entre display e corpo.

### Brand Essence

**Posicionamento**: Kairós é a clínica estética premium que transforma a pele com ciência, elegância e cuidado personalizado. Para mulheres que entendem que beleza é um investimento em si mesmas.

**Personalidade**: Sofisticada, confiável, inovadora.

### Brand Voice

**Tone**: Elegante mas acessível. Educativa mas não técnica demais. Inspiradora mas autêntica.

**Exemplos de Microcopy**:
- ✅ "Sua pele merece mais que cuidado. Merece transformação."
- ✅ "Inverno é a melhor estação para renovar sua pele."
- ❌ "Bem-vindo ao nosso site"
- ❌ "Clique aqui para saber mais"

### Wordmark & Logo

**Conceito**: Monograma elegante com a letra "K" estilizada, incorporando um elemento de beleza (flor, gota, folha). Sem texto, apenas símbolo. Deve funcionar em qualquer tamanho, de favicon até banner.

**Cores**: Ouro sofisticado sobre fundo transparente. Versão em cinza escuro para uso sobre fundos claros.

### Signature Brand Color

**Ouro Sofisticado** (`#D4AF6A`) — Imediatamente reconhecível como Kairós. Usado em botões CTA, acentos, hover states. Evoca luxo, valor e confiança.

---

## Implementação

### Estrutura de Seções

1. **Header/Nav**: Sticky, branco com logo, menu simples, botão WhatsApp flutuante
2. **Hero**: Imagem + texto + 2 CTAs (Agendar, Conhecer Protocolo)
3. **Storytelling - Inverno**: Narrativa sobre por que cuidar da pele no inverno
4. **Protocolo**: O que é, como funciona, benefícios
5. **Benefícios**: Cards com ícones (pele renovada, luminosidade, etc)
6. **Como Funciona**: 4 passos (Avaliação → Procedimento → Cuidados → Resultado)
7. **Sobre a Clínica**: História, missão, valores
8. **Profissionais**: Equipe (se houver fotos no Instagram)
9. **Antes e Depois**: Galeria (placeholders elegantes se não houver imagens)
10. **Depoimentos**: Estrutura pronta (placeholders se não houver)
11. **Galeria**: Fotos do ambiente, procedimentos
12. **FAQ**: Perguntas frequentes
13. **Localização**: Mapa + contatos
14. **CTA Final**: Grande botão "Quero agendar minha avaliação"
15. **Footer**: Informações, redes sociais, mapa, contatos

### Componentes Reutilizáveis

- `SectionDivider` — Onda SVG entre seções
- `BenefitCard` — Card com ícone, título, descrição
- `StepCard` — Card para passo a passo
- `TestimonialCard` — Depoimento com foto, nome, texto
- `CTAButton` — Botão WhatsApp com ícone
- `GalleryItem` — Item de galeria com hover
- `FAQItem` — Item de FAQ com accordion

### Responsividade

- **Mobile First**: Começar com design mobile, expandir para desktop
- **Breakpoints**: 640px (tablet), 1024px (desktop)
- **Touch-Friendly**: Botões com mínimo 44px, espaçamento generoso
- **Imagens**: Responsivas, otimizadas para cada breakpoint

---

## Style Decisions (Baseado em Revisão Independente)

1. **Imagens**: Usar APENAS fotografia sem textos, logos ou marcas concorrentes embutidas. Toda imagem deve parecer campanha própria da Kairós com pele luminosa, ambiente clínico premium e estética editorial suave.

2. **Composição**: Nenhuma sequência longa de seções deve repetir "título central + grade regular de cards". A página deve alternar blocos editoriais assimétricos, imagens intercaladas e ritmo visual fluido.

3. **Marca**: O monograma Kairós em dourado deve aparecer como assinatura visual recorrente e discreta em momentos-chave (divisores, detalhes editoriais, numerais), reforçando reconhecimento sem competir com o conteúdo.

4. **Hierarquia Tipográfica**: Usar tipografia como linguagem de luxo com mais contraste entre chamadas principais e textos de apoio. Aproximar a copy do posicionamento (ciência, inverno, transformação, cuidado personalizado, investimento em si mesma).

5. **Fotografia**: Parecer curada para Kairós - pele, tecnologia estética, ambiente clínico sofisticado, detalhes de cuidado. Sem aparência de anúncio reaproveitado.

## Checklist de Implementação

- [x] Fontes (Playfair Display + Lato) importadas via Google Fonts
- [ ] Cores CSS variables configuradas em `index.css`
- [ ] Logo gerado e integrado
- [ ] Hero com imagem e CTAs
- [ ] Seções com divisores orgânicos
- [ ] Cards com sombras e hover
- [ ] Botão WhatsApp flutuante e sticky
- [ ] Micro-animações implementadas
- [ ] Responsividade testada em mobile/tablet/desktop
- [ ] SEO (meta tags, Open Graph, Schema)
- [ ] Integrações preparadas (Meta Pixel, GA, GTM)
- [ ] Componentes modulares e reutilizáveis
- [ ] Performance otimizada

