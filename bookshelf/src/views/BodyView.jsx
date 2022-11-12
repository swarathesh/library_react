// @flow
import * as React from 'react';
import styled from "styled-components";
import BookView from "./BookView.jsx";
import {STATUSES} from "../utils/STATUSES.jsx";


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


export const BodyView = ({bookList,updateShelf}) => {

    return (
        <Container>
            {Object.entries(STATUSES).map(([statusKey, displayValue]) => {
                    const data = bookList
                        .filter(({shelf}) => shelf === statusKey)
                        .map((book) => (
                            <BookView book={book} updateShelf={updateShelf}/>
                        ))

                    ;
                    if (data.length > 0) {
                        return (
                            <Container>
                                <Categories>{displayValue}</Categories>
                                <Divider/>
                                <BookGrid>
                                    {data}
                                </BookGrid>
                            </Container>
                        );
                    }
                })}
        </Container>
    );
};
