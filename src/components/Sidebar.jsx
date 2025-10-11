import { useState } from 'react'
import './Sidebar.css'

function Sidebar({ 
  isOpen, 
  onClose, 
  conversations, 
  currentConversationId, 
  onNewChat, 
  onSelectConversation,
  onDeleteConversation 
}) {
  const [hoveredId, setHoveredId] = useState(null)

  const formatDate = (isoString) => {
    const date = new Date(isoString)
    const now = new Date()
    const diffInMs = now - date
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

    if (diffInDays === 0) return 'Today'
    if (diffInDays === 1) return 'Yesterday'
    if (diffInDays < 7) return `${diffInDays} days ago`
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`
    return date.toLocaleDateString()
  }

  const groupConversations = () => {
    const groups = {
      today: [],
      yesterday: [],
      lastWeek: [],
      lastMonth: [],
      older: []
    }

    conversations.forEach(conv => {
      const date = new Date(conv.updatedAt)
      const now = new Date()
      const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24))

      if (diffInDays === 0) groups.today.push(conv)
      else if (diffInDays === 1) groups.yesterday.push(conv)
      else if (diffInDays < 7) groups.lastWeek.push(conv)
      else if (diffInDays < 30) groups.lastMonth.push(conv)
      else groups.older.push(conv)
    })

    return groups
  }

  const groups = groupConversations()

  const renderConversationGroup = (title, conversations) => {
    if (conversations.length === 0) return null

    return (
      <div className="conversation-section" key={title}>
        <h3 className="section-title">{title}</h3>
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className={`conversation-item-wrapper ${conv.id === currentConversationId ? 'active' : ''}`}
            onMouseEnter={() => setHoveredId(conv.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <button
              className="conversation-item"
              onClick={() => onSelectConversation(conv.id)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
              <span className="conversation-title">{conv.title}</span>
            </button>
            {hoveredId === conv.id && (
              <button
                className="delete-conversation-button"
                onClick={(e) => {
                  e.stopPropagation()
                  onDeleteConversation(conv.id)
                }}
                title="Delete conversation"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="new-chat-button" onClick={onNewChat}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            New Chat
          </button>
        </div>
        
        <div className="sidebar-content">
          {renderConversationGroup('Today', groups.today)}
          {renderConversationGroup('Yesterday', groups.yesterday)}
          {renderConversationGroup('Previous 7 Days', groups.lastWeek)}
          {renderConversationGroup('Previous 30 Days', groups.lastMonth)}
          {renderConversationGroup('Older', groups.older)}
          {conversations.length === 0 && (
            <div className="empty-state">
              <p>No conversations yet</p>
              <p className="empty-state-hint">Start a new chat to begin</p>
            </div>
          )}
        </div>

        <div className="sidebar-footer">
          <button className="sidebar-footer-button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M6.168 18.849A7 7 0 0 1 17.832 18.849" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Profile</span>
          </button>
          <button className="sidebar-footer-button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Settings</span>
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

