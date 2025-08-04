import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./general.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import WhatsAppButton from "@/components/whatsapp-button";
import ScrollHeader from "@/components/animations/ScrollHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marketilize - Transforme Sua Ideia em uma Máquina de Vendas Online",
  description:
    "Desenvolvemos sites, e-commerces e estratégias de marketing que conquistam clientes e escalam seu negócio.",
  keywords: [
    "Desenvolvimento de sites",
    "Site barato",
    "Desenvolvimento de aplicativos",
    "Desenvolvimento de landing pages",
    "Landing page barata",
    "App barato",
    "Agência de marketing digital",
    "Criação de sites profissionais",
    "Desenvolvimento web sob medida",
    "Empresa de tecnologia",
    "Software sob demanda",
    "Criação de aplicativos Android e iOS",
    "Design responsivo",
    "Marketing para empresas barato",
    "Desenvolvimento fullstack",
    "Landing pages que convertem",
    "Criação de loja virtual barato",
    "E-commerce barato",
    "Criação de sites institucionais",
    "Melhor software house do Brasil",
    "Agência de desenvolvimento",
    "Sites com SEO otimizado",
    "Desenvolvimento com React e Django",
    "Startup de tecnologia",
    "Automação de processos com software",
    "Soluções digitais para empresas",
    "Marketilize",
    "Marketing"
  ],
  authors: [{ name: "Marketilize", url: "https://marketilize.com.br" }],
  creator: "Marketilize",
  metadataBase: new URL("https://marketilize.com.br"),
  openGraph: {
    title: "Marketilize",
    description:
      "Desenvolvemos sites, e-commerces e estratégias de marketing que conquistam clientes e escalam seu negócio.",
    url: "https://marketilize.com.br",
    siteName: "Marketilize",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Marketilize",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PPWCJJXR');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0A0A0A] text-white`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPWCJJXR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

              {/* Header */}
              <header className="bg-gradient-to-b from-[#0D0D0D] to-transparent border-b border-[#FF4D4D]">
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

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

      <footer className="bg-[#0D0D0D] py-12 md:py-24">
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

      <div>
        <WhatsAppButton />
      </div>
      </body>
    </html>
  );
}
