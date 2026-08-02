import { motion } from "framer-motion"
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  GlobalOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons"

import styles from "./Footer.module.css"

import Heart from "./Heart"

import { useUploadStore } from "../../../store/upload.store"

const quickLinks = [
  {
    label: "Upload PDF",
    id: "upload",
  },
  {
    label: "Chat",
    id: "chat",
  },
  {
    label: "Tech Stack",
    id: "footer",
  },
]

const technologies = [
  "React",
  "TypeScript",
  "Express",
  "MongoDB",
  "Pinecone",
  "Jina AI",
  "Groq",
  "RAG",
]

const Footer = () => {
  const { currentDocument } = useUploadStore()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <motion.footer
      id='footer'
      className={styles.footer}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      viewport={{
        once: true,
      }}
    >
      {/* Floating Card */}

      {currentDocument && (
        <motion.div
          className={styles.statsCard}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: {
              duration: 0.4,
            },
            y: {
              duration: 3,
              repeat: Infinity,
            },
          }}
        >
          <div className={styles.statusDot} />

          <div>
            <h4>Document Ready</h4>

            <p>Vector embeddings indexed successfully</p>
          </div>
        </motion.div>
      )}

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* BRAND */}

          <section className={styles.brand}>
            <div className={styles.logo}>📄</div>

            <h2>DocMind AI</h2>

            <p>
              AI-powered document intelligence built using Retrieval-Augmented
              Generation, semantic search, Pinecone vector database, Jina
              embeddings and Groq LLMs.
            </p>

            <div className={styles.badges}>
              <span>RAG</span>
              <span>Pinecone</span>
              <span>Groq</span>
              <span>Jina AI</span>
            </div>
          </section>

          {/* QUICK LINKS */}

          <section>
            <h3>Quick Links</h3>

            <ul className={styles.links}>
              {quickLinks.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    cursor: "pointer",
                    transition: "all .25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(6px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0px)"
                  }}
                >
                  <ArrowRightOutlined />
                  {item.label}
                </li>
              ))}
            </ul>
          </section>

          {/* TECH STACK */}

          <section>
            <h3>Built With</h3>

            <div className={styles.techGrid}>
              {technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </section>

          {/* CONNECT */}

          <section>
            <h3>Connect</h3>

            <div className={styles.socials}>
              <a href='https://github.com/p4avinash' target='_blank'>
                <GithubOutlined />
                GitHub
              </a>

              <a href='https://www.linkedin.com/in/p4avinash/' target='_blank'>
                <LinkedinOutlined />
                LinkedIn
              </a>

              <a
                href='https://p4avinash-portfolio.netlify.app/'
                target='_blank'
              >
                <GlobalOutlined />
                Portfolio
              </a>

              <a
                href='mailto:p4avinashkumar@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                <MailOutlined />
                Contact Me
              </a>
            </div>
          </section>
        </div>

        {/* Divider */}

        <div className={styles.divider} />

        {/* Bottom */}

        <div className={styles.bottomBar}>
          <span>© {new Date().getFullYear()} DocMind AI</span>

          <span>
            Built with <Heart /> by Avinash Kumar
          </span>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
