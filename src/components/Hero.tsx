import { useEffect, useRef } from "react";
import { ArrowRight, Zap, Sparkles, PieChart } from "lucide-react";
export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => {
      observer.observe(el);
    });
    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  return <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 md:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 to-white"></div>
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-full bg-[radial-gradient(circle,rgba(209,213,219,0.1)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
      </div>

      <div className="container max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="reveal opacity-0">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-subtle mb-6">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Marketing Digital Brasil-EUA</span>
              </div>
            </div>

            <h1 className="reveal opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Impulsione seu Negócio <br />
              <span className="text-gradient">nos Estados Unidos</span>
            </h1>

            <p className="reveal opacity-0 text-lg md:text-xl text-muted-foreground max-w-xl">
              Marketing inteligente com IA para empresários brasileiros conquistarem 
              mais clientes e expandirem seus negócios no mercado americano.
            </p>

            <div className="reveal opacity-0 flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="btn-shine inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105">
                Comece Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center border border-input bg-background hover:bg-muted px-6 py-3 rounded-md font-medium">
                Conheça Nossos Serviços
              </a>
            </div>

            
          </div>

          <div className="relative h-[480px] reveal opacity-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-10 bg-gray-100 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-4 pt-12">
                <div className="animate-pulse-subtle">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="h-24 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Zap className="h-8 w-8 text-secondary animate-pulse-subtle" />
                    </div>
                    <div className="h-24 bg-accent/10 rounded-lg flex items-center justify-center">
                      <PieChart className="h-8 w-8 text-accent animate-pulse-subtle" />
                    </div>
                  </div>
                  
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-10 right-0 w-20 h-20 rounded-lg bg-secondary/20 backdrop-blur-sm border border-secondary/30 flex items-center justify-center animate-float shadow-lg">
              <Zap className="h-10 w-10 text-secondary" />
            </div>
            <div className="absolute bottom-20 -left-5 w-20 h-20 rounded-lg bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center animate-float animation-delay-1000 shadow-lg">
              <Sparkles className="h-10 w-10 text-accent" />
            </div>
            <div className="absolute top-1/2 -right-5 w-16 h-16 rounded-lg bg-gray-900/20 backdrop-blur-sm border border-gray-900/30 flex items-center justify-center animate-float animation-delay-2000 shadow-lg">
              <PieChart className="h-8 w-8 text-gray-900" />
            </div>
          </div>
        </div>
      </div>
    </div>;
}