import HomePage from "./pages/homepage/Homepage"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <HomePage />
      <Toaster
        position='top-right'
        toastOptions={{
          style: {
            background: "#0f172a",
            color: "#fff",
            border: "1px solid rgba(255,255,255,.08)",
            backdropFilter: "blur(24px)",
          },
        }}
      />
    </>
  )
}

export default App
