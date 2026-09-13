export interface ContactChannel {
  id: string;
  type: 'email' | 'whatsapp' | 'linkedin' | 'github';
  title: string;
  value: string;
  href: string;
  actionText: string;
  badge: string;
}

export interface ContactData {
  sectionBadge: string;
  sectionTitle: string;
  sectionSubtitle: string;
  channels: ContactChannel[];
  availabilityNotice: {
    status: string;
    message: string;
  };
}
