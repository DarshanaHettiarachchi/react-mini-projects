import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book_1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: './images/book_1.jpg',
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => (
        <Book {...book} key={book.id} />
      ))}
    </section>
  );
};

const Book = ({ author, title, img }) => {
  return (
    <article className='book'>
      <img src={img} alt='Interesting Facts For Curious Minds' />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList />);
