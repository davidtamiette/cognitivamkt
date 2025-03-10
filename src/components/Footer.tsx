import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 px-4 md:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="text-3xl font-bold text-gradient inline-block mb-4">
              Cognitiva<span className="ml-1">Marketing</span>
            </a>
            <p className="text-muted-foreground mb-6">
              Transformando estratégias de marketing com inteligência artificial avançada para resultados extraordinários.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }) => (
                <a 
                  key={Icon.name}
                  href={href} 
                  className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-6">Navegação</h3>
            <ul className="space-y-3">
              {[
                { name: "Início", href: "#" },
                { name: "Serviços", href: "#services" },
                { name: "Diferenciais", href: "#features" },
                { name: "Depoimentos", href: "#testimonials" },
                { name: "Contato", href: "#contact" }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-6">Serviços</h3>
            <ul className="space-y-3">
              {[
                "SEO com IA",
                "Marketing de Conteúdo",
                "Chatbots Inteligentes",
                "Analytics Preditivo",
                "Campanhas Inteligentes",
                "Email Marketing Avançado"
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-secondary mr-3 mt-0.5" />
                <span className="text-muted-foreground">
                  R. Manoel Teixeira de Camargos, 640 - Eldorado, Contagem - MG, 32340-040
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-secondary mr-3" />
                <a 
                  href="tel:+5531920048663" 
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  +55 (31) 92004-8663
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-secondary mr-3" />
                <a 
                  href="mailto:contato@cognitivamkt.com.br" 
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  contato@cognitivamkt.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Cognitiva Marketing. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
