import { useState } from 'react';
import './App.css';

const articles = [
  {
    date: "2025-01-15",
    title: "Understanding React",
    text: "React is a JavaScript library for building user interfaces."
  },
  {
    date: "2025-01-16",
    title: "React Components",
    text: "It lets you compose complex UIs from small and isolated pieces of code called 'components'."
  },
  {
    date: "2025-01-17",
    title: "React on the Server",
    text: "React can also render on the server using Node and power mobile apps using React Native."
  },
  {
    date: "2025-01-18",
    title: "React Community",
    text: "React is maintained by Facebook and a community of individual developers and companies."
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filtered = articles.filter(article =>
      article.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className='App'>
      <h1>Search Articles</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {filteredArticles.map((article, index) => (
          <li key={index}>
            <p><strong>Date:</strong> {article.date}</p>
            <h2>{article.title}</h2>
            <p>{getHighlightedText(article.text, searchTerm)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
