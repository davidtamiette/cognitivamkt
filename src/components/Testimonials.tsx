
import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export default function Testimonials() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      content: "A estratégia de marketing com IA revolucionou nosso negócio. Vimos um aumento de 200% em conversões nos primeiros 3 meses de implementação.",
      author: "Ana Silva",
      role: "Diretora de Marketing",
      company: "TechSolutions",
      rating: 5
    },
    {
      content: "Os algoritmos de IA da agência identificaram oportunidades de mercado que nunca teríamos descoberto por conta própria. O ROI superou todas as expectativas.",
      author: "Carlos Mendes",
      role: "CEO",
      company: "Innovate Inc",
      rating: 5
    },
    {
      content: "Impressionante como a personalização baseada em IA melhorou nossa taxa de engajamento. Cada cliente se sente especial e os resultados falam por si.",
      author: "Mariana Costa",
      role: "CMO",
      company: "FutureRetail",
      rating: 5
    }
  ];

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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div
      id="testimonials"
      ref={testimonialsRef}
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="reveal opacity-0 inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-subtle mb-6">
            <span className="text-sm font-medium">O Que Dizem Nossos Clientes</span>
          </div>
          <h2 className="reveal opacity-0 text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Depoimentos</span> de Sucesso
          </h2>
          <p className="reveal opacity-0 text-lg text-muted-foreground">
            Veja como nossos clientes estão transformando seus negócios com nossa abordagem de marketing inteligente.
          </p>
        </div>

        <div className="reveal opacity-0 relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="glassmorphism bg-white/80 rounded-xl p-8 shadow-lg">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg mb-6">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-white font-bold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-input hover:bg-muted transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? "bg-secondary" : "bg-secondary/30"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-input hover:bg-muted transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
