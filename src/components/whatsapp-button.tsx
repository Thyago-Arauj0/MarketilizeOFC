import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        id="btnWppFixed"
        target="_blank"
        href="https://wa.me/5575983252987?text=Ol%C3%A1,%20tenho%20interesse%20em%20criar%20um%20site%20com%20voc%C3%AAs"
        className="block"
      >
        <Button className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] p-0 shadow-2xl cursor-pointer transition-all duration-300 hover:scale-110 animate-pulse">
          {/* Efeito de onda/ripple */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-10 animation-delay-75"></div>

          {/* Ícone do WhatsApp */}
          <FaWhatsapp className="text-white text-2xl relative z-10" />

          {/* Tooltip/Badge opcional */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        </Button>
      </Link>
    </div>
  )
}