import React from "react";
import styled from "styled-components";
// Write your Character component here
const Char = styled.p`
    border 10px solid blue;
    background-color: yellow;
    color: red;
    padding 20px;
    
`

const CharacterCard = (props) => {
    return (
        <div className='character-wrapper'>
             <Char>{props.character[0].name}</Char> 
             <Char>{props.character[1].name}</Char>
             <Char>{props.character[2].name}</Char>
             <Char>{props.character[3].name}</Char>
             <Char>{props.character[4].name}</Char>
             <Char>{props.character[5].name}</Char>
        </div>
    )
}

export default CharacterCard;
