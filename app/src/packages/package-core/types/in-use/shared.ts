export interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthorSignature {
  // createdBy: string;
  // updatedBy: string;
}

export interface BaseEntity {
  id: string;
}
export type SocialNetworks = {
  instagram: string;
  ticktok: string;
  facebook: string;
}

export type DayOfWeek =
  | "saturday"
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday";

export interface OpenTime {
  day: DayOfWeek;
  open: string | null;
  close: string | null;
}

// Contact type
export type ContactType =
  | 'E-mail'
  | "phone"
  | "website";

export type Contacts = {
  type: ContactType;
  title: string;
  destination: string;
}