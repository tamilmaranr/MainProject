import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './data/books';
import Book from './components/Book';

const BookList = () => {
  return (
    <div className='main-body'>
      <h1 className='main-title'>
       Book <span>Store</span>
      </h1>
      <h4 className='date'>April 2023</h4>
      <article className='book-list'>
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </article>
      <section className='bottom'>
        <h5 className='bottom-title'>
          Have a <span>pleasure</span> reading
        </h5>
        
      </section>
    </div>
  );
};

export default BookList;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
