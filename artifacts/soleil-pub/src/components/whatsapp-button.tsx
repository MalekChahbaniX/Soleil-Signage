import React, { useState } from "react";
import { Mail, Phone, X, MessageCircle } from "lucide-react";
import { SiWhatsapp, SiFacebook, SiInstagram } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  {
    href: `https://wa.me/21647122656?text=${encodeURIComponent("Bonjour, je voudrais plus d'informations")}`,
    icon: <SiWhatsapp className="h-5 w-5" />,
    label: "WhatsApp",
    color: "#25D366",
    testId: "button-whatsapp-floating"
  },
  {
    href: "https://www.facebook.com/profile.php?id=61572933366822",
    icon: <SiFacebook className="h-5 w-5" />,
    label: "Facebook",
    color: "#1877F2",
    testId: "button-facebook-floating"
  },
  {
    href: "https://www.instagram.com/soleilpub",
    icon: <SiInstagram className="h-5 w-5" />,
    label: "Instagram",
    color: "#E1306C",
    testId: "button-instagram-floating"
  },
  {
    href: "mailto:soleilpub24@gmail.com",
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    color: "#C8A96A",
    testId: "button-email-floating"
  },
  {
    href: "tel:+21647122656",
    icon: <Phone className="h-5 w-5" />,
    label: "+216 47122656",
    color: "#444444",
    testId: "button-phone-floating"
  }
];

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {open && (
          <>
            {links.map((link, i) => (
              <motion.div
                key={link.testId}
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                transition={{
                  duration: 0.25,
                  delay: open ? (links.length - 1 - i) * 0.05 : i * 0.05,
                  ease: "easeOut"
                }}
                className="relative group flex items-center justify-end"
              >
                <span className="absolute right-14 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/80 text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap pointer-events-none">
                  {link.label}
                </span>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-testid={link.testId}
                  aria-label={link.label}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
                  style={{ backgroundColor: link.color, boxShadow: `0 4px 16px ${link.color}55` }}
                  onClick={() => setOpen(false)}
                >
                  {link.icon}
                </a>
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      <motion.button
        data-testid="button-contact-fab"
        aria-label={open ? "Fermer" : "Nous contacter"}
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full flex items-center justify-center text-black shadow-xl"
        style={{ backgroundColor: "#C8A96A", boxShadow: "0 6px 24px #C8A96A66" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ duration: 0.25 }}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}
