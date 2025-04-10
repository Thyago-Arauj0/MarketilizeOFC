import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./general.css"


import { ThemeProvider } from "@/components/theme-provider"

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
    "temperos artesanais",
    "condimentos naturais",
    "culinária nordestina",
    "produtos caseiros",
    "Moinho Nordeste",
    "ervas e especiarias"
  ],
  authors: [{ name: "Marketilize", url: "https://marketilize.com.br" }],
  creator: "Marketilize",
  metadataBase: new URL("https://marketilize.com.br"),
  openGraph: {
    title: "Marketilize",
    description: "Desenvolvemos sites, e-commerces e estratégias de marketing que conquistam clientes e escalam seu negócio.",
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
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
  )
}