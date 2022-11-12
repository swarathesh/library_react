// @flow
import * as React from 'react';
import styled from "styled-components";
import BookView from "./BookView.jsx";


const Container = styled.div`
  padding: 10px;
`;

const Categories = styled.h3`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`;


const Divider = styled.hr`
  width: 90%;
`;

//BooKShelf
const BookGrid = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;


export const ResultView = ({bookList,updateShelf}) => {
    return (
        <Container>
            <Container>
                <Categories>Your Results</Categories>
                <Divider/>
                <BookGrid>
                    { bookList.map((book) => <BookView id = {book.id} book={book} updateShelf={updateShelf}/>)}
                </BookGrid>
            </Container>
        </Container>
    );
};
