"use client";

import Link from "next/link";
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  ChevronRight,
  Code,
  BarChart,
  Shield,
  Zap,
  MessageSquare,
  FileCheck,
  Rocket,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ScrollHeader from "@/components/animations/ScrollHeader";
import DisplayedText from "@/components/animations/DisplayedText"
import { Modal } from "@/components/ui/modal"
import { ScrollAnimation } from "@/components/animations/ScrollAnimation";
import { ContactForm } from "../services/ContactForm";
import { faqItems } from "@/lib/ArrayFAQ";
import { ParticleBackground } from "@/components/animations/ParticleBackground";

import { FaWhatsapp } from "react-icons/fa";

const benefits = [
  {
    icon: <Code className="text-[#2A7AFF]" />,
    colorClass: "bg-[#2A7AFF]/10",
    title: "Design Profissional que Encanta",
    description: "Sites responsivos e modernos que convertem visitantes em clientes."
  },
  {
    icon: <BarChart className="text-[#FF4D4D]" />,
    colorClass: "bg-[#FF4D4D]/10",
    title: "SEO Integrado para Você ser Encontrado",
    description: "Otimização para mecanismos de busca desde o primeiro dia."
  },
  {
    icon: (
      <>
        <Shield className="text-[#2A7AFF]" />
        <Zap className="text-[#2A7AFF] absolute h-4 w-4" />
      </>
    ),
    colorClass: "bg-[#2A7AFF]/10",
    title: "Sites Rápidos e Seguros",
    description: "Performance otimizada e proteção contra ameaças digitais."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF4D4D]"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
    ),
    colorClass: "bg-[#FF4D4D]/10",
    title: "Marketing Digital Pronto para Ação",
    description: "Estratégias completas para atrair e converter seu público-alvo."
  }
];

