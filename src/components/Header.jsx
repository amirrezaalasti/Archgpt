import { useLanguage } from "../LanguageContext";
import { getTranslation } from "../translations";
import "./Header.css";

function Header({ onMenuClick, onNewChat, theme, onToggleTheme, onOpenTools, onLogoClick }) {
  const { language, toggleLanguage } = useLanguage();
  const t = (key, replacements) => getTranslation(language, key, replacements);

  return (
    <header className="header">
      <button className="menu-button" onClick={onMenuClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 12h18M3 6h18M3 18h18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div className="header-title">
        <img
          src="/assets/archgptlogo.png"
          alt="ArchGPT Logo"
          className="archgpt-logo"
          onClick={onLogoClick}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="header-actions">
        <button
          className="icon-button"
          onClick={toggleLanguage}
          title={language === "en" ? "Deutsch" : "English"}
        >
          <span className="language-flag">
            {language === "en" ? "🇩🇪" : "🇬🇧"}
          </span>
        </button>
        <button
          className="icon-button"
          onClick={onOpenTools}
          title={t("tools")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="icon-button"
          onClick={onToggleTheme}
          title={t("switchTheme", {
            mode:
              theme === "light"
                ? language === "en"
                  ? "dark"
                  : "dunkel"
                : language === "en"
                ? "light"
                : "hell",
          })}
        >
          {theme === "light" ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
        <button
          className="icon-button"
          onClick={onNewChat}
          title={t("newChat")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
