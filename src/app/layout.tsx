import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./general.css";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPWCJJXR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
