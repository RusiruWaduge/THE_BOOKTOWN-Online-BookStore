import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from '../src/components/bookList';
import BookDetails from '../src/components/bookDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
