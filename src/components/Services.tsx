
import { useEffect, useRef } from "react";
import { 
  TrendingUp, 
  Search, 
  MessageSquare, 
  BarChart, 
  Mail, 
  Layers 
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

function ServiceCard({ title, description, icon, delay }: ServiceCardProps) {
  return (
    <div 
      className="reveal opacity-0 transition-all duration-500 bg-white rounded-xl p-6 shadow-subtle hover:shadow-lg hover:-translate-y-1 border border-border"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.reveal');
          elements.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('animate-slide-up');
              el.classList.remove('opacity-0');
            }, i * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "SEO Localizado EUA",
      description: "Otimização para mecanismos de busca focada no público americano e brasileiro nos EUA.",
      icon: <Search className="h-6 w-6 text-secondary" />,
      delay: 100
    },
    {
      title: "Marketing Bilíngue",
      description: "Estratégias de conteúdo personalizado em português e inglês para maior alcance.",
      icon: <Layers className="h-6 w-6 text-secondary" />,
      delay: 200
    },
    {
      title: "Automação de Vendas",
      description: "Chatbots inteligentes em português e inglês para atendimento 24/7 e conversão.",
      icon: <MessageSquare className="h-6 w-6 text-secondary" />,
      delay: 300
    },
    {
      title: "Analytics Preditivo",
      description: "Análise avançada do comportamento do consumidor brasileiro nos EUA.",
      icon: <BarChart className="h-6 w-6 text-secondary" />,
      delay: 400
    },
    {
      title: "Campanhas Locais",
      description: "Anúncios direcionados para comunidades brasileiras em diferentes regiões dos EUA.",
      icon: <TrendingUp className="h-6 w-6 text-secondary" />,
      delay: 500
    },
    {
      title: "Email Marketing",
      description: "Comunicação segmentada e personalizada para sua base de clientes nos EUA.",
      icon: <Mail className="h-6 w-6 text-secondary" />,
      delay: 600
    }
  ];

  return (
    <div id="services" ref={sectionRef} className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="container max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-subtle mb-6">
            <span className="text-sm font-medium">Nossos Serviços</span>
          </div>
          <h2 className="reveal opacity-0 text-3xl md:text-4xl font-bold mb-4">
            Marketing Inteligente para o <span className="text-gradient">Mercado Americano</span>
          </h2>
          <p className="reveal opacity-0 text-lg text-muted-foreground">
            Desenvolvemos estratégias sob medida para empresários brasileiros 
            que querem expandir seus negócios nos Estados Unidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
