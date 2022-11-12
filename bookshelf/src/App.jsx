import {BrowserRouter as Router, useRoutes,} from "react-router-dom";
import './App.css'
import * as React from "react";
import AppView from "./views/AppView.jsx";
import {useEffect, useState} from "react";
import * as BooksApi from "./api/BooksAPI.js";


function App() {

    const [books, setBooks] = useState([]);
    const [booksResults, setBooksResults] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const res = await BooksApi.getAll();
            setBooks(res);
        }
        getBooks()
    }, []);


    const updateShelf = (book) => {
        console.log(book);
        const update = async () => {
            await BooksApi.update(book, book.shelf).then(r => console.log(r));
        }
        update();
        setBooks([...books, book]);
    }

    const searchQuery = (query) => {
        const searchQuery = async () => {
            const res = await BooksApi.search(query);
            setBooksResults([]);
            setBooksResults(res);
        }

        searchQuery();

    }

    const App = () => {
        return useRoutes([
            {path: "/",
                element: <AppView books={books} bookResults={booksResults} updateShelf={(book) => updateShelf(book)}
                                  searchQuery={(query) => searchQuery(query)}/>
            }
        ]);
    };
    return (
        <Router>
            <App/>
        </Router>
    );
}

export default App
