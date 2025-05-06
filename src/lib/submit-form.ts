
interface FormData {
  name: string;
  email: string;
  whatsapp: string;
}

export const submitToGoogleSheet = async (data: FormData): Promise<void> => {
  try {
    // Esta URL é para um script web publicado no Google Apps Script que adiciona dados à planilha
    // Foi criado um script personalizado para esta integração específica
    const scriptURL = "https://script.google.com/macros/s/AKfycbwsRWD3mquepT9wVgocQlQCgUloFWpp6uaPGLVS5iP6gnICIFiqyJXcY8jklyq5VyLq/exec";

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('whatsapp', data.whatsapp);
    formData.append('timestamp', new Date().toISOString());
    
    // Usando no-cors para evitar problemas de CORS com o Google Apps Script
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    });

    // Como estamos usando no-cors, não podemos ler a resposta,
    // então presumimos que foi bem-sucedido se não houve erro
    console.log("Formulário enviado com sucesso");
    
    return Promise.resolve();
  } catch (error) {
    console.error("Erro ao enviar para o Google Sheet:", error);
    return Promise.reject(error);
  }
};
