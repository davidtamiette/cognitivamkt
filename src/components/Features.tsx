
import { useEffect, useRef } from "react";
import { Check, Zap, Sparkles, BrainCircuit, LineChart, Lock } from "lucide-react";

export default function Features() {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach(el => {
            el.classList.add('animate-slide-up');
            el.classList.remove('opacity-0');
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-secondary" />,
      title: "Algoritmos Avançados",
      description: "Nossos modelos de IA analisam milhões de pontos de dados para tomar decisões de marketing estratégicas."
    },
    {
      icon: <Zap className="h-10 w-10 text-secondary" />,
      title: "Velocidade Incomparável",
      description: "Otimizações em tempo real que seriam impossíveis com métodos tradicionais de marketing."
    },
    {
      icon: <LineChart className="h-10 w-10 text-secondary" />,
      title: "ROI Maximizado",
      description: "Alocação inteligente de recursos para focar em canais e estratégias com maior potencial de retorno."
    },
    {
      icon: <Lock className="h-10 w-10 text-secondary" />,
      title: "Segurança de Dados",
      description: "Implementamos os mais altos padrões de segurança para proteger dados sensíveis de clientes."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-secondary" />,
      title: "Personalização Avançada",
      description: "Experiências únicas para cada cliente com base em seu comportamento, preferências e histórico."
    }
  ];

  return (
    <div 
      id="features" 
      ref={featuresRef}
      className="py-20 px-4 md:px-8"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -z-10 top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl rotate-3 opacity-30"></div>
              <div className="bg-white rounded-3xl p-8 shadow-subtle">
                <div className="reveal opacity-0 space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-lg glassmorphism bg-secondary/10 flex items-center justify-center">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:order-2">
            <div className="reveal opacity-0 inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-subtle mb-6">
              <span className="text-sm font-medium">Nossos Diferenciais</span>
            </div>
            <h2 className="reveal opacity-0 text-3xl md:text-4xl font-bold mb-6">
              Por que escolher nossa <span className="text-gradient">Tecnologia de Marketing</span>
            </h2>
            <p className="reveal opacity-0 text-lg text-muted-foreground mb-8">
              Combinamos expertise humana com inteligência artificial de ponta para criar estratégias 
              de marketing que realmente impulsionam resultados mensuráveis.
            </p>
            
            <div className="reveal opacity-0 space-y-4">
              {[
                "Equipe especializada em marketing digital e ciência de dados",
                "Tecnologia proprietária com algoritmos exclusivos",
                "Metodologia comprovada com centenas de casos de sucesso",
                "Escalonável para empresas de qualquer porte"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-secondary" />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            
            <div className="reveal opacity-0 mt-10">
              <a 
                href="#contact" 
                className="btn-shine inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105"
              >
                Conheça Nossa Tecnologia
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
