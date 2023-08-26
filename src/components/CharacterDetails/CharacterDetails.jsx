import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useStore from '../../state/store';
import Styles from './CharacterDetails.module.scss';
import homeIcon from '../../assets/icons/home.png';
import md5 from 'md5';
import axios from 'axios';
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading';

const CharacterDetails = () => {
  const { characterId } = useParams();
  const character = useStore((state) => state.character);
  const setCharacter = useStore((state) => state.setCharacter);
  const time = Number(new Date());
  const publicKey = '86f5492ad907e42d3e0a0ee600456d19';
  const hash = md5(time + '8228932990c0593c2930e8ceec643e41bcceff8d' + '86f5492ad907e42d3e0a0ee600456d19');
  const loading = useStore((state) => state.loading);
  const setLoading = useStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(true);
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters/${characterId}`,
          {
            params: {
              characterId: characterId,
              apikey: publicKey,
              ts: time,
              hash: hash,
            },
          }
        );

        setCharacter(response.data.data.results[0]);
        setLoading(false);
      } catch (error) {
        console.error('An error occurred while fetching character:', error);
      }
    };

    fetchCharacter();

  }, [characterId]);

  if(character && character.thumbnail) {
    character.thumbnailPath = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  } else {
    character.thumbnailPath = '';
  }

  return (
    <div className={Styles.characterContainer}>
      <Link to="/" className={Styles.link}>
        <img src={homeIcon} className={Styles.homeIcon} /></Link>
      {!loading ? (
        <div className={Styles.characterDetails}>
          <img src={character.thumbnailPath} alt={character.name} />
          <div className={Styles.textContainer}>
            <h1 className={Styles.name}>{character.name}</h1>
            <p className={Styles.description}>{character.description}</p>
          </div>
        </div>
      ) : (
        <SpinnerLoading/>
      )}
    </div>
  );
};
export default CharacterDetails;