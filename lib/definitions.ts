
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