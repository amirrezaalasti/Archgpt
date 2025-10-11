import './Header.css'

function Header({ onMenuClick, onNewChat }) {
  return (
    <header className="header">
      <button className="menu-button" onClick={onMenuClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      <h1 className="header-title">ArchGPT</h1>
      <div className="header-actions">
        <button className="icon-button" onClick={onNewChat} title="New Chat">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header

