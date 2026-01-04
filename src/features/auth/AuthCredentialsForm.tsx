'use client'
import React, { useState } from 'react'
import { Flex } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import {  useRouter } from 'next/navigation'

import AuthTabs from './AuthTabs'
import useSignUpMutation from './hooks/useSignUpMutation'
import useLoginMutation from './hooks/useLoginMutation'

import { FormData } from './types'

import Input from './Input'
import { EmailIcon, PasswordIcon, UserIcon } from '@/utils/icons'
import { useCurrentUser } from '@/providers/UserProvider'
import { Div, P, Span } from '@/components/style'
import { Button } from '@mui/material'



const AuthCredentialsForm = () => {
 const [tab, setTab] = useState<'login' | 'signup'>('login')
 const {register,handleSubmit,formState: {errors}, reset} = useForm<FormData>()

  const router = useRouter()


 // check which tab is active
 const isLogin = tab === 'login'

// Hooks for initiating authentication API calls (login and signup) and handling errors.
 const {loginMutation, loginError} =  useLoginMutation() 
 const {signUpMutation , signupError} = useSignUpMutation()
 

// login
const handleLogin = (data: FormData) => {
    loginMutation(
        { email: data.email, password: data.password },
        {
            onSuccess: (res) => {
                reset();
                router.push(`/dashboard/profile/${res.data.user.props.id}`);
            }
        }
    )
}

// signup
const handleSignup = (data: FormData) => {
  // const currentUser = useCurrentUser();
  // if(!currentUser) return notFound()
    signUpMutation(
        { name: data.name, email: data.email, password: data.password },
        {
            onSuccess: (res) => {
              router.push(`/get-start/${res.data.user.props.id}`)
              console.log("response", res.data.user.props.id)
                reset()
            }
        }
    )
}


// handle submit
 const onSubmit = (data: FormData) => {
    if (isLogin) {
        handleLogin(data)
    } else {
        handleSignup(data)
    }
}


  return (
    <Flex justify='center' align='center' direction="column" className='h-[70vh]'>

      <AuthTabs tab={tab} setTab={setTab} />
        
      <form onSubmit={handleSubmit(onSubmit)}
        style={{borderRadius: '61px 35px 67px 200px'}}
        className='bg-[#eee] mt-4 relative shadow  px-9 py-10 max-[387px]:w-[87%] w-80'
         > 
         
         {isLogin && loginError && <P>{loginError.message}</P>}

         {!isLogin && signupError && <P>{(signupError.message.includes('exists') ? 'این کاربر وجود دارد': signupError.message)}</P>}
         
        <Flex 
          justify='center'
          align='center'
          direction='column'
          gap='5'
         className='translate-x-3 -translate-y-2'
         >
            {!isLogin && 
            <Div>
             <Input type='text' placeholder='نام' 
               register={register('name', {required: "نام"})}
               error={errors.name?.message}
             />

             <Span>
              <UserIcon size='22'/>
             </Span>
           </Div> 
           }
           

          <Div> 
            <Input type='email' placeholder='ایمیل' 
             register={register('email', {required: "ایمیل"})}
             error={errors.email?.message}
            /> 

             <Span>
               <EmailIcon />
            </Span>
          </Div>
            
           
          <Div>
            <Input type='password' placeholder='رمز' 
              register={register('password', {required: "رمز"})}
              error={errors.password?.message}
              /> 
           <Span>
            <PasswordIcon />
          </Span>
          </Div>
          
        </Flex>

         {isLogin && 
         <div className='bg-white rounded-full mt-2 shrink-0 hover:bg-red-100 cursor-pointer min-[350px]:mr-4 shadow-white shadow-lg w-30 text-center'>
            <span className='text-[12px] text-red-400'>رمزو فراموش کردید</span>
          </div>
          }
          
         <Button type="submit" className={`p-1.5! mt-4! min-[350px]:-translate-x-3 rounded-xl! px-8!  shrink-0 w-[70%]`} variant="contained" size='small' color='secondary'> {isLogin ? 'ورود' : 'ثبت نام'} </Button>

      </form>
    </Flex>
    
  )
}

export default AuthCredentialsForm
