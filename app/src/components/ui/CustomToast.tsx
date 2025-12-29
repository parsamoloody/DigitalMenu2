import { Toaster } from "sonner"


const CustomToast = () => {
  return (
    <>
       <Toaster
        position="top-center"
        richColors
        toastOptions={{
          style: {
            width: "10rem",
            textAlign: "center",
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