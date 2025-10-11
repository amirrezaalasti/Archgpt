# ArchGPT - AI Assistant for Architects

A modern, ChatGPT-style interface specifically designed for architects. Built with React and Vite.

## Features

- **Clean, Modern UI** - ChatGPT-inspired interface designed for architects
- **Multiple Conversations** - Create and manage unlimited conversation threads
- **Persistent Storage** - Conversations are saved to localStorage and persist between sessions
- **Smart Organization** - Conversations grouped by time (Today, Yesterday, Last 7 Days, etc.)
- **Auto-Generated Titles** - Conversation titles automatically generated from first user message
- **Conversation Switching** - Easily switch between different conversation threads
- **Delete Conversations** - Remove unwanted conversations with hover-to-delete functionality
- **Loading States** - Beautiful typing indicator while waiting for responses
- **Auto-scrolling** - Messages automatically scroll into view
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Keyboard Shortcuts** - Enter to send, Shift+Enter for new line
- **Auto-resize Input** - Text area grows as you type (up to 200px)
- **API Ready** - Easy integration with OpenAI, Anthropic, or custom backends

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features

## Getting Started

### Prerequisites

- Node.js 16+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:
```bash
cd Archgpt
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
Archgpt/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Top navigation bar
│   │   ├── Header.css
│   │   ├── Sidebar.jsx      # Conversation history sidebar
│   │   ├── Sidebar.css
│   │   ├── MessageList.jsx  # Chat messages display
│   │   ├── MessageList.css
│   │   ├── ChatInput.jsx    # Message input area
│   │   └── ChatInput.css
│   ├── App.jsx              # Main app component
│   ├── App.css
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## API Integration

The app currently uses mock responses for demonstration. To connect to a real AI service:

### Quick Start

See the detailed [API Integration Guide](./API_INTEGRATION_GUIDE.md) for complete instructions on connecting to:
- OpenAI (GPT-4/GPT-3.5)
- Anthropic (Claude)
- Custom backend APIs

### Basic Integration

1. Open `src/App.jsx`
2. Find the `sendMessageToAPI` function (around line 152)
3. Replace the mock implementation with your API call

Example:
```javascript
const sendMessageToAPI = async (message) => {
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      message,
      history: getCurrentConversation().messages
    })
  });
  
  const data = await response.json();
  return data.response;
};
```

## Customization

### Theming

The app uses CSS variables for easy theming. Edit `src/index.css` to customize colors:

```css
:root {
  --primary-color: #2d3748;
  --accent-color: #3182ce;
  --background: #f7fafc;
  /* ... more variables */
}
```

## License

MIT

## Contributing

Feel free to submit issues and enhancement requests!

