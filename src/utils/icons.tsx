export const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#505050" d="M17.25 2.75H6.75A4.75 4.75 0 0 0 2 7.5v9a4.75 4.75 
     0 0 0 4.75 4.75h10.5A4.76 4.76 0 0 0 22 16.5v-9a4.76 4.76 0 0
      0-4.75-4.75m-3.65 8.32a3.26 3.26 0 0 1-3.23 0L3.52 7.14a3.25 3.25 0 0
     1 3.23-2.89h10.5a3.26 3.26 0 0 1 3.23 2.89z"/></svg>
  )

export const PasswordIcon = () =>  (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" 
    viewBox="0 0 24 24" fill="#505050"><g fill="#505050">
    <path d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 
    0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243
     22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"
      /><path d="M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004c.567.005 1.064.018 
      1.5.05V8a6.75 6.75 0 0 0-13.5 0v2.055a23.57 23.57 0 0 1 1.5-.051V8Z"/></g></svg>
  )

 export const UserIcon = ({size} : {size: string}) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} 
   viewBox="0 0 24 24"><path fill="#505050" d="M12 4a4 4 0 1 1 0 8a4 4 0 0 1 
   0-8zm0 16s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2z"/></svg>
  )
}

