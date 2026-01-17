export interface Food {
  name: string;
  note?: string;
  addressQuery: string; // Used to generate Google Maps link
}

export interface Spot {
  name: string;
  description: string;
  tips?: string[]; // Bullet points from PDF
  foods?: Food[];
}

export interface TicketAlert {
  time: string;
  title: string;
  urgent: boolean;
}

export interface Accommodation {
  name: string;
  address: string;
  checkIn: string;
  checkOut?: string;
  tax?: string;
  note?: string;
  bookingPlatform: string;
}

export interface DayPlan {
  id: string; // e.g., "0205"
  dateLabel: string; // e.g., "2/5"
  dayOfWeek: string; // e.g., "(四)"
  city: string;
  imageUrl: string; // Cover image for the day
  highlights: string; // Quick summary
  accommodation?: Accommodation;
  ticketAlerts?: TicketAlert[];
  spots: Spot[];
}