# 🧠 DocMind AI

DocMind AI is an AI-powered document chat application that allows users to upload PDF documents and interact with them using natural language.

Instead of manually searching through long documents, users can ask questions and get context-aware answers based on the uploaded document.

## 🚀 Live Demo

[View Live Demo](YOUR_LIVE_DEMO_URL)

## ✨ Features

- 📄 Upload PDF documents
- 💬 Chat with uploaded documents
- 🔎 AI-powered document search
- 🧠 Context-aware responses using RAG
- ⚡ Fast AI responses
- 📚 View document-based conversations
- 📱 Responsive interface
- 🎨 Modern dark-themed UI
- 🔐 User authentication
- 🗂️ Manage uploaded documents
- 💬 Conversation history

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router

### AI / Backend

- Node.js
- Express.js
- Groq
- Jina AI Embeddings
- Pinecone Vector Database
- MongoDB

### Other Technologies

- Multer
- PDF Parser
- Cloudinary

## 🧠 How It Works

DocMind AI follows a Retrieval-Augmented Generation (RAG) architecture.

The overall flow looks like this:

PDF Upload
↓
Text Extraction
↓
Text Cleaning
↓
Document Chunking
↓
Embedding Generation
↓
Vector Database
↓
Semantic Search
↓
Relevant Context
↓
LLM
↓
AI Response

When a user asks a question, the application retrieves the most relevant parts of the uploaded document and provides them as context to the language model.

This helps the model generate answers grounded in the uploaded document instead of relying only on its general knowledge.

## 🏗️ Frontend Architecture

The frontend is built using React and TypeScript with a component-based architecture.

```text
src/
├── api/
├── components/
│   ├── auth/
│   ├── chat/
│   ├── documents/
│   └── common/
├── pages/
├── hooks/
├── context/
├── lib/
├── routes/
├── types/
└── App.tsx
```
