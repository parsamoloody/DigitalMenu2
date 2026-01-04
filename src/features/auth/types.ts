export interface FormData {
  name: string,
  email: string,
  password: string
}


export type AuthTabsProps = {
    tab: string,
    setTab: React.Dispatch<React.SetStateAction<'login' | 'signup'>>
}

