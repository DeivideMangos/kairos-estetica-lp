import { Separator } from "@/components/ui/separator";

export default function LGPD() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Kairós" className="h-10 w-10" />
            <span className="text-2xl font-bold text-display text-accent">Kairós</span>
          </div>
          <a href="/" className="text-sm hover:text-accent transition">← Voltar</a>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h1 className="text-display text-4xl md:text-5xl mb-8">LGPD - Lei Geral de Proteção de Dados</h1>
          
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-display text-2xl mb-4">1. O que é LGPD?</h2>
              <p>
                A Lei Geral de Proteção de Dados (LGPD) é a legislação brasileira que regulamenta o tratamento de dados pessoais de pessoas naturais. A Kairós Estética está em total conformidade com esta lei.
              </p>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">2. Dados Pessoais que Coletamos</h2>
              <p>
                Coletamos apenas os dados pessoais necessários para fornecer nossos serviços:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Nome completo</li>
                <li>Telefone/WhatsApp</li>
                <li>Endereço de e-mail</li>
                <li>Informações sobre procedimentos de interesse</li>
                <li>Dados de navegação (através de cookies e analytics)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">3. Base Legal para Tratamento de Dados</h2>
              <p>
                Tratamos seus dados com base em:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Consentimento:</strong> Você autoriza o tratamento de seus dados ao preencher formulários</li>
                <li><strong>Execução de Contrato:</strong> Para fornecer os serviços solicitados</li>
                <li><strong>Interesse Legítimo:</strong> Para melhorar nossos serviços e segurança</li>
                <li><strong>Obrigação Legal:</strong> Para cumprir leis aplicáveis</li>
              </ul>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">4. Compartilhamento de Dados</h2>
              <p>
                Seus dados pessoais não são compartilhados com terceiros, exceto quando necessário para:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Cumprir obrigações legais</li>
                <li>Proteger direitos e segurança</li>
                <li>Serviços de hospedagem e análise (Google Analytics, Meta Pixel)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">5. Direitos do Titular de Dados</h2>
              <p>
                Conforme a LGPD, você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Direito de Acesso:</strong> Solicitar informações sobre seus dados</li>
                <li><strong>Direito de Retificação:</strong> Corrigir dados incorretos</li>
                <li><strong>Direito de Exclusão:</strong> Solicitar a exclusão de seus dados</li>
                <li><strong>Direito de Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                <li><strong>Direito de Oposição:</strong> Opor-se ao tratamento de seus dados</li>
                <li><strong>Direito de Não Ser Submetido:</strong> A decisões automatizadas</li>
              </ul>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">6. Retenção de Dados</h2>
              <p>
                Mantemos seus dados pessoais apenas pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais. Após esse período, os dados são excluídos ou anonimizados.
              </p>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">7. Segurança de Dados</h2>
              <p>
                Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">8. Encarregado de Proteção de Dados</h2>
              <p>
                Para exercer seus direitos ou fazer reclamações sobre o tratamento de seus dados, entre em contato conosco:
              </p>
              <p className="mt-3">
                WhatsApp: <a href="https://wa.me/5512988980812" className="text-accent hover:underline">(12) 98898-0812</a>
              </p>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">9. Cookies e Rastreamento</h2>
              <p>
                Utilizamos cookies e tecnologias de rastreamento para melhorar sua experiência. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
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
