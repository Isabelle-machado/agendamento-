
import React from "react";
import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";
import TextTestimonialCard from "../components/TextTestimonialCard";
import TestimonialCard from "../components/TestimonialCard";
import { Button } from "../components/ui/button";

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-[#15051c]">
      {/* Hero Section */}
      <section className="pt-12 md:pt-16 lg:pt-20 px-4 md:px-8 lg:px-24 xl:px-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                O Framework do Master Producer
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Ensine com alma. Construa com clareza. Venda em escala.
              </p>
              <div className="hidden md:flex space-x-4 mb-8 justify-center lg:justify-start">
                <Button
                  className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-8 py-6 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link to="#form-section">Quero o Framework</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(255,215,0,0.3)] relative transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/lovable-uploads/dc80d9af-301e-4ebe-a5a5-079297b3c472.png"
                  alt="Framework do Master Producer"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-600/10 rounded-xl"></div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-yellow-600/20 rounded-xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section
        id="form-section"
        className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-24 xl:px-32"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
                Receba Agora o Framework
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Preencha o formulário abaixo para receber gratuitamente o
                framework completo do Master Producer em seu e-mail.
              </p>
              <LeadForm />
              <div className="md:hidden mt-8 flex justify-center">
                <Button
                  className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-8 py-6 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link to="#form-section">Quero o Framework</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(255,215,0,0.3)] relative transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/lovable-uploads/dc80d9af-301e-4ebe-a5a5-079297b3c472.png"
                  alt="Framework do Master Producer"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-600/10 rounded-xl"></div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-yellow-600/20 rounded-xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-24 xl:px-32 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-white text-center">
            O Que Dizem Sobre o Framework
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Lucas Silva"
              role="Produtor Digital"
              testimonial="Este framework mudou completamente minha abordagem para criar conteúdo. Agora consigo estruturar cursos que realmente entregam resultados."
              imageSrc="/lovable-uploads/0d0de205-0d2c-454d-ad9e-843b4a78eaa2.png"
            />
            <TextTestimonialCard
              name="Mariana Costa"
              role="Mentora de Negócios"
              testimonial="Meus alunos estão obtendo resultados 3x mais rápidos desde que implementei o método do Master Producer em meus treinamentos."
            />
            <TestimonialCard
              name="Ricardo Oliveira"
              role="Coach de Performance"
              testimonial="Consegui triplicar minhas vendas depois que reorganizei meu conteúdo usando este framework. É simplesmente revolucionário."
              imageSrc="/lovable-uploads/40061526-6988-4f5d-b03d-02131f16c69c.png"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-24 xl:px-32">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
            Pronto para Transformar Seu Conteúdo?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Acesse agora o Framework do Master Producer e comece a criar
            conteúdos que realmente transformam a vida dos seus alunos.
          </p>
          <Button
            className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-10 py-6 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            asChild
          >
            <Link to="#form-section">Quero Receber o Framework</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/50 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Master Producer. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                Termos de Uso
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
