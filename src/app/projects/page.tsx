"use client"

import { ShoppingCart, Globe, Rocket, ArrowUpRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"



const projects = [
  {
    id: 1,
    title: "Loja Virtual",
    description:
      "E-commerce completo com carrinho, pagamentos e gestão de produtos. Ideal para empresas que querem vender online.",
    image: "/placeholder.svg?height=400&width=300",
    category: "E-commerce",
    icon: ShoppingCart,
    price: "127,90",
    period: "por mês",
    gradient: "from-[#2A7AFF] to-[#B74DFF]",
    features: ["Carrinho de Compras", "Pagamento Online", "Gestão de Estoque", "Painel Administrativo"],
    liveUrl: "https://example.com",
  }
]

export default function Projects() {
  return (
    <section className="min-h-screen  bg-[#0D0D0D] py-10">
      <div className="container mx-auto px-4 py-10 md:py-24 bg-[#121212] rounded-[2.5rem]  relative overflow-hidden">

        <div className="mb-20 space-y-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 px-4 bg-gradient-to-r from-[#2A7AFF] via-[#B74DFF] to-[#FF4D4D] bg-clip-text text-transparent">
            Nossos Projetos
          </h1>
          <p className="text-gray-400 max-w-3xl px-4 text-xl leading-relaxed">
            Conheça alguns exemplos do que podemos criar para o seu negócio. Cada projeto é desenvolvido sob medida para
            suas necessidades.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 relative z-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="break-inside-avoid group relative bg-[#0D0D0D] rounded-3xl border border-white/10 hover:border-[#2A7AFF]/50 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-[#2A7AFF]/20 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(400px_at_50%_50%,rgba(42,122,255,0.1),transparent)]" />
              </div>

              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Button
                    className="bg-white/90 hover:bg-white text-gray-800 rounded-full px-6 py-2 shadow-lg font-semibold cursor-pointer"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    Ver Projeto
                    <ArrowUpRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>

                {/* Badge da categoria */}
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`bg-gradient-to-r ${project.gradient} text-white border-0 px-3 py-1 shadow-lg font-semibold`}
                  >
                    {project.category}
                  </Badge>
                </div>

                <div className="absolute top-4 right-4 bg-[#0D0D0D]/90 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/20">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">R$ {project.price}</div>
                    <div className="text-gray-300 text-xs">{project.period}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 relative z-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${project.gradient} shadow-lg`}
                    >
                      <project.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#2A7AFF] via-[#B74DFF] to-[#FF4D4D] bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300/90 leading-relaxed text-sm">{project.description}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-gray-200">Incluso:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-gray-300">
                        <Check className="h-3 w-3 text-[#2A7AFF] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn cursor-pointer`}
                  onClick={() => window.open("https://form.typeform.com/to/rEnDcO6y", "_blank")}
                >
                  Solicitar Orçamento
                  <ArrowUpRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center mt-20 relative z-10 space-y-8">
          <div className="bg-[#0D0D0D] rounded-3xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2A7AFF] via-[#B74DFF] to-[#FF4D4D] bg-clip-text text-transparent mb-4">
              Pronto para Começar?
            </h3>
            <p className="text-gray-300 mb-8 text-xl max-w-2xl mx-auto">
              Escolha o tipo de projeto ideal para seu negócio e vamos criar algo incrível juntos!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#121212] rounded-2xl p-6 border border-white/10 hover:border-[#2A7AFF]/50 transition-all duration-300">
                <ShoppingCart className="h-8 w-8 text-[#2A7AFF] mb-3 mx-auto" />
                <h4 className="text-lg font-semibold text-white mb-2">E-commerce</h4>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#2A7AFF] to-[#B74DFF] bg-clip-text text-transparent">
                  R$ 127,90/mês
                </p>
                <p className="text-gray-400 text-sm mt-2">Loja virtual completa</p>
              </div>

              <div className="bg-[#121212] rounded-2xl p-6 border border-white/10 hover:border-[#B74DFF]/50 transition-all duration-300">
                <Globe className="h-8 w-8 text-[#B74DFF] mb-3 mx-auto" />
                <h4 className="text-lg font-semibold text-white mb-2">Catálogo</h4>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#B74DFF] to-[#FF4D4D] bg-clip-text text-transparent">
                  R$ 89,90/mês
                </p>
                <p className="text-gray-400 text-sm mt-2">Showcase profissional</p>
              </div>

              <div className="bg-[#121212] rounded-2xl p-6 border border-white/10 hover:border-[#FF4D4D]/50 transition-all duration-300">
                <Rocket className="h-8 w-8 text-[#FF4D4D] mb-3 mx-auto" />
                <h4 className="text-lg font-semibold text-white mb-2">Landing Page</h4>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#FF4D4D] to-[#2A7AFF] bg-clip-text text-transparent">
                  12x R$ 102,90
                </p>
                <p className="text-gray-400 text-sm mt-2">Página de conversão</p>
              </div>
            </div>

            <br />
            <Button className="bg-gradient-to-r from-[#FF4D4D] to-[#FF6B6B] hover:from-[#FF6B6B] hover:to-[#FF4D4D] font-bold text-xl px-12 cursor-pointer hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#FF4D4D]/30 rounded-xl py-7">
              <Link href="https://form.typeform.com/to/rEnDcO6y" target="_blank" className="flex items-center gap-3">
                <Rocket className="h-6 w-6 text-white" />
                <span className="bg-gradient-to-r from-white via-[#BFDBFE] to-white bg-clip-text text-transparent tracking-wide">
                  COMEÇAR AGORA
                </span>
                <ArrowUpRight className="h-6 w-6 text-[#BFDBFE]" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
