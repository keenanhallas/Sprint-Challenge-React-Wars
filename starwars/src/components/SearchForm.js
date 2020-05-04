import React, { useState } from "react";
import styled from "styled-components";

const SearchForm = ({characterArr, setCharacterArr, initialState}) => {
    const FormWraper = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    `;

    const [inputValue, setInputValue] = useState("");
    
    const changeHandler = event => {
        setInputValue(event.target.value);
        setCharacterArr(initialState);
    };
    
    return (
        <form>
	        <label>Character Search</label>
	        <input
		        type="text"
		        onChange={changeHandler}/>
            <input
		        type="button"
		        value="Search"
                onClick={() => {
                    setCharacterArr([]);
                    characterArr.map(char => {
                        if (char.name.includes(inputValue)){
                            setCharacterArr([char]);
                        }
                    });
                }}/>
        </form>
    );
}

export default SearchForm;