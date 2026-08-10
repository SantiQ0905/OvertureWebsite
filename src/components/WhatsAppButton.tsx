import { useLanguage } from '../i18n/LanguageContext';
import './WhatsAppButton.css';

const WHATSAPP_URL = 'https://wa.me/528130827421';

export function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      className="whatsapp-fab"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.label}
      title={t.whatsapp.label}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3a9 9 0 0 0-7.78 13.5L3 21l4.65-1.2A9 9 0 1 0 12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8.3 8.7c.2-.5.4-.5.6-.5h.5c.17 0 .38 0 .58.44.2.44.68 1.68.74 1.8.06.13.1.28.02.45-.08.17-.13.28-.25.43-.13.15-.27.34-.38.46-.13.13-.26.27-.11.53.14.26.63 1.06 1.37 1.72.94.85 1.73 1.11 1.99 1.24.26.13.4.1.55-.06.15-.16.63-.72.8-.97.17-.24.34-.2.56-.12.23.08 1.46.7 1.71.83.26.13.43.2.49.3.06.13.06.72-.17 1.4-.24.68-1.36 1.3-1.87 1.36-.5.06-.98.26-3.3-.7-2.8-1.16-4.57-4-4.71-4.19-.13-.19-1.13-1.5-1.13-2.87 0-1.36.7-2.03.95-2.31Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
