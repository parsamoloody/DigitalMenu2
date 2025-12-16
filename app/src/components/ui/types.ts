import { UseFormRegisterReturn } from 'react-hook-form'

export type styleInputProps = {
  register?: UseFormRegisterReturn,
  error?: string | undefined,
  label: string
  value?: string,
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  className?: string
  defaultValue?: string | boolean
}
