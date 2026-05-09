const WHATSAPP_NUMBER = "919440157879";

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const openWhatsApp = (message: string) => {
  window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
};
