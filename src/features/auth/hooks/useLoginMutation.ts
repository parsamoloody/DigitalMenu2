'use client'

import { useMutation } from "@tanstack/react-query"
import { login } from "../service/authService"

const useLoginMutation = () => {
  const {mutate: loginMutation , error: loginError} = useMutation({
    mutationFn: login,
  })

  return {loginMutation, loginError}
}

export default useLoginMutation
