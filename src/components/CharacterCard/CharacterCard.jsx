import React from 'react';
import Styles from './CharacterCard.module.scss';

const CharacterCard = ({ character }) => {
    return (
        <div className={Styles.character}>
            <img src={character.thumbnail} alt={character.name} />
            <h3 className={Styles.name}>{character.name}</h3>
        </div>
    )
};

export default CharacterCard;