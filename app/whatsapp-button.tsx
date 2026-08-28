const WHATSAPP_URL =
  'https://wa.me/8618127154227?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20details.';

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact HONGLIANG on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className="whatsapp-tooltip" aria-hidden="true">Chat with us</span>
      <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.04 3.2A12.7 12.7 0 0 0 5.3 22.68L3.2 28.8l6.3-2.02A12.7 12.7 0 1 0 16.04 3.2Zm0 22.86c-2.1 0-4.15-.56-5.93-1.62l-.43-.25-3.74 1.2 1.22-3.64-.28-.45a10.16 10.16 0 1 1 9.16 4.76Zm5.57-7.61c-.3-.15-1.81-.9-2.09-1-.28-.1-.48-.15-.68.15-.2.3-.78 1-.96 1.2-.18.2-.35.23-.66.08-.3-.15-1.29-.48-2.46-1.52a9.22 9.22 0 0 1-1.7-2.12c-.18-.3-.02-.47.13-.62.14-.14.3-.35.46-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.5-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.04-1.06 2.53s1.09 2.93 1.24 3.13c.15.2 2.14 3.27 5.18 4.59.72.31 1.29.5 1.73.64.73.23 1.39.2 1.91.12.58-.09 1.81-.74 2.06-1.46.25-.73.25-1.35.18-1.48-.08-.13-.28-.2-.58-.35Z"
        />
      </svg>
    </a>
  );
}
