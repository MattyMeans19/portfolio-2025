
export type Intro={
    text: string,
    imageLink: string,
    imageAlt: string,
    animation: string
}

export type Email={
    name: string;
    email: string;
    phone: number | null,
    message: string
}

export type FormState =
  | {
      message?: string
    }
  | undefined

  export type Site = 
  {
    name: string,
    url: string,
    image: string,
    description: string,
    repo: string
  }

  export type Content=
  {
    title: string,
    description: string,
    exampleSite: string,
    url: string,
    siteRepo: string
  }

  export type SessionPayload = {
  username: string, 
  expiresAt: Date
}

export type Quote = {
  customer: string;
  customerTel: string;
  customerEmail: string;
  template: 'Business-Standard' | 'Business-Premium' | 'Restaurant-Standard' | 'Restaurant-Premium',
  addOns: number[],
  totalStartup: number,
  totalMonthly: number,
  completionETA: number, 
  createdAt: string
}

export interface PendingQuote extends Quote {
  id: number,
}

export type Addon = {
  id: number | null, 
  name: string,
  info: string, 
  startUp: number,
  monthly: number,
  buildETA: number,
  isPremium: boolean
}

export type Engine ={
    name: string,
    startupPrice: number,
    monthlyPrice: number,
    included: string
}

export type ToDoItem = {
  id: number, 
  title: string,
  info: string
}

export type Client = {
  id: number;
  customer: string;
  customerTel: string;
  customerEmail: string;
  totalStartup: number;
  totalMonthly: number;
  createdAt: string;
  engine: 'Business-Standard' | 'Business-Premium' | 'Restaurant-Standard' | 'Restaurant-Premium';
  addOns: number[];
}