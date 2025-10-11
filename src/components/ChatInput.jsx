import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../LanguageContext'
import { getTranslation } from '../translations'
import './ChatInput.css'

function ChatInput({ onSendMessage, disabled }) {
  const { language } = useLanguage()
  const t = (key) => getTranslation(language, key)
  const [input, setInput] = useState('')
  const textareaRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`
    }
  }, [input])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() && !disabled) {
      onSendMessage(input.trim())
      setInput('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="chat-input-container">
      <form onSubmit={handleSubmit} className="chat-input-form">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('typeMessage')}
          className="chat-input"
          rows="1"
          disabled={disabled}
        />
        <button 
          type="submit" 
          className="send-button"
          disabled={!input.trim() || disabled}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </form>
      <p className="input-hint">
        ArchGPT can make mistakes. Verify important information.
      </p>
    </div>
  )
}

export default ChatInput

