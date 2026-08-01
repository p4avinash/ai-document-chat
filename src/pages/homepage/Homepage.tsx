import { Header } from "../../components/common/header"
import UploadSection from "../../components/upload/UploadSection"
import DocumentSection from "../../components/document/DocumentSection"
import ChatSection from "../../components/chat/ChatSection"
import { Footer } from "../../components/common/footer"
import { HeroSection } from "../../components/hero"

const HomePage = () => {
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

      <DocumentSection />

      <ChatSection />

      <Footer />
    </div>
  )
}

export default HomePage

HomePage.displayName = "src/pages/homepage/Homepage.tsx"
