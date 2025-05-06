
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { submitToGoogleSheet } from "@/lib/submit-form";

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.whatsapp) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.email.includes('@')) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um endereço de email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Google Sheet
      await submitToGoogleSheet(formData);
      
      // Also submit to Make.com webhook
      await fetch("https://hook.us2.make.com/b95gjdjhuatek818jxuwratsgplxdudt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: window.location.href
        }),
        mode: "no-cors",
      });
      
      toast({
        title: "Envio bem-sucedido!",
        description: "Você receberá o framework em instantes.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
      });
      
      // Redirect after successful submission
      window.location.href = "https://aula.masterpiececompany.com.br";
      
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro no envio",
        description: "Houve um erro ao processar sua solicitação. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-zinc-900 p-6 rounded-lg border border-zinc-800 shadow-lg">
      <div>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-zinc-800 border-zinc-700 focus:border-[#EFCB20] text-white"
          placeholder="Seu nome completo"
          disabled={isSubmitting}
          required
        />
      </div>
      
      <div>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-zinc-800 border-zinc-700 focus:border-[#EFCB20] text-white"
          placeholder="seu.email@exemplo.com"
          disabled={isSubmitting}
          required
        />
      </div>
      
      <div>
        <Input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          value={formData.whatsapp}
          onChange={handleChange}
          className="bg-zinc-800 border-zinc-700 focus:border-[#EFCB20] text-white"
          placeholder="WhatsApp (com DDD)"
          disabled={isSubmitting}
          required
        />
      </div>
      
      <div className="pt-2">
        <Button
          type="submit"
          className="w-full py-6 bg-[#EFCB20] hover:bg-[#dab91d] text-black font-bold text-lg transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Receber Ferramenta"}
        </Button>
      </div>
    </form>
  );
};

export default LeadForm;
