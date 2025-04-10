"use client";

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
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2A7AFF] to-[#FF4D4D] rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#2A7AFF] to-[#FF4D4D] flex items-center justify-center shadow-lg hover:shadow-[#2A7AFF]/30 transition-shadow">
                <span className="text-xl font-semibold text-white drop-shadow-md">M</span>
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#2A7AFF] via-[#FF4D4D] to-[#FF4D4D] bg-clip-text text-transparent tracking-tight">
              Marketilize
              <span className="ml-2 text-[#FF4D4D] text-xl align-super">®</span>
            </span>
          </div>
        </nav>
      </header>

      <ScrollHeader />
      <main>
        <ScrollAnimation
          animateIn="animate-fade-in animate-duration-1000"
          animateOut="animate-fade-out animate-duration-500"
        >
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 md:py-24 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Coluna Esquerda - Texto e Botão */}
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
                            src="/site1.png"
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
        
        <ScrollAnimation
            animateIn="animate-slide-in-left"
            animateOut="animate-slide-out-right"
            threshold={0.5}
            rootMargin="-50px"
            className=""
          >
          {/* Benefits Section */}
          <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Escolher a Marketilize?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Não somos apenas desenvolvedores, somos parceiros do seu crescimento
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-[#2A7AFF]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#2A7AFF]/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="text-[#2A7AFF]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Design Profissional que Encanta</h3>
                <p className="text-gray-400">Sites responsivos e modernos que convertem visitantes em clientes.</p>
              </div>
              <div className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-[#FF4D4D]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#FF4D4D]/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="text-[#FF4D4D]" />
                </div>
                <h3 className="text-xl font-bold mb-2">SEO Integrado para Você ser Encontrado</h3>
                <p className="text-gray-400">Otimização para mecanismos de busca desde o primeiro dia.</p>
              </div>
              <div className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-[#2A7AFF]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#2A7AFF]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-[#2A7AFF]" />
                  <Zap className="text-[#2A7AFF] absolute h-4 w-4" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sites Rápidos e Seguros</h3>
                <p className="text-gray-400">Performance otimizada e proteção contra ameaças digitais.</p>
              </div>
              <div className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-[#FF4D4D]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#FF4D4D]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF4D4D]"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Marketing Digital Pronto para Ação</h3>
                <p className="text-gray-400">Estratégias completas para atrair e converter seu público-alvo.</p>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="animate-fade-in animate-duration-1000"
          animateOut="animate-fade-out animate-duration-500"
        >
        {/* How It Works Section */}
        <section id="how-it-works" className="container mx-auto px-4 py-20 md:py-32 bg-[#0D0D0D] rounded-[2.5rem] border border-white/5">

          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2A7AFF] via-[#FF4D4D] to-[#FF4D4D] bg-clip-text text-transparent">
              Como Funciona
            </h2>
            <p className="text-gray-400/90 text-xl max-w-3xl mx-auto leading-relaxed">
              Um processo simples e transparente para transformar sua visão em realidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Linha de conexão animada */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#2A7AFF] via-[#B74DFF] to-[#FF4D4D] -translate-y-1/2 z-0 overflow-hidden">
              <div className="absolute inset-0 bg-[length:200%_100%] animate-flow-line"></div>
            </div>

            {[
              { icon: MessageSquare, title: "Conversa Sem Compromisso", text: "Entendemos suas necessidades e objetivos de negócio." },
              { icon: FileCheck, title: "Projeto Sob Medida", text: "Criamos uma solução personalizada para seu negócio." },
              { icon: Code, title: "Desenvolvimento com Transparência", text: "Acompanhe cada etapa do processo de criação." },
              { icon: Rocket, title: "Seu Site no Ar e Gerando Leads", text: "Lançamento e estratégias contínuas de crescimento." }
            ].map((step, index) => (
              <div key={index} className="relative z-10 group">
                <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#2A7AFF]/30 transition-all duration-300 hover:bg-[#0D0D0D]/90 hover:-translate-y-2">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(400px_at_50%_50%,#2A7AFF/10%,transparent)]"></div>
                  
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-br from-[#2A7AFF] to-[#FF4D4D] rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${
                      index === 0 ? 'from-[#2A7AFF] to-[#2A7AFF]/80' :
                      index === 1 ? 'from-[#2A7AFF] to-[#B74DFF]' :
                      index === 2 ? 'from-[#B74DFF] to-[#FF4D4D]' :
                      'from-[#FF4D4D] to-[#FF4D4D]/80'
                    } shadow-2xl shadow-[#2A7AFF]/20`}>
                      <step.icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-[#2A7AFF] via-[#FF4D4D] to-[#FF4D4D] bg-clip-text text-transparent">
                    {step.title}
                  </h3>
                  <p className="text-gray-400/80 leading-relaxed text-balance">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Button className="group relative overflow-hidden bg-gradient-to-br from-[#2A7AFF] via-[#3B82F6] to-[#1D4ED8] hover:bg-[length:400%_400%] text-white px-10 py-7 text-2xl rounded-xl transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#1D4ED8]/50 cursor-pointer">
              {/* Efeito de profundidade */}
              <div className="absolute inset-0 bg-[radial-gradient(200px_at_50%_150%,rgba(255,255,255,0.15),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Camada de brilho dinâmico */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,#2A7AFF,#3B82F6,#1D4ED8,transparent)] animate-rotate-bg -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Conteúdo principal */}
              <div className="relative z-20 flex items-center gap-4">
                <span className="text-balance bg-gradient-to-r from-white via-[#BFDBFE] to-white bg-clip-text text-transparent font-semibold tracking-wide drop-shadow-md">
                  Agendar conversa
                </span>
                <ChevronRight className="h-8 w-8 text-[#BFDBFE] transition-transform group-hover:translate-x-3 group-hover:scale-110 duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]" />
              </div>

              {/* Borda interativa */}
              <div className="absolute inset-0 rounded-xl border-2 border-[#2A7AFF]/20 group-hover:border-[#BFDBFE]/40 transition-all duration-500" />

              {/* Efeito de partículas aquáticas */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                <div className="absolute top-0 left-1/4 w-1 h-1 bg-[#BFDBFE] rounded-full animate-bubble" />
                <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-[#BFDBFE] rounded-full animate-bubble-delayed" />
              </div>
            </Button>
          </div>
        </section>
        </ScrollAnimation>

        
        <ScrollAnimation
            animateIn="animate-slide-in-left"
            animateOut="animate-slide-out-right"
            threshold={0.5}
            rootMargin="-50px"
            className=""
          >
        {/* Lead Capture Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="bg-gradient-to-r from-[#0F1A2A] to-[#1A0F0F] rounded-3xl p-4 py-8  md:p-12">
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
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nome</label>
                    <Input id="name" placeholder="Seu nome completo" className="bg-[#0A0A0A] border-gray-800" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">E-mail</label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="bg-[#0A0A0A] border-gray-800" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">Telefone</label>
                    <Input id="phone" placeholder="(00) 00000-0000" className="bg-[#0A0A0A] border-gray-800" />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-gray-400 mb-1">Tipo de Negócio</label>
                    <Select>
                      <SelectTrigger className="bg-[#0A0A0A] border-gray-800">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="landing page">Landing Page</SelectItem>
                        <SelectItem value="catalogo digital">Catálogo Digital</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="service">Empresa de Serviços</SelectItem>
                        <SelectItem value="blog">Blog/Conteúdo</SelectItem>
                        <SelectItem value="institutional">Site Institucional</SelectItem>
                        <SelectItem value="other">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Mensagem (opcional)</label>
                    <Textarea id="message" placeholder="Conte-nos um pouco sobre seu projeto" className="bg-[#0A0A0A] border-gray-800" />
                  </div>
                  <Button className="w-full bg-[#FF4D4D] hover:bg-[#FF4D4D]/90 text-white py-6 cursor-pointer">
                    Quero Minha Proposta Personalizada
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Seus dados estão protegidos. Nada de spam!
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        {/* Testimonials Section */}
        {/* <section id="testimonials" className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Negócios que Decolaram com a Marketilize</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Veja o que nossos clientes têm a dizer sobre nossas soluções
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <Image 
                  src="/placeholder.svg?height=60&width=60" 
                  width={60} 
                  height={60} 
                  alt="Cliente" 
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-bold">Ana Silva</h4>
                  <p className="text-sm text-gray-400">CEO, TechStore</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Nosso e-commerce cresceu 200% em 3 meses com o SEO deles! A equipe da Marketilize entendeu perfeitamente nossas necessidades e entregou além das expectativas."
              </p>
              <div className="flex text-[#FF4D4D]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
            </div>
            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <Image 
                  src="/placeholder.svg?height=60&width=60" 
                  width={60} 
                  height={60} 
                  alt="Cliente" 
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-bold">Carlos Mendes</h4>
                  <p className="text-sm text-gray-400">Fundador, Arquitetura Moderna</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "O site que a Marketilize desenvolveu para nós não só é visualmente impressionante, mas também trouxe resultados concretos. Nossos agendamentos online aumentaram em 150%!"
              </p>
              <div className="flex text-[#FF4D4D]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
            </div>
            <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <Image 
                  src="/placeholder.svg?height=60&width=60" 
                  width={60} 
                  height={60} 
                  alt="Cliente" 
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-bold">Mariana Costa</h4>
                  <p className="text-sm text-gray-400">Diretora de Marketing, FashionStore</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "A estratégia de marketing digital implementada pela Marketilize transformou nossa presença online. Nosso ROI em anúncios aumentou 300% em apenas 2 meses!"
              </p>
              <div className="flex text-[#FF4D4D]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  stroke="currentColor" 
                  strokeWidth="0" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
            </div>
          </div>
        </section> */}

        <ScrollAnimation
          animateIn="animate-fade-in animate-duration-1000"
          animateOut="animate-fade-out animate-duration-500"
        >
        {/* Services Section */}
        <section id="services" className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mais do que Sites: Soluções Completas</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Oferecemos um conjunto completo de serviços para impulsionar seu negócio online
            </p>
          </div>
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="web" className="data-[state=active]:bg-[#2A7AFF] data-[state=active]:text-white">Web Design</TabsTrigger>
              <TabsTrigger value="seo" className="data-[state=active]:bg-[#2A7AFF] data-[state=active]:text-white">SEO & Tráfego</TabsTrigger>
              <TabsTrigger value="marketing" className="data-[state=active]:bg-[#2A7AFF] data-[state=active]:text-white">Marketing Digital</TabsTrigger>
              <TabsTrigger value="support" className="data-[state=active]:bg-[#2A7AFF] data-[state=active]:text-white">Manutenção</TabsTrigger>
            </TabsList>
            <TabsContent value="web" className="bg-[#111] p-6 rounded-xl border border-gray-800">
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
                    <div className="relative pt-[66.66%]"> {/* Container de aspecto 3:2 (600x400) */}
                      <Image 
                        src="/site3.png" 
                        fill
                        alt="Web Design" 
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
                        src="/seo.jpg" 
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
                        src="/marketing.jpg" 
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
                        src="/manutencao.jpg" 
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

        <ScrollAnimation
            animateIn="animate-slide-in-left"
            animateOut="animate-slide-out-right"
            threshold={0.5}
            rootMargin="-50px"
            className=""
          >
        {/* FAQ Section */}
        <section id="faq" className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-[#111] rounded-xl border border-gray-800 px-6">
                <AccordionTrigger className="text-left">Quanto tempo leva para desenvolver um site?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  O prazo de desenvolvimento varia de acordo com a complexidade do projeto. Uma landing page simples pode levar de 1 a 2 semanas, enquanto um e-commerce completo pode levar de 4 a 8 semanas. Durante nossa conversa inicial, forneceremos um cronograma detalhado para seu projeto específico.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-[#111] rounded-xl border border-gray-800 px-6">
                <AccordionTrigger className="text-left">O SEO já está incluído no pacote?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Sim! Todos os nossos sites são desenvolvidos com otimização SEO básica incluída. Isso envolve estrutura adequada de URLs, meta tags, velocidade de carregamento otimizada e código limpo. Para estratégias de SEO mais avançadas e contínuas, oferecemos pacotes específicos que podem ser contratados separadamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-[#111] rounded-xl border border-gray-800 px-6">
                <AccordionTrigger className="text-left">Posso redesenhar meu site atual com vocês?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Absolutamente! Realizamos redesigns de sites existentes mantendo ou melhorando o SEO atual. Analisamos o que está funcionando bem no seu site atual e identificamos oportunidades de melhoria tanto no design quanto na performance e conversão.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-[#111] rounded-xl border border-gray-800 px-6">
                <AccordionTrigger className="text-left">Como funciona o processo de pagamento?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Trabalhamos com um modelo de pagamento em etapas. Geralmente, 30% do valor é pago no início do projeto, 30% na aprovação do design e 40% na entrega final. Para projetos maiores, podemos criar um plano de pagamento personalizado. Também oferecemos opções de parcelamento em até 12x no cartão de crédito.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-[#111] rounded-xl border border-gray-800 px-6">
                <AccordionTrigger className="text-left">Vocês oferecem suporte após o lançamento do site?</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Sim, oferecemos planos de manutenção mensal que incluem atualizações de segurança, backups regulares, pequenas alterações de conteúdo e suporte técnico prioritário. Isso garante que seu site permaneça seguro, atualizado e funcionando perfeitamente.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        </ScrollAnimation>

        
        <ScrollAnimation
          animateIn="animate-fade-in animate-duration-1000"
          animateOut="animate-fade-out animate-duration-500"
        >
        {/* Final CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#2A7AFF] to-[#FF4D4D] rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pronto para Dominar o Digital?</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
                A Primeira Conversa é Grátis e Sem Compromisso!
              </p>
              <Button className="bg-white text-[#0A0A0A] hover:bg-white/90 px-8 py-6 text-lg rounded-lg cursor-pointer">
                Falar com um Especialista Agora <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        </ScrollAnimation>
      </main>

      {/* Footer */}
      <footer className="bg-[#0D0D0D] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#2A7AFF] to-[#FF4D4D] flex items-center justify-center text-white font-bold">M</div>
                <span className="text-xl font-bold">Marketilize</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando ideias em resultados digitais desde 2015.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">E-commerce</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEO</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Marketing Digital</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Manutenção</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Portfólio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">contato@marketilize.com</li>
                <li className="text-gray-400">(11) 99999-9999</li>
                <li className="text-gray-400">São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Marketilize. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="w-14 h-14 rounded-full bg-gradient-to-r from-[#2A7AFF] to-[#FF4D4D] p-0 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </Button>
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
            </button>
          )}
        </div>
      </Modal>
    </div>
  )
}
