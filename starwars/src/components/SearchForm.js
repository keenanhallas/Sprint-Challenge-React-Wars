import React, { useState } from "react";
import styled from "styled-components";

const SearchForm = ({characterArr, setCharacterArr, initialState}) => {
    const StyledLabel = styled.label`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    margin-right: 5px;
    `;

    const StyledInput = styled.input`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25rem;
    `;

    const [inputValue, setInputValue] = useState("");

    return (
        <form>
	        <StyledLabel>Character Search</StyledLabel>
	        <input
		        type="text"
		        onChange={(event) => {
                    setInputValue(event.target.value);
                    setCharacterArr(initialState);
                }}/>
            <StyledInput
		        type="button"
		        value="Search"
                onClick={() => {
                    const newArray = [];
                    characterArr.map(char => {
                        if (char.name.includes(inputValue)){
                            newArray.push(char);
                            console.log(newArray);
                        }
                    });
                    setCharacterArr(newArray);
                }}/>
        </form>
    );
}

export default SearchForm;