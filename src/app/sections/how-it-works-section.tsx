"use client"

import { MessageSquare, FileCheck, Code, Rocket, TrendingUp, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"



const steps = [
  {
    icon: MessageSquare,
    title: "Conversa Sem Compromisso",
    text: "Entendemos suas necessidades e objetivos de negócio em uma reunião descontraída.",
    gradient: "from-[#2A7AFF] to-[#2A7AFF]/80",
  },
  {
    icon: FileCheck,
    title: "Projeto Sob Medida",
    text: "Criamos uma solução personalizada com protótipos para sua aprovação.",
    gradient: "from-[#2A7AFF] to-[#B74DFF]",
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    text: "Implementação transparente com atualizações semanais e testes rigorosos.",
    gradient: "from-[#B74DFF] to-[#FF4D4D]",
  },
  {
    icon: Rocket,
    title: "Lançamento & Crescimento",
    text: "Publicação do projeto e estratégias contínuas para escalar seus resultados.",
    gradient: "from-[#FF4D4D] to-[#FF4D4D]/80",
  },
]

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="container mx-auto px-4 py-20 md:py-32  rounded-[2.5rem] relative overflow-hidden"
    >

      {/* Header da seção */}
      <div className="mb-20 space-y-6 relative z-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 px-4">
            Como Funciona?
          </h2>
          <p className="text-gray-400 max-w-2xl px-4 text-lg md:text-xl">
            Um processo simples e transparente para transformar sua visão em realidade
          </p>
        </div>

        <div className="px-4">
          <Button className="group bg-gradient-to-r from-[#FF4D4D] to-[#FF6B6B] hover:from-[#FF6B6B] hover:to-[#FF4D4D] font-bold text-xl px-8 py-7 cursor-pointer hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#FF4D4D]/30 rounded-xl  border border-white/10">
          <Link
            id="btnWppSchedule"
            href="https://form.typeform.com/to/rEnDcO6y"
            target="_blank"
            className="flex items-center gap-4"
          >
            <TrendingUp className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-gradient-to-r from-white via-[#BFDBFE] to-white bg-clip-text text-transparent tracking-wide drop-shadow-md">
              COMEÇAR
            </span>
            <ChevronRight className="h-6 w-6 text-[#BFDBFE] transition-transform group-hover:translate-x-2 group-hover:scale-110 duration-300 ease-out" />
          </Link>
        </Button>
        </div>
      </div>

      {/* Grid dos passos */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
        {/* Linha de conexão animada */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1.5 -translate-y-1/2 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A7AFF] via-[#B74DFF] to-[#FF4D4D] rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A7AFF] via-[#B74DFF] to-[#FF4D4D] rounded-full animate-pulse opacity-60" />
          </div>
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full" />
        </div>

        {/* Cards dos passos */}
        {steps.map((step, index) => (
          <div key={index} className="relative z-10 group cursor-pointer">
            <div className="flex flex-col items-center text-center p-6 bg-[#0D0D0D] rounded-2xl border border-white/10 hover:border-[#2A7AFF]/50 transition-all duration-500 hover:-translate-y-3 shadow-xl hover:shadow-2xl hover:shadow-[#2A7AFF]/20 backdrop-blur-sm">
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[#0D0D0D] rounded-2xl" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(300px_at_50%_50%,rgba(42,122,255,0.15),transparent)]" />
              </div>

              {/* Ícone com efeito */}
              <div className="relative mb-6">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#2A7AFF] to-[#FF4D4D] rounded-full blur-lg opacity-20 group-hover:opacity-50 transition-all duration-500 animate-pulse" />
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.gradient} shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Conteúdo do card */}
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl font-bold text-white bg-clip-text group-hover:scale-105 transition-transform duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300/90 text-sm leading-relaxed text-balance min-h-[3rem] flex items-center">
                  {step.text}
                </p>
              </div>

              {/* Número do passo */}
              <div className="mt-6 w-8 h-8 rounded-full bg-gradient-to-r from-[#2A7AFF] to-[#B74DFF] flex items-center justify-center text-white text-sm font-bold border border-white/20 relative z-10 group-hover:scale-110 transition-all duration-300 shadow-lg">
                {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
