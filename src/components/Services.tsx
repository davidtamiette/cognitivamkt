
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
      title: "SEO com IA",
      description: "Otimização avançada para mecanismos de busca utilizando algoritmos de inteligência artificial.",
      icon: <Search className="h-6 w-6 text-secondary" />,
      delay: 100
    },
    {
      title: "Marketing de Conteúdo",
      description: "Estratégias de conteúdo personalizado com análise preditiva para engajamento máximo.",
      icon: <Layers className="h-6 w-6 text-secondary" />,
      delay: 200
    },
    {
      title: "Chatbots Inteligentes",
      description: "Assistentes virtuais que combinam NLP avançado com estratégias de conversão.",
      icon: <MessageSquare className="h-6 w-6 text-secondary" />,
      delay: 300
    },
    {
      title: "Analytics Preditivo",
      description: "Análise de dados avançada para prever tendências e comportamentos do consumidor.",
      icon: <BarChart className="h-6 w-6 text-secondary" />,
      delay: 400
    },
    {
      title: "Campanhas Inteligentes",
      description: "Anúncios automatizados com otimização contínua baseada em machine learning.",
      icon: <TrendingUp className="h-6 w-6 text-secondary" />,
      delay: 500
    },
    {
      title: "Email Marketing Avançado",
      description: "Segmentação dinâmica e personalização em tempo real com algoritmos de IA.",
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
            Soluções de Marketing com <span className="text-gradient">Inteligência Artificial</span>
          </h2>
          <p className="reveal opacity-0 text-lg text-muted-foreground">
            Nossa equipe combina expertise em marketing digital com tecnologias avançadas 
            de IA para impulsionar seus resultados.
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
