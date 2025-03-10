import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach(el => {
            el.classList.add('animate-zoom-in');
            el.classList.remove('opacity-0');
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <div id="contact" ref={ctaRef} className="py-20 px-4 md:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="relative overflow-hidden reveal opacity-0">
          <div className="absolute -z-10 inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 animate-gradient-shift rounded-3xl"></div>
          <div className="absolute -z-10 top-0 left-[10%] w-72 h-72 bg-secondary/30 rounded-full blur-3xl"></div>
          <div className="absolute -z-10 bottom-0 right-[10%] w-72 h-72 bg-accent/30 rounded-full blur-3xl"></div>
          
          <div className="glassmorphism bg-white/40 backdrop-blur-lg rounded-3xl p-8 md:p-16 shadow-xl border border-white/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Pronto para expandir seu negócio no <span className="text-gradient">mercado americano</span>?
                </h2>
                <p className="text-lg text-gray-800 mb-8">
                  Agende uma consultoria gratuita e descubra como nossa tecnologia pode 
                  ajudar sua empresa a crescer nos Estados Unidos.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#"
                    className="btn-shine inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105"
                  >
                    Agende uma Demonstração
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center border border-input bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-70 px-6 py-3 rounded-md font-medium"
                  >
                    Fale com um Consultor
                  </a>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 transform hover:scale-105 transition-transform">
                  <h3 className="font-semibold text-xl mb-2">Análise de Mercado</h3>
                  <p className="text-gray-600">
                    Entenda as oportunidades para seu negócio no mercado americano com análise detalhada.
                  </p>
                </div>
                
                <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 transform hover:scale-105 transition-transform">
                  <h3 className="font-semibold text-xl mb-2">Estratégia Personalizada</h3>
                  <p className="text-gray-600">
                    Plano de ação focado no seu segmento e no público brasileiro nos EUA.
                  </p>
                </div>
                
                <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 transform hover:scale-105 transition-transform">
                  <h3 className="font-semibold text-xl mb-2">Resultados Rápidos</h3>
                  <p className="text-gray-600">
                    Aumente suas vendas no mercado americano em questão de semanas, não meses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
