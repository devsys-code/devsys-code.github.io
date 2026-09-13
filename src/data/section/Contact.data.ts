import type { LocalizedContent } from '../../type/i18n.type';
import type { ContactData } from '../../type/section/Contact.type';

export const contactData: LocalizedContent<ContactData> = {
  es: {
    sectionBadge: 'Conectemos',
    sectionTitle: 'Contacto Directo',
    sectionSubtitle: 'Disponible para oportunidades laborales, desarrollo de software, consultoría y colaboraciones.',
    channels: [
      {
        id: 'whatsapp',
        type: 'whatsapp',
        title: 'WhatsApp Directo',
        value: '+58 04223001681',
        href: 'https://wa.me/584223001681',
        actionText: 'Enviar mensaje directo',
        badge: 'Respuesta Rápida',
      },
      {
        id: 'email',
        type: 'email',
        title: 'Correo Electrónico',
        value: 'ddam.java@gmail.com',
        href: 'mailto:ddam.java@gmail.com',
        actionText: 'Escribir un correo',
        badge: 'Profesional',
      },
      {
        id: 'linkedin',
        type: 'linkedin',
        title: 'LinkedIn',
        value: 'linkedin.com/in/devsys-code',
        href: 'https://www.linkedin.com/in/devsys-code/',
        actionText: 'Conectar en LinkedIn',
        badge: 'Red Profesional',
      },
      {
        id: 'github',
        type: 'github',
        title: 'GitHub',
        value: 'github.com/devsys-code',
        href: 'https://github.com/devsys-code',
        actionText: 'Explorar repositorios',
        badge: 'Código Abierto',
      },
    ],
    availabilityNotice: {
      status: 'Activo',
      message: 'Abierto a propuestas full-time, consultoría de arquitectura SaaS y proyectos de desarrollo acelerado con IA.',
    },
  },
  en: {
    sectionBadge: "Let's Connect",
    sectionTitle: 'Direct Contact',
    sectionSubtitle: 'Available for full-time engineering roles, SaaS architecture consulting, and technical collaboration.',
    channels: [
      {
        id: 'whatsapp',
        type: 'whatsapp',
        title: 'WhatsApp Direct',
        value: '+58 04223001681',
        href: 'https://wa.me/584223001681',
        actionText: 'Send direct message',
        badge: 'Fast Response',
      },
      {
        id: 'email',
        type: 'email',
        title: 'Email Address',
        value: 'ddam.java@gmail.com',
        href: 'mailto:ddam.java@gmail.com',
        actionText: 'Send an email',
        badge: 'Professional',
      },
      {
        id: 'linkedin',
        type: 'linkedin',
        title: 'LinkedIn',
        value: 'linkedin.com/in/devsys-code',
        href: 'https://www.linkedin.com/in/devsys-code/',
        actionText: 'Connect on LinkedIn',
        badge: 'Network',
      },
      {
        id: 'github',
        type: 'github',
        title: 'GitHub',
        value: 'github.com/devsys-code',
        href: 'https://github.com/devsys-code',
        actionText: 'Explore repositories',
        badge: 'Open Source',
      },
    ],
    availabilityNotice: {
      status: 'Active',
      message: 'Open to full-time opportunities, SaaS multitenant consulting, and AI-accelerated development projects.',
    },
  },
};
