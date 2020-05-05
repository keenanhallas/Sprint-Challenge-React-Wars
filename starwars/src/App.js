import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from "styled-components";
import './App.css';
import Character from './components/Character';
import SearchForm from './components/SearchForm';
import GetCharacters from './components/GetCharacters';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  const MainHeader = styled.h1`
    font-family: 'Orbitron', sans-serif;
    font-size: 3rem;
  `;
  
  const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  `;

  const [characterArr, setCharacterArr] = useState([]);
  const [initialState, setInitialState] = useState([]);
  
  useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/")
      .then(res => {
        setCharacterArr(res.data.results);
        setInitialState(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  return (
    <div className="App">
      <MainHeader className="Header">Star Wars Characters</MainHeader>
      <SearchForm
        characterArr={characterArr}
        setCharacterArr={setCharacterArr}
        initialState={initialState}/>
      <CardSection>
      {
        characterArr.map((char, i) => {
          return (
            <Character 
              key={i}
              name={char.name}
              homeworld={char.homeworld}
              gender={char.gender}
              height={char.height}
              weight={char.mass}
              eyeColor={char.eye_color}
              hairColor={char.hair_color}
            />
          );
        })
      }
      </CardSection>
    </div>
  );
}

export default App;




/*
const CardSection = styled.div`
display: flex;
flex-wrap: wrap;
`;
*/

/*
const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  `;
  
  const [characterData, setCharacterData] = useState({});
  const characterArr = [];
  
  useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/")
      .then(res => {
        const count = res.data.count;
        return count;
      })
      .then((count) => {
        for (let i = 1; i <= count; i++){
          axios.get(`https://swapi.py4e.com/api/people/${i}`)
          .then(res => {
            //console.log(res.data);
            characterArr.push(res.data);
            //setTimeout(() => {characterArr.push(res.data)}, 5000);
          })
          .catch(err => {
            console.log(`In nested Axios request: ${err}`)
          });
        }; //this is not an array yet, so it a for loop the best way to go?
        //setCharacters(characterArr);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  //console.log(characterArr);
  characterArr.map(char => {console.log(char)});
  //console.log(characterArr[5]);
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characterArr={characterArr} />
    </div>
  );
}
*/
