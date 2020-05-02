// Write your Character component here
import React from "react";
import styled from "styled-components";
import axios from "axios";

const CardStyler = styled.div`
    background-color: rgba(255,255,255,0.4);
    border: 3px solid rgba(0,0,0,0.6);
    border-radius: 20px;
    width: 32%;
    margin: 2%;
    padding: 2%;
`;

const CardHeader = styled.div`
    font-family: 'Orbitron', sans-serif;
    font-size: 2rem;
`;

const CardBody = styled.div`
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
`;

const Character = ({name, homeworld, gender, height, weight, eyeColor, hairColor}) => {
    //console.log(props.characterArr[0]);
    return (
        <CardStyler>
            <CardHeader>{name}</CardHeader>
            <CardBody>
                <p>Gender: {gender}</p>
                <p>Height: {height}cm</p>
                <p>Weight: {weight}kg</p>
                <p>Eye color: {eyeColor}</p>
                <p>Hair color: {hairColor}</p>
            </CardBody>
        </CardStyler>
    );
};

export default Character;


/*
<p>Homeworld: {
    axios.get(homeworld)
        .then(res => {return res.data.name})
        .catch(err => {console.log(err)})
}</p>
*/