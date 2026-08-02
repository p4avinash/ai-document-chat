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

      <div className='flex flex-col lg:flex-row md:flex-row gap-6 max-w-[1600px] mx-auto px-6 items-stretch'>
        {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          maxWidth: 1600,
          margin: "24px auto",
          padding: "0 24px",
          alignItems: "stretch",
        }}
      > */}
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
