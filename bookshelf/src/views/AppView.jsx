import React, {useRef, useState} from 'react';
import {HeaderView} from "./HeaderView";
import {BodyView} from "./BodyView.jsx";
import {ResultView} from "./ResultView";

const AppView = ({books,bookResults,updateShelf,searchQuery}) => {

    return (
        <div>
            <HeaderView  bookList = {bookResults} updateShelf = {updateShelf}  searchQuery ={searchQuery} />
            <BodyView bookList = {books} updateShelf = {updateShelf} />
        </div>
    );
};

export default AppView;
