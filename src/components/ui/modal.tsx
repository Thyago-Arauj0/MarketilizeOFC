"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  showCloseButton?: boolean
  closeOnBackdropClick?: boolean
}

export function Modal({ isOpen, onClose, children, showCloseButton = true, closeOnBackdropClick = true }: ModalProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      setTimeout(() => setIsAnimating(true), 10)
    } else {
      setIsAnimating(false)
      const timeout = setTimeout(() => setIsVisible(false), 300) // Match transition duration
      return () => clearTimeout(timeout)
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEscKey)
    }

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isAnimating ? "bg-black/50 backdrop-blur-sm" : "bg-black/0 backdrop-blur-0"
      }`}
      onClick={closeOnBackdropClick ? onClose : undefined}
    >
      <div
        className={`relative max-w-lg w-full max-h-[90vh] overflow-auto rounded-xl bg-black border border-red-500/20 shadow-lg transition-all duration-300 ${
          isAnimating ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
