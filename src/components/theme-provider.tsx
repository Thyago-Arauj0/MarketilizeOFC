// components/theme-provider.tsx
'use client'

import { useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // Garante que o tema só seja aplicado após o componente montar no cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</> // Renderiza sem tema até o cliente estar pronto
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}