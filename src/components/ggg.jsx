import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookList.css';
import Header from './Header';

const BookList = () => {
  const [categorizedBooks, setCategorizedBooks] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const API_KEY = 'AIzaSyC0yWITpmlEe0WLYXBoqwaidT2hSUjDLyU';
  const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

  const fetchBooks = async () => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: 'all',
          key: API_KEY,
          maxResults: 40,
        },
      });

      const fetchedBooks = response.data.items || [];

      const categorized = fetchedBooks.reduce((acc, book) => {
        const categories = book.volumeInfo.categories || ['Uncategorized'];

        categories.forEach((category) => {
          if (!acc[category]) {
            acc[category] = [];
          }

          acc[category].push({
            id: book.id,
            title: book.volumeInfo.title || 'No Title Available',
            authors: book.volumeInfo.authors?.join(', ') || 'Unknown Author',
            ratings: book.volumeInfo.averageRating || 'No Ratings',
            thumbnail: book.volumeInfo.imageLinks?.thumbnail || '/placeholder.png',
          });
        });

        return acc;
      }, {});

      setCategorizedBooks(categorized);
      setAvailableCategories(Object.keys(categorized));
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleCategorySelection = (category) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((cat) => cat !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  const filteredBooks = selectedCategories.length
    ? Object.keys(categorizedBooks)
        .filter((category) => selectedCategories.includes(category))
        .reduce((acc, key) => {
          acc[key] = categorizedBooks[key];
          return acc;
        }, {})
    : categorizedBooks;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Header />
      <button className={`open-sidebar ${isSidebarOpen ? 'hidden' : ''}`} onClick={toggleSidebar}>Genres</button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="back-button" onClick={toggleSidebar}>&larr;</button>
        <h3>Book Categories</h3>
        <div className="category-filter">
          {availableCategories.map((category) => (
            <label key={category} className="filter-label">
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategorySelection(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>
      <div className="booklist-container">
        {Object.keys(filteredBooks).map((category) => (
          <div key={category} className="book-category">
            <h2 className="category-title">{category}</h2>
            <div className="book-grid">
              {filteredBooks[category].map((book) => (
                <div key={book.id} className="book-card animated-card">
                  <img
                    src={book.thumbnail}
                    alt={book.title}
                    className="book-thumbnail"
                  />
                  <h3>{book.title}</h3>
                  <p><strong>Author(s):</strong> {book.authors}</p>
                  <p><strong>Ratings:</strong> {book.ratings}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;