export default function Home() {

  const [showModal, setShowModal] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [buttonVisible, setButtonVisible] = useState(false)
  const [dashboardVisible, setDashboardVisible] = useState(false);

  useEffect(() => {
    // Abre o modal automaticamente após um pequeno delay
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleTextComplete = () => {
    setTimeout(() => {
      setShowButton(true)
      setTimeout(() => setButtonVisible(true), 50)
    }, 300)
  }

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => setDashboardVisible(true), 300); // Delay para sincronizar com animação de fechamento
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="bg-gradient-to-b from-white/5 to-transparent border-b border-[#2A7AFF]/10">
        <nav className="container mx-auto px-4 py-5 md:py-6">
          <div className="flex items-center gap-3 hover:gap-4 transition-all duration-300">
            {/* Logo */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r rounded-full blur  group-hover:opacity-50 transition-opacity duration-300" />
              <a href="/" className="relative block">
                <img 
                  src="/marketilize.webp"
                  alt="Marketilize Logo"
                  className="w-36 h-auto hover:scale-105 transition-transform"
                />
              </a>
            </div>
            <link rel="icon" href="/favicon.ico" />
          </div>
        </nav>
      </header>

      <ScrollHeader />
      <main>
        <ScrollAnimation>
          <section className="container mx-auto px-4 py-16 md:py-24 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
              <div className="space-y-9 md:space-y-12">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] animate-fade-in-up [animation-delay:0.1s] opacity-0 max-w-4xl">
                  Transforme Sua Ideia em uma{' '}
                  <span className="relative bg-gradient-to-r from-[#2A7AFF] via-[#FF4D4D] to-[#FF4D4D] bg-clip-text text-transparent animate-gradient-horizontal bg-300%">
                    Máquina de Vendas Online
                    <span className="absolute inset-0 bg-gradient-to-r from-[#2A7AFF] to-[#FF4D4D] blur-2xl opacity-30 -z-10"></span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300/90 leading-relaxed max-w-3xl animate-fade-in-up [animation-delay:0.3s] opacity-0">
                  Desenvolvemos sites, e-commerces e estratégias de marketing digital que 
                  <span className="bg-gradient-to-r from-[#2A7AFF] to-[#FF4D4D] bg-clip-text text-transparent font-medium">
                    {" "}convertem clientes
                  </span> e escalam resultados.
                </p>
                
                <Link id="btnWppHero" target="_blank" href="https://wa.me/5575983252987?text=Ol%C3%A1,%20tenho%20interesse%20em%20criar%20um%20site%20com%20voc%C3%AAs">
                  <Button 
                    className="group bg-[#FF4D4D] hover:bg-[#FF4D4D] text-white px-10 py-7 text-xl rounded-xl transition-all 
                              hover:scale-105 hover:shadow-2xl hover:shadow-[#FF4D4D]/30 animate-pop-in [animation-delay:0.5s]
                              focus:ring-4 focus:ring-[#FF4D4D]/50 cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      Quero um site que vende 
                      <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
              </div>

              {/* Coluna Direita - Dashboard + Mockup */}
              <div className="relative h-[600px]">
                {/* Efeito de Gradiente de Fundo */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#2A7AFF] to-[#FF4D4D] rounded-xl blur opacity-30 ${
                  dashboardVisible ? 'animate-pulse-glow' : ''
                }`} />
                
                <div className="relative bg-[#111] rounded-xl p-4 h-full flex items-center justify-center">
                  <div className="w-full h-full relative z-20">
                    {/* Gráfico de Barras com Controle de Animação */}
                    <div className={`absolute bottom-0 left-0 right-0 h-48 flex items-end justify-between px-6 gap-x-3 ${
                      dashboardVisible ? 'animate-bars' : ''
                    }`}>
                      {[40, 75, 150, 105, 205].map((h, i) => (
                        <div 
                          key={i}
                          className="w-20 bg-gradient-to-t from-[#2A7AFF] to-[#FF4D4D] rounded-t-lg transition-all duration-300 hover:translate-y-1"
                          style={{ 
                            height: `${h}%`,
                            minHeight: '100px',
                            animationPlayState: dashboardVisible ? 'running' : 'paused'
                          }}
                        />
                      ))}
                    </div>

                    {/* Eixos e Grid do Gráfico */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-[#2A7AFF]/30" />
                    <div className="absolute left-0 bottom-0 top-0 w-px bg-[#2A7AFF]/30" />
                    <div className="absolute inset-0 grid grid-cols-5 gap-x-4 opacity-20">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-full border-r border-[#2A7AFF]/20" />
                      ))}
                    </div>

                    {/* Mockup de Site Flutuante */}
                    <div className={`absolute top-4 right-4 w-[300px] ${dashboardVisible ? 'animate-float' : ''}`}>
                      <div className="relative bg-black rounded-lg shadow-2xl overflow-hidden transform rotate-3">
                        {/* Barra superior do mockup */}
                        <div className="h-6 bg-[#111] flex items-center px-2 border-b border-white/5">
                          <div className="flex gap-1">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                          </div>
                        </div>
                        
                        {/* Container ajustado */}
                        <div className="h-48 overflow-hidden relative group">
                          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                          
                          <Image
                            src="/site1.webp"
                            width={400}
                            height={300}
                            alt="Mockup Website"
                            className="w-full h-full object-cover animate-pan"
                            style={{ 
                              animationPlayState: dashboardVisible ? 'running' : 'paused',
                              objectPosition: 'center 25%' // Ajuste inicial do enquadramento
                            }}
                          />

                          {/* Efeito de brilho dinâmico */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Estatísticas Laterais */}
                    <div className="absolute left-4 top-8 space-y-4">
                      <div className={`bg-[#111] p-4 rounded-xl border border-[#2A7AFF]/30 backdrop-blur-sm ${
                        dashboardVisible ? 'animate-metric-card' : ''
                      }`}>
                        <div className="text-[#FF4D4D] font-bold text-2xl">+127%</div>
                        <div className="text-sm text-[#2A7AFF]">Tráfego Orgânico</div>
                      </div>
                      
                      <div className={`bg-[#111] p-4 rounded-xl border border-[#FF4D4D]/30 backdrop-blur-sm ${
                        dashboardVisible ? 'animate-metric-card' : ''
                      }`}>
                        <div className="text-[#2A7AFF] font-bold text-2xl">3.2x</div>
                        <div className="text-sm text-[#FF4D4D]">Conversão</div>
                      </div>
                    </div>
                  </div>

                  {/* Efeitos de Fundo Dinâmicos */}
                  <div className={`absolute -z-10 top-1/3 right-1/4 w-64 h-64 bg-[#2A7AFF]/20 rounded-full blur-3xl ${
                    dashboardVisible ? 'animate-pulse' : ''
                  }`} />
                  <div className={`absolute -z-10 bottom-1/3 left-1/4 w-64 h-64 bg-[#FF4D4D]/20 rounded-full blur-3xl ${
                    dashboardVisible ? 'animate-pulse' : ''
                  }`} />
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
        
        <ScrollAnimation distance="30px" duration="0.8s" className="min-h-[200px] overflow-visible" // Garante que o conteúdo não seja cortado
        >
          {/* Benefits Section */}
          <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 px-4">
                Por Que Escolher a Marketilize?
              </h2>
              
              <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
                Não somos apenas desenvolvedores, somos parceiros do seu crescimento
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-[#111] p-8 rounded-xl border border-gray-800 hover:border-[#2A7AFF]/50 transition-all duration-300
                  transform hover:-translate-y-2 mobile-scale-effect" // Efeito de escala mobile
                >
                  <div className="w-14 h-14 bg-[#2A7AFF]/10 rounded-lg flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation distance="30px" duration="0.8s" className="min-h-[200px]">
          {/* How It Works Section */}
          <section id="how-it-works" className="container mx-auto px-4 py-20 md:py-32 bg-[#0D0D0D] rounded-[2.5rem] border border-white/5 relative overflow-hidden">
            
            {/* Efeito de partículas de fundo */}
            <ParticleBackground></ParticleBackground>
            <div className="text-center mb-20 space-y-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 px-4 bg-gradient-to-r from-[#2A7AFF] via-[#FF4D4D] to-[#FF4D4D] bg-clip-text text-transparent">
                Como Funciona?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed">
                Um processo simples e transparente para transformar sua visão em realidade
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
              {/* Linha de conexão animada aprimorada */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2A7AFF] via-[#B74DFF] to-[#FF4D4D] -translate-y-1/2 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-[length:200%_100%] animate-flow-line bg-gradient-to-r from-[#2A7AFF] via-[#B74DFF] to-[#FF4D4D]"></div>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
              </div>

              {[
                { 
                  icon: MessageSquare, 
                  title: "Conversa Sem Compromisso", 
                  text: "Entendemos suas necessidades e objetivos de negócio em uma reunião descontraída.",
                  gradient: "from-[#2A7AFF] to-[#2A7AFF]/80"
                },
                { 
                  icon: FileCheck, 
                  title: "Projeto Sob Medida", 
                  text: "Criamos uma solução personalizada com protótipos para sua aprovação.",
                  gradient: "from-[#2A7AFF] to-[#B74DFF]"
                },
                { 
                  icon: Code, 
                  title: "Desenvolvimento", 
                  text: "Implementação transparente com atualizações semanais e testes rigorosos.",
                  gradient: "from-[#B74DFF] to-[#FF4D4D]"
                },
                { 
                  icon: Rocket, 
                  title: "Lançamento & Crescimento", 
                  text: "Publicação do projeto e estratégias contínuas para escalar seus resultados.",
                  gradient: "from-[#FF4D4D] to-[#FF4D4D]/80"
                }
              ].map((step, index) => (
                <div key={index} className="relative z-10 group cursor-pointer ">
                {/* Card sólido sem transparência */}
                <div className="flex flex-col items-center text-center p-6 bg-[#0D0D0D] rounded-2xl border border-white/10 hover:border-[#2A7AFF]/50 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-[#2A7AFF]/20  ">
                  
                  {/* Efeito de brilho dinâmico (mantido mas com fundo sólido) */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-[#0D0D0D] rounded-2xl"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(200px_at_50%_50%,rgba(42,122,255,0.1),transparent)]"></div>
                  </div>

                  <div className="relative mb-5">
                    <div className="absolute -inset-2 bg-gradient-to-br from-[#2A7AFF] to-[#FF4D4D] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.gradient} shadow-lg relative z-10`}>
                      <step.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
              
                  <div className="space-y-3 relative z-10">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-[#2A7AFF] via-[#FF4D4D] to-[#FF4D4D] bg-clip-text text-transparent">
                      {step.title}
                    </h3>
                    <p className="text-gray-300/90 text-sm leading-relaxed text-balance">
                      {step.text}
                    </p>
                  </div>
              
                  <div className="mt-5 w-7 h-7 rounded-full bg-[#2A7AFF] flex items-center justify-center text-white text-sm font-medium border border-white/20 relative z-10">
                    {index + 1}
                  </div>
                </div>
              </div>
              ))}
            </div>

            <div className="text-center mt-20 relative z-10">
              <Button className="group relative overflow-hidden bg-gradient-to-br from-[#2A7AFF] via-[#3B82F6] to-[#1D4ED8] hover:bg-[length:400%_400%] text-white px-12 py-8 text-2xl rounded-xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#1D4ED8]/50 cursor-pointer">
                <div className="absolute inset-0 bg-[radial-gradient(300px_at_50%_150%,rgba(255,255,255,0.2),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                  <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] bg-[conic-gradient(from_90deg_at_50%_50%,#2A7AFF,#3B82F6,#1D4ED8,transparent)] animate-rotate-bg -translate-x-1/2 -translate-y-1/2" />
                </div>

                <Link id="btnWppSchedule" href="https://wa.me/5575983252987?text=Olá, quero agendar uma reunião sobre desenvolvimento web" target="_blank">
                  <div className="relative z-20 flex items-center gap-4">
                    <span className="text-balance bg-gradient-to-r from-white via-[#BFDBFE] to-white bg-clip-text text-transparent font-bold tracking-wide drop-shadow-md">
                      Agendar conversa
                    </span>
                    <ChevronRight className="h-8 w-8 text-[#BFDBFE] transition-transform group-hover:translate-x-3 group-hover:scale-110 duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]" />
                  </div>
                </Link>

                <div className="absolute inset-0 rounded-xl border-2 border-[#2A7AFF]/30 group-hover:border-[#BFDBFE]/50 transition-all duration-500" />
              </Button>
            </div>
          </section>
        </ScrollAnimation>

        
        <ScrollAnimation distance="30px" duration="0.8s" className="min-h-[200px]">
        {/* Lead Capture Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="bg-gradient-to-r bg-[#0D0D0D] rounded-[2.5rem] border border-white/5 p-4 py-8  md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Pronto para impulsionar seu negócio?</h2>
                <p className="text-gray-300">
                  Preencha o formulário e receba uma proposta personalizada para sua empresa. Nossa equipe entrará em contato em até 24 horas.
                </p>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#2A7AFF] h-5 w-5" />
                  <span className="text-gray-300">Atendimento personalizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#2A7AFF] h-5 w-5" />
                  <span className="text-gray-300">Orçamento detalhado sem compromisso</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#2A7AFF] h-5 w-5" />
                  <span className="text-gray-300">Consultoria inicial gratuita</span>
                </div>
              </div>
              <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
                <ContactForm></ContactForm>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        <ScrollAnimation distance="30px" duration="0.8s" className="min-h-[200px]">

        <section id="services" className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mais do que Sites: Soluções Completas</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Oferecemos um conjunto completo de serviços para impulsionar seu negócio online
            </p>
          </div>
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="web" className="data-[state=active]:bg-[#2A7AFF] data-[state=active]:text-white cursor-pointer">Web Design</TabsTrigger>
              <TabsTrigger value="seo" className="data-[state=active]:bg-[#2A7AFF] data-[state=active]:text-white cursor-pointer">SEO & Tráfego</TabsTrigger>
              <TabsTrigger value="marketing" className="data-[state=active]:bg-[#2A7AFF] data-[state=active]:text-white cursor-pointer">Marketing Digital</TabsTrigger>
              <TabsTrigger value="support" className="data-[state=active]:bg-[#2A7AFF] data-[state=active]:text-white cursor-pointer">Manutenção</TabsTrigger>
            </TabsList>
            <TabsContent value="web" className="bg-[#0D0D0D] rounded-[2.5rem] border border-white/5  p-6 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Web Design Profissional</h3>
                  <p className="text-gray-300 mb-6">
                    Criamos sites e e-commerces que não apenas impressionam visualmente, mas também são otimizados para conversão e resultados.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Landing Pages de alta conversão</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>E-commerces completos e otimizados</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Sites institucionais modernos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Design responsivo para todos os dispositivos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Experiência do usuário (UX) otimizada</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2A7AFF] to-[#FF4D4D] rounded-lg blur opacity-30"></div>
                  <div className="relative bg-[#0A0A0A]/90 rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]">
                    <div className="relative pt-[66.66%]">
                      <Image 
                        src="/site3.webp" 
                        fill
                        alt="Web Design" 
                        className="object-fit-cover p-4" 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={100}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="seo" className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">SEO & Tráfego Orgânico</h3>
                  <p className="text-gray-300 mb-6">
                    Posicione seu site nos primeiros resultados do Google e atraia tráfego qualificado de forma orgânica.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Otimização on-page e off-page</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Pesquisa de palavras-chave estratégicas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Criação de conteúdo otimizado para SEO</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Análise de concorrentes e benchmarking</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Relatórios mensais de desempenho</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2A7AFF] to-[#FF4D4D] rounded-lg blur opacity-30"></div>
                  <div className="relative bg-[#0A0A0A]/90 rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]">
                    <div className="relative pt-[66.66%]"> {/* Container de aspecto 3:2 (600x400) */}
                      <Image 
                        src="/seo.webp" 
                        fill
                        alt="SEO" 
                        className="object-fit-cover p-4" 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={100}
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 border-2 border-white/5 group-hover:border-[#2A7AFF]/30 transition-all duration-300 rounded-xl" />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="marketing" className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Marketing Digital Completo</h3>
                  <p className="text-gray-300 mb-6">
                    Estratégias de marketing digital que geram resultados mensuráveis e impulsionam seu negócio.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Gestão de redes sociais</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Campanhas de Google Ads e Meta Ads</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Email marketing e automação</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Marketing de conteúdo</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Análise de dados e otimização contínua</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2A7AFF] to-[#FF4D4D] rounded-lg blur opacity-30"></div>
                  <div className="relative bg-[#0A0A0A]/90 rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]">
                    <div className="relative pt-[66.66%]"> {/* Container de aspecto 3:2 (600x400) */}
                      <Image 
                        src="/marketing.webp" 
                        fill
                        alt="Marketing Digital" 
                        className="object-fit-cover p-4" 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={100}
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 border-2 border-white/5 group-hover:border-[#2A7AFF]/30 transition-all duration-300 rounded-xl" />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="support" className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Manutenção e Suporte</h3>
                  <p className="text-gray-300 mb-6">
                    Mantenha seu site sempre atualizado, seguro e funcionando perfeitamente com nossos planos de manutenção.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Atualizações de segurança</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Backup regular do site</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Monitoramento de performance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Suporte técnico prioritário</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-[#2A7AFF] h-5 w-5 flex-shrink-0" />
                      <span>Pequenas alterações e ajustes</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2A7AFF] to-[#FF4D4D] rounded-lg blur opacity-30"></div>
                  <div className="relative bg-[#0A0A0A]/90 rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]">
                    <div className="relative pt-[66.66%]"> {/* Container de aspecto 3:2 (600x400) */}
                      <Image 
                        src="/manutencao.webp" 
                        fill
                        alt="Manutenção" 
                        className="object-fit-cover p-4" 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={100}
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 border-2 border-white/5 group-hover:border-[#2A7AFF]/30 transition-all duration-300 rounded-xl" />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        </ScrollAnimation>

        <ScrollAnimation distance="30px" duration="0.8s" className="min-h-[200px]">

          <section id="faq" className="container mx-auto px-4 py-16 md:py-28 lg:py-32">
            <div className="text-center mb-16 lg:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
                Perguntas Frequentes
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto lg:text-lg">
                Tire suas dúvidas sobre nossos serviços
              </p>
            </div>
            
            <div className="max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4 md:space-y-6">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="bg-[#111] rounded-xl border border-gray-800 px-6 md:px-8 transition-all hover:border-[#2A7AFF]/30 "
                  >
                    <AccordionTrigger className="text-left md:text-lg font-medium py-4 hover:text-[#2A7AFF] cursor-pointer">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 md:text-base pb-4 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation distance="30px" duration="0.8s" className="min-h-[200px]">

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#2A7AFF] to-[#FF4D4D] rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pronto para Dominar o Digital?</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
                A Primeira Conversa é Grátis e Sem Compromisso!
              </p>
              <Link id="btnWppContact" target="_blank" href="https://wa.me/5575983252987?text=Ol%C3%A1,%20tenho%20interesse%20em%20criar%20um%20site%20com%20voc%C3%AAs">
                <Button className="bg-white text-[#0A0A0A] hover:bg-white/90 px-8 py-6 text-lg rounded-lg cursor-pointer transition-all duration-500 hover:scale-105">
                  Falar conosco agora <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        </ScrollAnimation>
      </main>

      <footer className="bg-[#0D0D0D] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
              <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <a href="/" className="relative block">
                <img 
                  src="/marketilize.webp"
                  alt="Marketilize Logo"
                  className="w-48 h-auto rounded-full hover:scale-105 transition-transform"
                />
              </a>
            </div>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando ideias em resultados digitais desde 2024.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/marketilize/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:suporteconstsoft@gmail.com" className="text-gray-400 hover:underline">
                    suporteconstsoft@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+5575983252987" className="text-gray-400 hover:underline">
                    (75) 9 8325-2987
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Feira+de+Santana,+BA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:underline"
                  >
                    Feira de Santana, BA
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Marketilize. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        <Link id="btnWppFixed" target="_blank" href="https://wa.me/5575983252987?text=Ol%C3%A1,%20tenho%20interesse%20em%20criar%20um%20site%20com%20voc%C3%AAs">
          <Button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#2A7AFF] to-[#FF4D4D] p-0 shadow-lg cursor-pointer hover:scale-105">
          <FaWhatsapp className="text-6xl" />
          </Button>
        </Link>
      </div>

      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <div className="max-w-[700px] w-full">
          <DisplayedText
            text="Pronto pra alavancar seu negócio?"
            className="text-start text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#2A7AFF] to-[#FF4D4D] bg-clip-text text-transparent py-3"
            style={{
              letterSpacing: '0.05em',
              textShadow: '0px 2px 8px rgba(42, 122, 255, 0.15)',
              lineHeight: '1'
            }}
            id="tituloPrincipal"
            onComplete={handleTextComplete}
          />

          {showButton && (
            <button
              onClick={handleCloseModal}
              className={`
                group relative
                mt-8 
                cursor-pointer
                bg-gradient-to-r from-red-500 to-[#ff4d4d] 
                hover:from-[#ff4d4d] hover:to-red-600
                text-white font-semibold 
                py-2 px-6 
                rounded-xl 
                border border-transparent
                hover:border-red-300/30
                shadow-lg shadow-red-500/20 
                hover:shadow-xl hover:shadow-red-500/30
                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                transform 
                ${buttonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                hover:scale-[1.02] 
                active:scale-95
              `}
            >
              {/* Efeito brilho suave no hover */}
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              
              {/* Texto com pequeno movimento no hover */}
              <Link id="btnWppModal" target="_blank" href="https://wa.me/5575983252987?text=Ol%C3%A1,%20tenho%20interesse%20em%20criar%20um%20site%20com%20voc%C3%AAs">
                <span className="relative flex items-center gap-2">
                    Comece agora
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mt-0.5 transform group-hover:translate-x-1 transition-transform"
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                </span>
              </Link>
            </button>
          )}
        </div>
      </Modal>
    </div>
  )
}
