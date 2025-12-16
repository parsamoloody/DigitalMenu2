import { Toaster } from "sonner"


const CustomToast = () => {
  return (
    <>
       <Toaster
        position="bottom-right"
        richColors
        toastOptions={{
          style: {
            width: "8rem",
            borderRadius: "1.3rem",
            background: "#444",
            border: "none",
            color: "#fff",
          },
        }}
      />
    </>

  )
}

export default CustomToast