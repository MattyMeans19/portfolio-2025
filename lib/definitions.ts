
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
  id: number,
  client_name: string,
  add_ons: {
    name: string,
    info: string,
    price: number,
    time: number
  },
  totalPrice: number,
  primaryColor: string,
  secondaryColor: string
}

export type Addons = {
  title: string,
  info: string, 
  timeToBuild: number,
  startupPrice: number,
  monthlyPrice: number
}

export type Engine ={
    name: string,
    startupPrice: number,
    monthlyPrice: number,
    included: string
}