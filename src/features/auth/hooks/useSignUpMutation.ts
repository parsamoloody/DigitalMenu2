'use client'

import { useMutation } from '@tanstack/react-query'
import { signup } from '../service/authService'
 
  const useSignUpMutation = () => {
  const {mutate: signUpMutation , error: signupError} = useMutation({
    mutationFn: signup,
  })

  return {signUpMutation, signupError}
}

export default useSignUpMutation
