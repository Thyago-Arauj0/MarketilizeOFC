'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface FormData {
  name: string;
  email: string;
  phone: string;
  business: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          business_type: formData.business,
          message: formData.message,
          to_email: 'suporteconstsoft@gmail.com'
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        message: ''
      });
      
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, business: value }));
  };

  return (
    <form id="contactForm" className="space-y-4" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
          Nome
        </label>
        <Input
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Seu nome completo"
          className="bg-[#0A0A0A] border-gray-800"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
          E-mail
        </label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="seu@email.com"
          className="bg-[#0A0A0A] border-gray-800"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
          Telefone
        </label>
        <Input
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="(00) 00000-0000"
          className="bg-[#0A0A0A] border-gray-800"
          required
        />
      </div>

      <div>
        <label htmlFor="business" className="block text-sm font-medium text-gray-400 mb-1">
          Tipo de Negócio
        </label>
        <Select value={formData.business} onValueChange={handleSelectChange}>
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
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
          Mensagem (opcional)
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Conte-nos um pouco sobre seu projeto"
          className="bg-[#0A0A0A] border-gray-800"
        />
      </div>


      <Button 
        type="submit"
        disabled={loading}
        className="w-full bg-[#FF4D4D] hover:bg-[#FF4D4D]/90 text-white py-6 cursor-pointer disabled:opacity-50"
      >
        {loading ? 'Enviando...' : 'Quero Minha Proposta'}
      </Button>

      {success && (
        <p className="text-green-500 text-center text-sm">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </p>
      )}
      
      <p className="text-xs text-gray-500 text-center">
        Seus dados estão protegidos. Nada de spam!
      </p>
    </form>
  );
}