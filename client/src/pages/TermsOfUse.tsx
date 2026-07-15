import { Separator } from "@/components/ui/separator";

export default function TermsOfUse() {
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
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h1 className="text-display text-4xl md:text-5xl mb-8">Termos de Uso</h1>
          
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-display text-2xl mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o site da Kairós Estética, você concorda em aceitar e estar vinculado por estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não use este site.
              </p>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">2. Uso Permitido</h2>
              <p>
                Você concorda em usar este site apenas para fins legítimos e de maneira que não infrinja os direitos de terceiros ou restrinja seu uso e gozo. Comportamento proibido inclui:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Assediar ou causar constrangimento a qualquer pessoa</li>
                <li>Transmitir conteúdo obsceno ou ofensivo</li>
                <li>Interromper o fluxo normal de diálogo dentro de nosso site</li>
              </ul>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">3. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo incluído neste site, como textos, gráficos, logos, imagens, clipes de áudio, downloads digitais e compilação de dados, é propriedade da Kairós Estética ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos autorais.
              </p>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">4. Isenção de Responsabilidade</h2>
              <p>
                O conteúdo deste site é fornecido "como está" sem garantias de qualquer tipo, expressas ou implícitas. A Kairós Estética não garante a precisão, integridade ou qualidade de qualquer conteúdo neste site.
              </p>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">5. Limitação de Responsabilidade</h2>
              <p>
                Em nenhuma circunstância a Kairós Estética será responsável por qualquer dano direto, indireto, incidental, especial ou consequente que resulte do uso ou incapacidade de usar o site ou o conteúdo.
              </p>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">6. Links Externos</h2>
              <p>
                Este site pode conter links para sites de terceiros. A Kairós Estética não é responsável pelo conteúdo, precisão ou práticas de privacidade desses sites externos.
              </p>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">7. Modificações dos Termos</h2>
              <p>
                A Kairós Estética se reserva o direito de modificar estes Termos de Uso a qualquer momento. As alterações serão efetivas imediatamente após a publicação no site.
              </p>
            </div>

            <div>
              <h2 className="text-display text-2xl mb-4">8. Contato</h2>
              <p>
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
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
