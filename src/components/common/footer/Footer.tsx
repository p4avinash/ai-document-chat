// import { motion } from "framer-motion"
// import {
//   GithubOutlined,
//   LinkedinOutlined,
//   MailOutlined,
// } from "@ant-design/icons"

// import styles from "./Footer.module.css"

// const Footer = () => {
//   return (
//     <motion.footer
//       className={styles.footer}
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Floating Card */}

//       <div className={styles.statsCard}>
//         <div className={styles.statusDot} />

//         <div>
//           <h4>Document Stats</h4>

//           <p>Real-time insights</p>
//         </div>
//       </div>

//       {/* Main Container */}

//       <div className={styles.container}>
//         {/* Grid */}

//         <div className={styles.grid}>
//           {/* Brand */}

//           <section className={styles.brand}>
//             <div className={styles.logo}>📄</div>

//             <h2>AI Document Chat</h2>

//             <p>
//               AI-powered document intelligence using RAG, semantic search, and
//               state-of-the-art LLMs.
//             </p>
//           </section>

//           {/* Quick Links */}

//           <section>
//             <h3>Quick Links</h3>

//             <ul className={styles.links}>
//               <li>Upload Document</li>
//               <li>Your Documents</li>
//               <li>How It Works</li>
//               <li>FAQ</li>
//             </ul>
//           </section>

//           {/* Tech Stack */}

//           <section>
//             <h3>Tech Stack</h3>

//             <div className={styles.techGrid}>
//               <span>⚛ React</span>
//               <span>TS TypeScript</span>
//               <span>EX Express</span>
//               <span>🍃 MongoDB</span>
//               <span>🔷 Pinecone</span>
//               <span>🧠 Jina AI</span>
//               <span>⚡ Groq</span>
//             </div>
//           </section>

//           {/* Connect */}

//           <section>
//             <h3>Connect</h3>

//             <div className={styles.socials}>
//               <a href='#'>
//                 <GithubOutlined />
//                 GitHub
//               </a>

//               <a href='#'>
//                 <LinkedinOutlined />
//                 LinkedIn
//               </a>

//               <a href='#'>
//                 <MailOutlined />
//                 Email
//               </a>
//             </div>
//           </section>

//           {/* Creator */}

//           <section className={styles.creator}>
//             <p>Made with ❤️ by</p>

//             <strong>Avinash Kumar</strong>

//             <small>© 2026 AI Document Chat</small>
//           </section>
//         </div>
//       </div>
//     </motion.footer>
//   )
// }

// export default Footer

import { motion } from "framer-motion"
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  GlobalOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons"

import styles from "./Footer.module.css"

const quickLinks = ["Upload PDF", "Chat", "Workflow", "Tech Stack"]

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

      <motion.div
        className={styles.statsCard}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <div className={styles.statusDot} />

        <div>
          <h4>Document Ready</h4>

          <p>Vector embeddings indexed successfully</p>
        </div>
      </motion.div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* BRAND */}

          <section className={styles.brand}>
            <div className={styles.logo}>📄</div>

            <h2>AI Document Chat</h2>

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
                <li key={item}>
                  <ArrowRightOutlined />

                  {item}
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

              <a href='https://linkedin.com' target='_blank'>
                <LinkedinOutlined />
                LinkedIn
              </a>

              <a href='#'>
                <GlobalOutlined />
                Portfolio
              </a>

              <a href='mailto:p4avinashkumar@gmail.com'>
                <MailOutlined />
                Email
              </a>
            </div>
          </section>
        </div>

        {/* Divider */}

        <div className={styles.divider} />

        {/* Bottom */}

        <div className={styles.bottomBar}>
          <span>© 2026 AI Document Chat</span>

          <span>Built with ❤️ by Avinash Kumar</span>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
