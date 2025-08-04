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
  TrendingUp,
  FileCheck,
  Rocket,
  CheckCircle,
  MessageCircle, Search, Megaphone, Settings, Palette
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DisplayedText from "@/components/animations/DisplayedText"
import { Modal } from "@/components/ui/modal"
import { ScrollAnimation } from "@/components/animations/ScrollAnimation";
import { ContactForm } from "../services/ContactForm";
import { faqItems } from "@/lib/ArrayFAQ";
import { Card, CardContent } from "@/components/ui/card"
import { ParticleBackground } from "@/components/animations/ParticleBackground";
import HowItWorksSection from "./sections/how-it-works-section";


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


 const services = [
    {
      id: "web",
      title: "Desenvolvimento Web",
      icon: Code,
      color: "from-[#FF4D4D] to-[#FF6B6B]",
      description: "Sites e e-commerces de alta performance",
      features: [
        "Landing Pages de alta conversão",
        "E-commerces completos e otimizados",
        "Sites institucionais modernos",
        "Design responsivo para todos os dispositivos",
        "Experiência do usuário (UX) otimizada",
        "Integração com sistemas externos",
      ],
      link: "https://en.wikipedia.org/wiki/Web_development"
    },
    {
      id: "seo",
      title: "SEO & Tráfego",
      icon: Search,
      color: "from-[#2A7AFF] to-[#4F94FF]",
      description: "Posicionamento orgânico no Google",
      features: [
        "Otimização on-page e off-page",
        "Pesquisa de palavras-chave estratégicas",
        "Criação de conteúdo otimizado para SEO",
        "Análise de concorrentes e benchmarking",
        "Relatórios mensais de desempenho",
        "Link building e autoridade de domínio",
      ],
      link: "https://pt.wikipedia.org/wiki/Otimiza%C3%A7%C3%A3o_para_motores_de_busca"
    },
    {
      id: "marketing",
      title: "Marketing Digital",
      icon: Megaphone,
      color: "from-[#FF4D4D] to-[#FF6B6B]",
      description: "Estratégias que geram resultados",
      features: [
        "Gestão de redes sociais",
        "Campanhas de Google Ads e Meta Ads",
        "Email marketing e automação",
        "Marketing de conteúdo",
        "Análise de dados e otimização contínua",
        "Funis de vendas e conversão",
      ],
      link: "https://pt.wikipedia.org/wiki/Marketing_digital"
    },
    {
      id: "support",
      title: "Manutenção",
      icon: Settings,
      color: "from-[#2A7AFF] to-[#4F94FF]",
      description: "Suporte técnico especializado",
      features: [
        "Atualizações de segurança",
        "Backup regular do site",
        "Monitoramento de performance",
        "Suporte técnico prioritário",
        "Pequenas alterações e ajustes",
        "Otimização contínua de velocidade",
      ],
      link: "https://pt.wikipedia.org/wiki/Manuten%C3%A7%C3%A3o_de_software"
    },
    {
      id: "design",
      title: "Design",
      icon: Palette,
      color: "from-[#FF4D4D] to-[#FF6B6B]",
      description: "Identidade visual marcante",
      features: [
        "Identidade visual completa",
        "Logotipos e branding",
        "Material gráfico para redes sociais",
        "Banners e peças publicitárias",
        "Catálogos e apresentações",
        "UI/UX Design para aplicações",
      ],
      link: "https://pt.wikipedia.org/wiki/Design_visual"
    },
  ]

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
    <>
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
                
                <Link id="btnWppHero" target="_blank" href="https://form.typeform.com/to/rEnDcO6y">
                  <Button 
                    className="bg-gradient-to-r from-[#FF4D4D] to-[#FF6B6B] hover:from-[#FF6B6B] hover:to-[#FF4D4D] font-bold p-8 cursor-pointer hover:scale-105 transition-all duration-500"
                  >
                    <span className="flex items-center gap-3 text-xl">
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
            <div className=" mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 px-4">
                Por Que Escolher a Marketilize?
              </h2>
              
              <p className="text-gray-400 max-w-2xl px-4 text-lg md:text-xl">
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
          <HowItWorksSection />
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
              <div className="flex justify-end">
                <div className="bg-[#111] w-full max-w-[500px] p-6 rounded-xl border border-gray-800 ">
                  <ContactForm></ContactForm>
                </div>
              </div>
            </div>
          </div>
        </section>
        </ScrollAnimation>

        <ScrollAnimation distance="30px" duration="0.8s" className="min-h-[200px]">
          <section id="services" className="container mx-auto px-4 py-16 md:py-24">
            <div className=" mb-16 px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Mais do que Sites: Soluções Completas
              </h2>
              <p className="text-gray-400 max-w-3xl  text-lg md:text-xl leading-relaxed">
                Oferecemos um conjunto completo de serviços para impulsionar seu negócio online com estratégias comprovadas e
                resultados mensuráveis
              </p>
            </div>

            <Tabs defaultValue="web" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-12 bg-[#0A0A0A] border border-white/10 rounded-2xl p-2 h-auto">
                {services.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      className={`flex flex-col items-center gap-2 py-4 px-3 rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r ${service.color} cursor-pointer data-[state=active]:shadow-lg hover:bg-white/5 group`}
                    >
                      <IconComponent className="h-5 w-5 md:h-6 md:w-6 group-data-[state=active]:text-white transition-colors" />
                      <span className="text-xs md:text-sm font-medium group-data-[state=active]:text-white transition-colors">
                        {service.title}
                      </span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>

              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <TabsContent key={service.id} value={service.id} className="mt-0">
                    <Card className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] border-white/10 rounded-3xl overflow-hidden">
                      <CardContent className="p-8 md:p-12">
                        <div className="text-center mb-12">
                          <div
                            className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} mb-6 shadow-2xl`}
                          >
                            <IconComponent className="h-10 w-10 text-white" />
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {service.features.map((feature, index) => (
                            <div
                              key={index}
                              className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                            >
                              <div
                                className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}
                              >
                                <CheckCircle className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-12 text-center">
                          <Link href={service.link} target="_blank"
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${service.color} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105`}
                          >
                            <IconComponent className="h-5 w-5" />
                            <span>Saiba mais sobre {service.title}</span>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )
              })}
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

        <hr className="max-w-[70%] mx-auto"/>
        <ScrollAnimation distance="30px" duration="0.8s" className="min-h-[200px]">

        <section className="py-16 md:py-24 ">
          <div className="container mx-auto px-4">
            <div className=" bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-12 md:text-center max-w-[600px] mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white ">Pronto para Dominar o Digital?</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg ">
                A Primeira Conversa é Grátis e Sem Compromisso!
              </p>
              <Link id="btnWppContact" target="_blank" href="https://form.typeform.com/to/rEnDcO6y">
                <Button className="bg-gradient-to-r from-[#FF4D4D] to-[#FF6B6B] hover:from-[#FF6B6B] hover:to-[#FF4D4D] font-bold text-white px-8 py-6 text-lg rounded-lg cursor-pointer transition-all duration-500 hover:scale-105 w-full md:w-auto">
                  <MessageCircle/>SIM <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <br />
        <br />
        </ScrollAnimation>
      </main>
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
    </>
  )
}
