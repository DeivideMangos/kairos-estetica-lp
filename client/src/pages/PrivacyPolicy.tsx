import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/fotoclinica.png" alt="Kairós" className="h-10 w-10" />
            <span className="text-2xl font-bold text-display text-accent">Kairós</span>
          </div>
          <a href="/" className="text-sm hover:text-accent transition">← Voltar</a>
        </div>
      </header>

      {/* Content */}
      <section className="py-10 md:py-20">
        <div className="container max-w-3xl">
          <h1 className="text-display text-3xl md:text-5xl mb-8">Política de Privacidade</h1>
          
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-display text-2xl mb-4">1. Introdução</h2>
              <p>
                A Kairós Estética ("nós", "nosso" ou "nos") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site.
              </p>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">2. Informações que Coletamos</h2>
              <p>Coletamos informações que você nos fornece voluntariamente, incluindo:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Nome completo</li>
                <li>Número de telefone/WhatsApp</li>
                <li>Endereço de e-mail</li>
                <li>Horário preferido para contato</li>
                <li>Informações sobre procedimentos de interesse</li>
              </ul>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">3. Como Usamos Suas Informações</h2>
              <p>Utilizamos as informações coletadas para:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Responder a suas solicitações e consultas</li>
                <li>Enviar comunicações sobre agendamentos e procedimentos</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
                <li>Cumprir obrigações legais</li>
                <li>Enviar atualizações sobre promoções e novos procedimentos (com seu consentimento)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">4. Proteção de Dados</h2>
              <p>
                Implementamos medidas de segurança apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Todas as transmissões de dados são criptografadas usando SSL.
              </p>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">5. Cookies e Tecnologias de Rastreamento</h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua experiência. Isso inclui Google Analytics para análise de tráfego e Meta Pixel para fins de marketing.
              </p>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">6. Seus Direitos</h2>
              <p>
                Você tem o direito de acessar, corrigir ou solicitar a exclusão de suas informações pessoais. Para exercer esses direitos, entre em contato conosco através do WhatsApp ou e-mail.
              </p>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">7. Contato</h2>
              <p>
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
              </p>
              <p className="mt-3">
                WhatsApp: <a href="https://wa.me/5512988980812" className="text-accent hover:underline">(12) 98898-0812</a>
              </p>
            </div>

            <div>
              <p className="text-sm">
                <strong>Última atualização:</strong> Julho de 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border py-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Kairós Estética. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
