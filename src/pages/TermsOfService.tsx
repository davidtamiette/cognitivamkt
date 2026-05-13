import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Aceitação dos Termos",
    content: `Ao acessar ou utilizar os serviços da Cognitiva AI, você concorda com os presentes Termos de Serviço. Caso não concorde com qualquer disposição, recomendamos que não utilize nossa plataforma. Estes termos constituem um contrato vinculante entre você e a Cognitiva AI.`,
  },
  {
    title: "2. Descrição dos Serviços",
    content: `A Cognitiva AI oferece soluções de marketing digital potencializadas por inteligência artificial, incluindo:

• Gestão e otimização de campanhas de tráfego pago (Meta Ads, Google Ads e outros).
• Criação e automação de conteúdo para redes sociais.
• Implementação de chatbots e automações de atendimento.
• Analytics preditivo e relatórios de performance.
• Consultoria estratégica em marketing digital.

Os serviços são prestados mediante contratação formal, conforme proposta comercial aceita pelo cliente.`,
  },
  {
    title: "3. Cadastro e Acesso",
    content: `Para utilizar os serviços, o usuário deve fornecer informações verídicas e mantê-las atualizadas. O usuário é responsável pela confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta. Em caso de uso não autorizado, notifique-nos imediatamente em contato@cognitivaai.com.br.`,
  },
  {
    title: "4. Integrações com Plataformas de Terceiros",
    content: `Ao autorizar integrações com plataformas como Meta (Facebook/Instagram), Google e outras, você confirma ter os direitos e permissões necessários para conceder tal acesso. A Cognitiva AI utilizará essas integrações exclusivamente para executar os serviços contratados. Cada plataforma de terceiros possui seus próprios termos de uso, pelos quais o usuário também é responsável.`,
  },
  {
    title: "5. Obrigações do Cliente",
    content: `O cliente compromete-se a:

• Fornecer informações precisas e materiais necessários para a prestação dos serviços.
• Não utilizar os serviços para fins ilegais, fraudulentos ou que violem direitos de terceiros.
• Respeitar as políticas de uso das plataformas integradas.
• Realizar os pagamentos nas condições acordadas.
• Não realizar engenharia reversa, copiar ou distribuir tecnologias proprietárias da Cognitiva AI.`,
  },
  {
    title: "6. Propriedade Intelectual",
    content: `Todos os conteúdos, algoritmos, metodologias e materiais desenvolvidos pela Cognitiva AI são de sua propriedade intelectual exclusiva. Os materiais criativos produzidos especificamente para o cliente (peças publicitárias, textos, etc.) são de propriedade do cliente após quitação integral dos serviços.`,
  },
  {
    title: "7. Pagamento e Cancelamento",
    content: `Os valores, periodicidade e condições de pagamento são definidos na proposta comercial. O atraso no pagamento poderá resultar na suspensão dos serviços. O cancelamento deve ser comunicado com antecedência mínima de 30 dias. Valores já investidos em campanhas de tráfego pago não são reembolsáveis após veiculação.`,
  },
  {
    title: "8. Limitação de Responsabilidade",
    content: `A Cognitiva AI emprega melhores práticas de mercado, mas não garante resultados específicos de vendas ou ROI, pois estes dependem de fatores externos ao nosso controle. Nossa responsabilidade limita-se ao valor dos serviços contratados no período em questão. Não somos responsáveis por decisões tomadas pelas plataformas de terceiros (suspensão de contas, mudanças de algoritmo, etc.).`,
  },
  {
    title: "9. Confidencialidade",
    content: `Ambas as partes comprometem-se a manter sigilo sobre informações confidenciais compartilhadas durante a prestação dos serviços, durante a vigência contratual e por 2 anos após seu encerramento.`,
  },
  {
    title: "10. Modificações nos Termos",
    content: `Podemos atualizar estes Termos periodicamente. Alterações relevantes serão comunicadas por e-mail ou aviso na plataforma com antecedência mínima de 15 dias. O uso continuado dos serviços após as alterações implica aceitação dos novos termos.`,
  },
  {
    title: "11. Vigência e Rescisão",
    content: `Estes Termos entram em vigor no momento da contratação dos serviços e permanecem válidos durante toda a relação comercial. A rescisão por descumprimento pode ocorrer mediante notificação escrita, sem prejuízo das obrigações já contraídas.`,
  },
  {
    title: "12. Lei Aplicável e Foro",
    content: `Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Contagem – MG para dirimir quaisquer controvérsias decorrentes deste instrumento, com renúncia expressa a qualquer outro.`,
  },
  {
    title: "13. Contato",
    content: `Cognitiva AI
R. Manoel Teixeira de Camargos, 640 – Eldorado, Contagem – MG, 32340-040
E-mail: contato@cognitivaai.com.br
Telefone: +55 (31) 92004-8663`,
  },
];

export default function TermsOfService() {
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
              Termos de{" "}
              <span className="text-gradient">Serviço</span>
            </h1>
            <p className="text-muted-foreground">
              Última atualização: 13 de maio de 2026
            </p>
          </div>

          <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6 mb-10">
            <p className="text-foreground leading-relaxed">
              Ao utilizar os serviços da Cognitiva AI, você concorda com os termos abaixo. Leia
              atentamente antes de contratar ou utilizar nossa plataforma. Em caso de dúvidas,
              entre em contato conosco antes de prosseguir.
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
