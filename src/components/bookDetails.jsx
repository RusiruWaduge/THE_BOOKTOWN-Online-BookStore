import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import './bookDetails.css';
import Header from './header';
import Footer from './footer';

const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = 'AIzaSyC0yWITpmlEe0WLYXBoqwaidT2hSUjDLyU';
  const BASE_URL = `https://www.googleapis.com/books/v1/volumes/${bookId}`;

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(BASE_URL, {
          params: { key: API_KEY },
        });
        setBookDetails(response.data.volumeInfo);
      } catch (err) {
        setError('Failed to fetch book details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchBookDetails();
  }, [bookId]);

  if (loading) {
    return <div>Loading book details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
       {/* Back Arrow */}
       <div className="back-icon" onClick={() => navigate('/')}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
    <path d="M15 18l-6-6 6-6" fill="none" stroke="black" strokeWidth="2" />
  </svg>
</div>



      <div className="book-details-container">
       
        <div className="book-image">
          <img
            src={bookDetails.imageLinks?.thumbnail || '/placeholder.png'}
            alt={bookDetails.title}
          />
        </div>
        <div className="book-info">
          <h1>{bookDetails.title}</h1>
          <h3>Authors: {bookDetails.authors?.join(', ') || 'Unknown'}</h3>
          <p>
            <strong>Publisher:</strong> {bookDetails.publisher || 'Unknown'} (
            {bookDetails.publishedDate || 'Unknown Date'})
          </p>
          <p>
            <strong>Description:</strong>{' '}
            {bookDetails.description || 'No description available.'}
          </p>
          <p>
            <strong>Page Count:</strong> {bookDetails.pageCount || 'Unknown'}
          </p>
          <p>
            <strong>Print Type:</strong> {bookDetails.printType || 'Unknown'}
          </p>
          <p>
            <strong>Country:</strong> {bookDetails.accessInfo?.country || 'Unknown'}
          </p>
          <p>
            <strong>Ratings:</strong> {bookDetails.averageRating || 'No Ratings'}
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BookDetails;
