import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Quem Somos",
    content: `A Cognitiva AI (CNPJ a informar) é uma empresa especializada em soluções de marketing digital e inteligência artificial, com sede em Contagem – MG, Brasil. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos os dados pessoais dos nossos usuários, clientes e visitantes.`,
  },
  {
    title: "2. Dados Coletados",
    content: `Podemos coletar as seguintes categorias de dados pessoais:

• Dados de identificação: nome completo, e-mail, telefone, empresa.
• Dados de navegação: endereço IP, tipo de dispositivo, páginas visitadas, tempo de sessão, cookies.
• Dados de integração com plataformas: quando você autoriza o acesso via Meta (Facebook/Instagram), podemos receber informações básicas de perfil, páginas gerenciadas e dados de desempenho de campanhas, conforme as permissões concedidas.
• Dados de comunicação: mensagens enviadas por formulários de contato ou chat.`,
  },
  {
    title: "3. Finalidade do Tratamento",
    content: `Utilizamos seus dados para:

• Prestar os serviços contratados (gestão de campanhas, analytics, automações de marketing).
• Comunicar novidades, atualizações e ofertas relacionadas aos nossos serviços, mediante seu consentimento.
• Cumprir obrigações legais e regulatórias.
• Melhorar continuamente a plataforma e a experiência do usuário.
• Integrar e gerenciar campanhas em plataformas de terceiros (Meta Ads, Google Ads) mediante autorização expressa.`,
  },
  {
    title: "4. Base Legal (LGPD)",
    content: `O tratamento dos seus dados é realizado com base nas seguintes hipóteses legais previstas na Lei Geral de Proteção de Dados (Lei nº 13.709/2018):

• Consentimento (Art. 7º, I): para envio de comunicações de marketing.
• Execução de contrato (Art. 7º, V): para prestação dos serviços contratados.
• Legítimo interesse (Art. 7º, IX): para melhorias de produto e segurança.
• Cumprimento de obrigação legal (Art. 7º, II): quando exigido por lei.`,
  },
  {
    title: "5. Compartilhamento de Dados",
    content: `Não vendemos seus dados pessoais. Podemos compartilhá-los com:

• Plataformas de publicidade e marketing (Meta, Google) exclusivamente para execução das campanhas contratadas e conforme suas políticas de uso de dados.
• Fornecedores de tecnologia que nos auxiliam na operação da plataforma, sob acordos de confidencialidade.
• Autoridades competentes, quando exigido por lei ou decisão judicial.`,
  },
  {
    title: "6. Cookies e Tecnologias de Rastreamento",
    content: `Utilizamos cookies e tecnologias similares para personalizar a experiência, analisar o tráfego e otimizar campanhas. Você pode gerenciar as preferências de cookies pelo seu navegador. A desativação de certos cookies pode afetar funcionalidades da plataforma.`,
  },
  {
    title: "7. Retenção de Dados",
    content: `Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei. Dados de clientes são retidos durante a vigência contratual e por até 5 anos após o encerramento, para fins fiscais e legais.`,
  },
  {
    title: "8. Seus Direitos",
    content: `Nos termos da LGPD, você tem direito a:

• Confirmar a existência do tratamento e acessar seus dados.
• Corrigir dados incompletos, inexatos ou desatualizados.
• Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.
• Solicitar a portabilidade dos dados.
• Revogar o consentimento a qualquer momento.
• Solicitar informações sobre o compartilhamento de dados.

Para exercer seus direitos, entre em contato: privacidade@cognitivaai.com.br`,
  },
  {
    title: "9. Segurança",
    content: `Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda, destruição ou divulgação indevida, incluindo criptografia, controle de acesso e monitoramento contínuo.`,
  },
  {
    title: "10. Alterações nesta Política",
    content: `Podemos atualizar esta Política periodicamente. A versão mais recente estará sempre disponível nesta página, com a data de atualização indicada no topo. Recomendamos a revisão regular.`,
  },
  {
    title: "11. Contato",
    content: `Cognitiva AI
R. Manoel Teixeira de Camargos, 640 – Eldorado, Contagem – MG, 32340-040
E-mail: privacidade@cognitivaai.com.br
Telefone: +55 (31) 92004-8663`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 pt-28 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="inline-block text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-4">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Política de{" "}
              <span className="text-gradient">Privacidade</span>
            </h1>
            <p className="text-muted-foreground">
              Última atualização: 13 de maio de 2026
            </p>
          </div>

          <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6 mb-10">
            <p className="text-foreground leading-relaxed">
              A Cognitiva AI valoriza a sua privacidade. Esta política explica de forma clara como
              tratamos os seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados
              (LGPD — Lei nº 13.709/2018) e demais legislações aplicáveis.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="group">
                <h2 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors">
                  {section.title}
                </h2>
                <div className="h-px bg-border mb-4" />
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
