import { useState, useEffect } from 'react'
import Header from './components/Header'
import MessageList from './components/MessageList'
import ChatInput from './components/ChatInput'
import Sidebar from './components/Sidebar'
import ToolsPanel from './components/ToolsPanel'
import { useLanguage } from './LanguageContext'
import { getTranslation } from './translations'
import './App.css'

const STORAGE_KEY = 'archgpt_conversations'

function App() {
  const { language } = useLanguage()
  const [conversations, setConversations] = useState([])
  const [currentConversationId, setCurrentConversationId] = useState(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })
  const [isToolsPanelOpen, setIsToolsPanelOpen] = useState(false)
  
  const INITIAL_MESSAGE = {
    id: 1,
    role: 'assistant',
    content: getTranslation(language, 'initialMessage')
  }

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      setConversations(parsed)
      if (parsed.length > 0) {
        setCurrentConversationId(parsed[0].id)
      } else {
        createNewConversation()
      }
    } else {
      createNewConversation()
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (conversations.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations))
    }
  }, [conversations])

  const createNewConversation = () => {
    const newConversation = {
      id: Date.now(),
      title: 'New Conversation',
      messages: [INITIAL_MESSAGE],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    setConversations(prev => [newConversation, ...prev])
    setCurrentConversationId(newConversation.id)
  }

  const getCurrentConversation = () => {
    return conversations.find(conv => conv.id === currentConversationId)
  }

  const updateConversationTitle = (conversationId, messages) => {
    const userMessages = messages.filter(m => m.role === 'user')
    if (userMessages.length > 0) {
      const firstUserMessage = userMessages[0].content
      const title = firstUserMessage.length > 40 
        ? firstUserMessage.substring(0, 40) + '...' 
        : firstUserMessage
      
      setConversations(prev => 
        prev.map(conv => 
          conv.id === conversationId 
            ? { ...conv, title } 
            : conv
        )
      )
    }
  }

  const handleSendMessage = async (content) => {
    if (!currentConversationId) return

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: content
    }
    
    setConversations(prev => 
      prev.map(conv => {
        if (conv.id === currentConversationId) {
          const updatedMessages = [...conv.messages, userMessage]
          if (conv.title === 'New Conversation') {
            setTimeout(() => updateConversationTitle(conv.id, updatedMessages), 0)
          }
          return {
            ...conv,
            messages: updatedMessages,
            updatedAt: new Date().toISOString()
          }
        }
        return conv
      })
    )

    setIsLoading(true)

    try {
      const response = await sendMessageToAPI(content)
      
      const assistantMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: response
      }

      setConversations(prev => 
        prev.map(conv => {
          if (conv.id === currentConversationId) {
            return {
              ...conv,
              messages: [...conv.messages, assistantMessage],
              updatedAt: new Date().toISOString()
            }
          }
          return conv
        })
      )
    } catch (error) {
      console.error('Error sending message:', error)
      
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: getTranslation(language, 'errorMessage')
      }

      setConversations(prev => 
        prev.map(conv => {
          if (conv.id === currentConversationId) {
            return {
              ...conv,
              messages: [...conv.messages, errorMessage],
              updatedAt: new Date().toISOString()
            }
          }
          return conv
        })
      )
    } finally {
      setIsLoading(false)
    }
  }

  const sendMessageToAPI = async (message) => {
    const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || ''
    const apiKey = import.meta.env.VITE_API_KEY
    
    if (message.length > 10000) {
      throw new Error('Message too long')
    }

    const conversation = getCurrentConversation()
    const recentMessages = conversation?.messages.slice(-10) || []
    
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 60000)

    try {
      const headers = {
        'Content-Type': 'application/json',
      }
      
      if (apiKey) {
        headers['Authorization'] = `Bearer ${apiKey}`
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          message: message,
          conversationHistory: recentMessages
        }),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }

      const data = await response.json()
      
      return data.response || data.message || data.text || data.output || 'No response received'
    } catch (error) {
      clearTimeout(timeoutId)
      if (error.name === 'AbortError') {
        throw new Error('Request timeout')
      }
      throw error
    }
  }

  const handleSelectConversation = (conversationId) => {
    setCurrentConversationId(conversationId)
  }

  const handleDeleteConversation = (conversationId) => {
    setConversations(prev => {
      const filtered = prev.filter(conv => conv.id !== conversationId)
      
      if (conversationId === currentConversationId) {
        if (filtered.length > 0) {
          setCurrentConversationId(filtered[0].id)
        } else {
          createNewConversation()
        }
      }
      
      return filtered
    })
  }

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const currentConversation = getCurrentConversation()

  return (
    <div className="app">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        conversations={conversations}
        currentConversationId={currentConversationId}
        onNewChat={createNewConversation}
        onSelectConversation={handleSelectConversation}
        onDeleteConversation={handleDeleteConversation}
      />
      <div className={`main-content ${isSidebarOpen ? 'with-sidebar' : ''}`}>
        <Header 
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
          onNewChat={createNewConversation}
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenTools={() => setIsToolsPanelOpen(true)}
        />
        <MessageList 
          messages={currentConversation?.messages || []} 
          isLoading={isLoading}
        />
        <ChatInput 
          onSendMessage={handleSendMessage}
          disabled={isLoading}
        />
      </div>
      <ToolsPanel 
        isOpen={isToolsPanelOpen}
        onClose={() => setIsToolsPanelOpen(false)}
        onSendToChat={handleSendMessage}
      />
    </div>
  )
}

export default App

