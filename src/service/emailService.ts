interface EmailData {
  name: string;
  phone: string;
  message: string;
}

export const sendContactEmail = async (data: EmailData) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const ORIGIN = import.meta.env.VITE_EMAIL_ORIGIN;
  const TARGET = import.meta.env.VITE_EMAIL_TARGET;

  if (!API_URL || !API_KEY || !ORIGIN || !TARGET) {
    console.error("Faltam variáveis de ambiente no .env do frontend!");
    throw new Error("Configuração de email ausente.");
  }

  const payload = {
    ...data,
    origin: ORIGIN,
    targetEmail: TARGET
  };

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Erro ao comunicar com o servidor de e-mails.');
  }

  return response.json();
};