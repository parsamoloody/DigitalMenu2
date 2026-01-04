import { TextField } from '@mui/material';
import { styleInputProps } from './types';


const StyleInput = ({register , error , type, label, value, onChange, className} : styleInputProps) => {
  return (
    <TextField 
      {...register} 
      type={type}
      value={value}
      onChange={onChange}
      helperText={error || ''}
      id="filled-basic"
      label={label}
      color="primary"
      variant="filled" 
     
      className={`${className}  [&_.MuiInputBase-input]:text-[13px]!
         [&_.MuiFormLabel-root.Mui-focused]:-mt-3 [&_.MuiFormLabel-root.Mui-focused]:bg-[#eee] [&_.MuiFormLabel-root.Mui-focused]:px-3!
         [&_.MuiFormLabel-root.Mui-focused]:rounded-xl! [&_.MuiFormLabel-root.Mui-focused]:-mr-5!`}
      />

      
  )
}

export default StyleInput
