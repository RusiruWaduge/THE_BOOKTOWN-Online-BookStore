import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookList.css';
import Header from './Header';
import Footer from './Footer';
import { FaSearch, FaBook, FaUser, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BookList = () => {
  const [categorizedBooks, setCategorizedBooks] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNoResultsPopup, setShowNoResultsPopup] = useState(false);
  const [manualClose, setManualClose] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleViewMore = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  const API_KEY = 'AIzaSyC0yWITpmlEe0WLYXBoqwaidT2hSUjDLyU';
  const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

  const fetchBooks = async () => {
    try {
      setLoading(true);
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
          if (!acc[category]) acc[category] = [];
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleCategorySelection = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((cat) => cat !== category)
        : [...prevSelected, category]
    );
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    setManualClose(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closePopup = () => {
    setShowNoResultsPopup(false);
    setManualClose(true);
  };

  const filteredBooks = selectedCategories.length
    ? Object.keys(categorizedBooks)
        .filter((category) => selectedCategories.includes(category))
        .reduce((acc, key) => {
          acc[key] = categorizedBooks[key].filter(
            (book) =>
              book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              book.authors.toLowerCase().includes(searchQuery.toLowerCase())
          );
          return acc;
        }, {})
    : Object.keys(categorizedBooks).reduce((acc, key) => {
        acc[key] = categorizedBooks[key].filter(
          (book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.authors.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return acc;
      }, {});

  useEffect(() => {
    const isNoResults = Object.keys(filteredBooks).every(
      (category) => filteredBooks[category].length === 0
    );

    if (searchQuery.trim() && isNoResults && !manualClose) {
      setShowNoResultsPopup(true);

      const timer = setTimeout(() => {
        setShowNoResultsPopup(false);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setShowNoResultsPopup(false);
    }
  }, [filteredBooks, manualClose, searchQuery]);

  return (
    <div>
      <Header />

      <div className="search-bar">
        <div className="search-icon">
          <FaSearch />
        </div>
        <input
          type="text"
          placeholder="Search Books..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </div>

      <button
        className={`open-sidebar ${isSidebarOpen ? 'hidden' : ''}`}
        onClick={toggleSidebar}
      >
        Genres
      </button>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="back-button" onClick={toggleSidebar}>
          &larr;
        </button>
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

      {showNoResultsPopup && (
        <div className="popup-message">
          <div className="popup-content">
            <p>No results found for your search.</p>
            <button className="popup-close" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}

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
                  <div className="book-info">
                    <h3>
                      <FaBook className="icon" /> {book.title}
                    </h3>
                    <p>
                      <FaUser className="icon" /> <strong>Author(s):</strong> {book.authors}
                    </p>
                    <p>
                      <FaStar className="icon" /> <strong>Ratings:</strong> {book.ratings}
                    </p>
                  </div>
                  <button
                    className="view-more-button"
                    onClick={() => handleViewMore(book.id)}
                  >
                    View More
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default BookList;
