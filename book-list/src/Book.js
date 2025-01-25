const Book = ({ author, title, img }) => {
  return (
    <article className='book'>
      <img src={img} alt='Interesting Facts For Curious Minds' />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
