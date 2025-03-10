
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-4 lg:px-8",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-subtle"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-gradient">
            AI<span className="ml-1">Marketing</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="font-medium hover:text-secondary transition-colors"
          >
            Serviços
          </a>
          <a
            href="#features"
            className="font-medium hover:text-secondary transition-colors"
          >
            Diferenciais
          </a>
          <a
            href="#testimonials"
            className="font-medium hover:text-secondary transition-colors"
          >
            Depoimentos
          </a>
          <a
            href="#contact"
            className="btn-shine bg-secondary hover:bg-secondary/90 text-white px-5 py-2 rounded-md transition-all transform hover:scale-105"
          >
            Fale Conosco
          </a>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 animation-slide-down">
          <div className="flex flex-col space-y-4">
            <a
              href="#services"
              className="font-medium py-2 hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#features"
              className="font-medium py-2 hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Diferenciais
            </a>
            <a
              href="#testimonials"
              className="font-medium py-2 hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a
              href="#contact"
              className="btn-shine bg-secondary hover:bg-secondary/90 text-white px-5 py-2 rounded-md transition-all transform hover:scale-105 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
