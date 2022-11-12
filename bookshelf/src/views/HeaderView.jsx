// @flow
import * as React from 'react';
import styled from "styled-components";
import {ResultView} from "./ResultView.jsx";
import {Link, useNavigate} from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  background-color: #d94848;

`;

const Icon = styled.div`
  padding: 5px;
  flex: 0.225;

`;

const InputQuery = styled.input`
  flex: 0.5;
  align-items: center;
  justify-self: center;
  background-repeat: no-repeat;
  background-position: 20px center;
  background-size: 1.2em;
  outline: none;
  border: 0;
`;

export const HeaderView = ({bookList, updateShelf, searchQuery}) => {
    let navigate = useNavigate();
    const setter = (value) =>{
        if (value.length>5) {
            searchQuery(value);
        }
    }
    const routeChange = () =>{

        navigate("/");
    }


    return (
        <div>
            <Container>
                <Icon onClick={event =>  window.location.href='/'}>Library</Icon>
                <InputQuery
                    type="text"
                    placeholder="Search for books..."
                    onChange={(event) => setter(event.target.value)}
                />
            </Container>
            {bookList.length !==0 && <ResultView bookList={bookList} updateShelf={updateShelf}/>}
        </div>

    );
};
