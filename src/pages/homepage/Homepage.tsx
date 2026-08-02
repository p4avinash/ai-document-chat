import { useEffect } from "react"
import { toast } from "react-hot-toast"

import { Header } from "../../components/common/header"
import UploadSection from "../../components/upload/UploadSection"
import DocumentSection from "../../components/document/DocumentSection"
import ChatSection from "../../components/chat/ChatSection"
import { Footer } from "../../components/common/footer"
import { HeroSection } from "../../components/hero"

const HomePage = () => {
  useEffect(() => {
    toast(
      "⚡ The backend is hosted on a free-tier server. The first request may take up to a minute while the server wakes up.",
      {
        duration: 7000,
        icon: "ℹ️",
      },
    )
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "#fff",
      }}
    >
      <Header />

      <HeroSection />

      <UploadSection />

      <div className='flex flex-col lg:flex-row md:flex-row gap-6 max-w-[1600px] mx-auto px-6 items-stretch'>
        <DocumentSection />

        <div
          style={{
            flex: 1,
          }}
        >
          <ChatSection />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage

HomePage.displayName = "src/pages/homepage/Homepage.tsx"
