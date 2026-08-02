import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"

const HEART_COUNT = 24

const HEART_EMOJIS = ["❤️", "💜", "🩷", "💙"]

const createHearts = () =>
  Array.from({ length: HEART_COUNT }, (_, i) => ({
    id: i,
    emoji: HEART_EMOJIS[i % HEART_EMOJIS.length],
    x: (Math.random() - 0.5) * 850,
    y: -250 - Math.random() * 500,
    rotate: Math.random() * 720,
    scale: 0.8 + Math.random() * 0.6,
    size: 18 + Math.random() * 14,
  }))

const Heart = () => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [hearts, setHearts] = useState(createHearts())

  const handleClick = () => {
    setShowOverlay(true)
    setHearts(createHearts())

    confetti({
      particleCount: 120,
      spread: 90,
      startVelocity: 45,
      origin: {
        y: 0.75,
      },
      colors: [
        "#ff4d6d",
        "#ff5c8a",
        "#ff85a2",
        "#ff006e",
        "#c77dff",
        "#7b2cbf",
      ],
    })

    setTimeout(() => {
      setShowOverlay(false)
    }, 1700)
  }

  return (
    <>
      <motion.span
        whileHover={{
          rotate: 1080,
          transition: {
            duration: 0.9,
          },
        }}
        whileTap={{
          scale: 0.85,
        }}
        onClick={handleClick}
        style={{
          display: "inline-block",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        ❤️
      </motion.span>

      <AnimatePresence>
        {showOverlay && (
          <>
            {/* Background */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              style={{
                position: "fixed",
                inset: 0,
                background:
                  "radial-gradient(circle at center, rgba(124,58,237,.22), rgba(15,23,42,.94))",
                backdropFilter: "blur(2px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 99997,
                pointerEvents: "none",
              }}
            >
              {/* Popup */}

              <motion.div
                initial={{
                  scale: 0.7,
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: -6,
                }}
                exit={{
                  scale: 0.9,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.45,
                }}
                style={{
                  padding: "36px 48px",
                  borderRadius: 24,
                  background: "linear-gradient(135deg,#111827,#1f2937,#111827)",
                  border: "1px solid rgba(255,255,255,.08)",
                  color: "#fff",
                  textAlign: "center",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 30px 80px rgba(0,0,0,.45)",
                }}
              >
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.15,
                  }}
                  style={{
                    fontSize: 40,
                    marginBottom: 14,
                  }}
                >
                  ❤️ Thanks for visiting ❤️
                </motion.h1>
              </motion.div>
            </motion.div>
            {/* Flying Hearts */}

            {hearts.map((heart) => (
              <motion.div
                key={heart.id}
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 0.5,
                }}
                animate={{
                  x: heart.x,
                  y: heart.y,
                  rotate: heart.rotate,
                  opacity: 0,
                  scale: heart.scale,
                }}
                transition={{
                  duration: 1.4,
                  ease: "easeOut",
                }}
                style={{
                  position: "fixed",
                  left: "50%",
                  top: "65%",
                  fontSize: heart.size,
                  pointerEvents: "none",
                  zIndex: 99998,
                  willChange: "transform, opacity",
                }}
              >
                {heart.emoji}
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Heart
