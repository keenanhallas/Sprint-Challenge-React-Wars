import React, { useEffect, useState } from "react";
import axios from "axios";

const GetCharacters = ({setCharacterArr}) => {
    let moreCharacters = [];
    let count;
    
    useEffect(() => {
        axios.get("https://swapi.py4e.com/api/people/")
          .then(res => {
            count = res.data.count;
          })
          .catch(err => {
            console.log(err);
          });
      }, [])

    const getMore = () => {
        for (let i = 1; i <= count; i++){
            axios.get(`https://swapi.py4e.com/api/people/${i}`)
                .then(res => {
                    moreCharacters.push(res.data);
                })
                .catch(err => {
                    console.log(`In nested Axios request: ${err}`)
                });
        }; //this is not an array yet, so it a for loop the best way to go?
            //setCharacters(characterArr);
        setCharacterArr(moreCharacters);
    };

    return (
        <form>
            <input
		        type="button"
		        value="Get more characters"
                onClick={() => {
                    getMore();
                }}/>
        </form>
    );
}

export default GetCharacters;