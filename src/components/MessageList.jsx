import { useEffect, useRef } from 'react'
import './MessageList.css'

function MessageList({ messages, isLoading }) {
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  return (
    <div className="message-list">
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.role}`}>
            <div className="message-avatar">
              {message.role === 'assistant' ? (
                <img 
                  src="/assets/chatlogo.png" 
                  alt="ArchGPT" 
                  className="assistant-avatar-img"
                />
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6.168 18.849A7 7 0 0 1 17.832 18.849" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </div>
            <div className="message-content">
              <div className="message-role">
                {message.role === 'assistant' ? 'ArchGPT' : 'You'}
              </div>
              <div className="message-text">{message.content}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message assistant">
            <div className="message-avatar">
              <img 
                src="/assets/chatlogo.png" 
                alt="ArchGPT" 
                className="assistant-avatar-img"
              />
            </div>
            <div className="message-content">
              <div className="message-role">ArchGPT</div>
              <div className="message-text">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}

export default MessageList

