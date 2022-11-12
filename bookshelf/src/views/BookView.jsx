import React from 'react';
import styled from "styled-components";



const Book = styled.li`
  width: 140px;
  padding: 10px;
`;
const BookTitle = styled.p`
  font-size: 0.8em;
  overflow: hidden;
`;
const BookDescription = styled.div`
  font-size: 0.8em;
  color: #999;`
;
const BookCover = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: 128px;
  height: 193px;
  background-image: ${(props) => `url(${props.image})`};
`;





const BookView = ({book,updateShelf}) => {

    const update = (book, Shelf) => {
        book.shelf = Shelf;
        updateShelf(book);

    }

    return (
        <div>
            <Book id={book.id}>
                <BookCover image={book?.imageLinks?.thumbnail}/>
                <select
                    onChange={(event) => update(book,event.target.value)}
                    defaultValue={book.shelf} >
                    <option value="wantToRead">Want to Read</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                <BookTitle>{book?.title}</BookTitle>
                {/*<BookDescription>{book?.authors[0]}</BookDescription>*/}
            </Book>

        </div>
    );
};

export default BookView;
